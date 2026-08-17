#!/usr/bin/env node

// Validates an open pull request against the author-showcase submission rules:
//
// 1. The PR title must be proper UTF-8 text: no replacement characters
//    (U+FFFD) and no runs of "?" left behind by a failed encoding round-trip.
//    Garbled titles are rejected outright.
// 2. Every repository the PR ADDS to (or rewrites in) the author-showcase
//    sections must be public, carry the `dsh-plugin` topic, and have MORE
//    THAN 10 stars. Only lines the PR itself introduces (diff lines starting
//    with `+`) are checked, so entries that predate this rule stay untouched.
//
// Runs in CI (.github/workflows/validate-pr.yml); PR_NUMBER and PR_TITLE are
// provided by the workflow environment and the diff is fetched through the
// GitHub API with GITHUB_TOKEN.

import process from 'node:process';

const prNumber = process.env.PR_NUMBER;
const prTitle = (process.env.PR_TITLE ?? '').trim();
const repoSlug = process.env.GITHUB_REPOSITORY || 'bruc3van/awesome-dsh-plugin';
const starThreshold = 10;

const errors = [];

// --- 1. Title sanity ---------------------------------------------------------
if (!prTitle) {
  errors.push('PR title is empty — give the PR a readable UTF-8 title');
}
if (prTitle.includes('\uFFFD')) {
  errors.push('PR title contains replacement characters (\\uFFFD) — the title is not valid UTF-8; fix it and re-submit');
}
if (/(\?){4,}/.test(prTitle)) {
  errors.push(`PR title looks garbled: "${prTitle}" — titles must be proper UTF-8 text; fix it and re-submit`);
}

// --- 2. Stars of the repositories introduced in the showcase diff -------------
const headers = {
  'User-Agent': 'awesome-dsh-plugin',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

// An author-showcase line added by this PR, in the documented format:
//   - **[name](https://github.com/owner/repo)** (@author · YYYY-MM-DD) — ...
const addedEntryPattern = /^\+\s*-\s+\*\*\[[^\]]+\]\(https:\/\/github\.com\/([\w.-]+\/[\w.-]+)\)/;
const repos = [];

let diff = '';
if (prNumber) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoSlug}/pulls/${prNumber}`, {
      headers: { ...headers, Accept: 'application/vnd.github.diff' },
    });
    if (!response.ok) {
      errors.push(`could not fetch the PR diff: GitHub API ${response.status}`);
    } else {
      diff = await response.text();
    }
  } catch (error) {
    errors.push(`could not fetch the PR diff: ${error.message}`);
  }
} else {
  errors.push('PR_NUMBER is not set — run this script from the validate-pr workflow');
}

for (const line of diff.split('\n')) {
  const match = line.match(addedEntryPattern);
  if (match && !repos.some((repo) => repo.toLowerCase() === match[1].toLowerCase())) {
    repos.push(match[1]);
  }
}

await Promise.all(repos.map(async (fullName) => {
  let repo;
  try {
    const response = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers: { ...headers, Accept: 'application/vnd.github+json' },
    });
    if (response.status === 404) {
      errors.push(`${fullName}: repository not found — deleted, renamed, or not public`);
      return;
    }
    if (!response.ok) {
      errors.push(`${fullName}: GitHub API ${response.status}`);
      return;
    }
    repo = await response.json();
  } catch (error) {
    errors.push(`${fullName}: GitHub API request failed (${error.message})`);
    return;
  }
  if (repo.private) errors.push(`${fullName}: repository is private`);
  if (!(repo.topics || []).includes('dsh-plugin')) {
    errors.push(`${fullName}: missing the "dsh-plugin" topic`);
  }
  const stars = repo.stargazers_count ?? 0;
  if (typeof repo.stargazers_count !== 'number' || stars <= starThreshold) {
    errors.push(
      `${fullName}: ${stars} star(s) — the author showcase requires more than ${starThreshold} stars`,
    );
  }
}));

if (errors.length) {
  console.error(`PR validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `PR #${prNumber ?? '?'} is valid — title ok${
    repos.length
      ? `; ${repos.join(', ')} checked (public, dsh-plugin topic, > ${starThreshold} stars)`
      : '; no author-showcase entries added'
  }.`,
);

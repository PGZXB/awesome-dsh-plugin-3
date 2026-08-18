#!/usr/bin/env node
// README home-page numbers, regenerated with the exact same logic as
// scripts/render.mjs (categoryFor / catalogRepositories / boardRepositories).
//
// These sections of README.md / README_EN.md are hand-maintained (by design —
// the featured picks are human-edited), but their numbers must track the
// catalog after every review merge. Run this script after
// `node scripts/merge.mjs` and paste the output into both READMEs:
//
//   node scripts/readme-stats.mjs
//
// Output blocks:
//   1. ecosystem overview  — total + per-category counts (mindmap numbers)
//   2. community leaderboard — Top 20 rows (must match TOP200.md rows 1-20)
//   3. catalog stats block — repositories / languages / licenses / active
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { assignableCategories, categoryFallback, categoryRules } from './categories.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const snapshot = JSON.parse(readFileSync(resolve(root, 'data/repositories.json'), 'utf8'));
const approvedRaw = JSON.parse(readFileSync(resolve(root, 'data/approved.json'), 'utf8'));
const curated = JSON.parse(readFileSync(resolve(root, 'data/curated.json'), 'utf8'));

const excluded = new Set(Object.keys(curated.excluded_repos || {}).map((k) => k.toLowerCase()));
const leaderboardExclusions = new Set(Object.keys(curated.leaderboard_exclusions || {}).map((k) => k.toLowerCase()));
const approvedNames = new Set(Object.keys(approvedRaw).map((k) => k.toLowerCase()));

const catalog = snapshot.repositories
  .filter((repo) => repo.description && repo.description.trim())
  .filter((repo) => !excluded.has(repo.full_name.toLowerCase()))
  .filter((repo) => approvedNames.has(repo.full_name.toLowerCase()));

function categoryFor(repo) {
  const overrides = curated.category_overrides || {};
  const override = Object.entries(overrides).find(([k]) => k.toLowerCase() === repo.full_name.toLowerCase())?.[1];
  if (override) {
    const match = assignableCategories.find(([key]) => key === override);
    if (match) return match;
  }
  const haystack = [repo.name || repo.full_name.split('/')[1], repo.description, ...(repo.topics || [])]
    .filter(Boolean)
    .join(' ');
  return categoryRules.find((rule) => rule[3].test(haystack)) || categoryFallback;
}

const withCat = catalog.map((repo) => ({ ...repo, cat: categoryFor(repo)[0] }));
const date = snapshot.fetched_at.slice(0, 10);

console.log('=== 1. ecosystem overview (zh labels; EN numbers are the same) ===');
console.log('total:', withCat.length, '| snapshot:', date);
for (const [key, zh] of [...categoryRules, categoryFallback]) {
  const n = withCat.filter((r) => r.cat === key).length;
  console.log(key.padEnd(24), n, '|', zh);
}

console.log('\n=== 2. community leaderboard Top 20 rows (zh + EN identical) ===');
const board = withCat
  .filter((r) => !leaderboardExclusions.has(r.full_name.toLowerCase()))
  .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));
board.slice(0, 20).forEach((r, i) => {
  console.log('| ' + (i + 1) + ' | [' + r.full_name + '](https://github.com/' + r.full_name + ') | ' + r.stargazers_count + ' | ' + (r.license || '—') + ' |');
});

console.log('\n=== 3. catalog stats block ===');
const totals = {
  languages: new Set(withCat.map((r) => r.language).filter(Boolean)).size,
  licenses: withCat.filter((r) => r.license).length,
  active: withCat.filter((r) => !r.archived && !r.disabled).length,
};
console.log('date:', date, '| repositories:', withCat.length, '| languages:', totals.languages, '| licensed:', totals.licenses, '| active:', totals.active);

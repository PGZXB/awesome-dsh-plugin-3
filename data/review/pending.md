# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-19**
- 快照日期 / Snapshot date: **2026-08-19 (UTC)**
- 待审核 / Pending: **333**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **79**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos` 并注明理由
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) with a reason
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | 1189 | 2026-03-08 | 2026-08-19 | Unlimited memory for OpenClaw |
| 2 | [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | 94 | 2026-08-14 | 2026-08-19 | DSH crash-rescue plugin: undo config & plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus offline CLI/GUI that work even when DSH won't boot. |
| 3 | [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | 47 | 2026-08-16 | 2026-08-19 | DeepSeek Harness skin market 皮肤市场 已收录100+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤 |
| 4 | [melandlabs/opencontext](https://github.com/melandlabs/opencontext) | 45 | 2026-08-10 | 2026-08-19 | A temporal context graph, a memory API, retrieval primitives, and a multiple-platform integration mesh — designed to be embedded into any host process. |
| 5 | [openma-ai/Martty](https://github.com/openma-ai/Martty) | 42 | 2026-08-13 | 2026-08-19 | deepseek-harness-tui before. Self-Improvement TUI Plugin of DeepSeek Harness. Everything Here Is Also A Plugin. dsh-tui |
| 6 | [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | 15 | 2026-08-14 | 2026-08-19 | Cross-session memory plugin for DeepSeek Harness: seven-layer SQLite store (soul/user/project/fact/lesson/topic/rules), BM25 retrieval, per-window dream consolidation. 跨会话七层长期记忆插件。 |
| 7 | [jiji262/awesome-deepseek-harness](https://github.com/jiji262/awesome-deepseek-harness) | 14 | 2026-08-14 | 2026-08-19 | A curated list of DeepSeek Harness (DSH) plugins, desktop clients, marketplaces & tutorials · DeepSeek Harness 开源项目与教程精选（中英双语） |
| 8 | [limuyang2/agent-team](https://github.com/limuyang2/agent-team) | 14 | 2026-08-17 | 2026-08-19 | Multi-agent team collaboration for DeepSeek Harness, with independent models, skills, MCP tools, contexts, and a shared workspace. |
| 9 | [kuangre123/deepseek-harness-mac](https://github.com/kuangre123/deepseek-harness-mac) | 8 | 2026-08-19 | 2026-08-19 | Native macOS wrapper for DeepSeek Harness with bundled Node.js runtime, Keychain API key setup, and one-click startup. |
| 10 | [JUSTMONIKA2022/dsh-sandbox-escalation-fix](https://github.com/JUSTMONIKA2022/dsh-sandbox-escalation-fix) | 7 | 2026-08-16 | 2026-08-19 | Session-aware sandbox escalation compatibility plugin for DeepSeek Harness/DSH第三方模型会话沙箱升级兼容插件 |
| 11 | [ForgeaX-Games/forgeax-dsh-game-plugin](https://github.com/ForgeaX-Games/forgeax-dsh-game-plugin) | 6 | 2026-08-19 | 2026-08-19 | DeepSeek Harness (DSH) bundle plugin for ForgeaX game dev — @forgeax/dsh-game |
| 12 | [sfyyy/dsh-vision-bridge](https://github.com/sfyyy/dsh-vision-bridge) | 6 | 2026-08-16 | 2026-08-19 | On-demand vision for text-only DeepSeek Harness (DSH) sessions: images become markers, and a vision_describe tool sends only image + question to an OpenAI-compatible vision model |
| 13 | [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) | 5 | 2026-08-17 | 2026-08-19 | 基于dsh web实现的多种模式，目的是服务于redteam进行授权的安全研究，覆盖渗透测试、红队评估、代码审计等范围领域，请勿用于非法行为。（允许二开，赋予模块各位自己的业务逻辑，不定期完善逻辑与修复bug） |
| 14 | [CHplus0/dsh-shell-command](https://github.com/CHplus0/dsh-shell-command) | 3 | 2026-08-16 | 2026-08-19 | DeepSeek Harness (DSH) plugin: a /! command trigger (run one command, analyze output, inspired by Claude Code's ! gesture) and a /terminal command (interactive PTY popup with on-demand history reference). |
| 15 | [Iwctwbh/dsh-flowglass](https://github.com/Iwctwbh/dsh-flowglass) | 3 | 2026-08-14 | 2026-08-19 | Dynamic Cordis plugin toolbox for DeepSeek Harness — 1 framework + 28 tools, hot-reload from disk. |
| 16 | [kexin8/dsh-composer-keys](https://github.com/kexin8/dsh-composer-keys) | 3 | 2026-08-19 | 2026-08-19 | ⌨️ Keyboard shortcuts for the DSH chat composer — ↑↓ cycle history, Ctrl+C clear input. DSH web plugin. |
| 17 | [KurohaneKaoruko/DSH-Novel](https://github.com/KurohaneKaoruko/DSH-Novel) | 3 | 2026-08-13 | 2026-08-19 | 一个Agent。让DeepSeek Herness变成AI写小说的工作区。这个项目也是DSH写的。 |
| 18 | [lcgash/dsh-plugin-uw](https://github.com/lcgash/dsh-plugin-uw) | 3 | 2026-08-19 | 2026-08-19 | Merge multiple directories into one DSH session with configurable write scopes: primary only, all members via common ancestor, or unrestricted. |
| 19 | [liangyou09/lyshell](https://github.com/liangyou09/lyshell) | 3 | 2026-08-12 | 2026-08-19 | AI-native terminal & SSH client — built-in DeepSeek Harness to launch agents in TUI or embedded Web UI, plus SFTP, serial/Telnet and MCP server. |
| 20 | [TAOxxx7/dsh-plugin-manager](https://github.com/TAOxxx7/dsh-plugin-manager) | 3 | 2026-08-19 | 2026-08-19 | DSH Settings plugin manager bundle for Desktop and native Web profiles |
| 21 | [xing666173/dsh-vision-hub](https://github.com/xing666173/dsh-vision-hub) | 3 | 2026-08-19 | 2026-08-19 | DeepSeek Harness EAC 视觉全家桶:15 个像素级视觉工具(增强版 dsh-tool-vision)+ 桥接内联预览 + 拖拽文件上传,单端点驱动,对话干净,EAC 原生设置适配 |
| 22 | [Zhang9628/qixi-plugin](https://github.com/Zhang9628/qixi-plugin) | 3 | 2026-08-19 | 2026-08-19 | Qixi Festival Easter Egg Plugin: festive skins, bullet comments, and shareable cards.  七夕节彩蛋插件，节日皮肤、弹幕、卡片分享 |
| 23 | [agentforce314/dsh-ccTUI](https://github.com/agentforce314/dsh-ccTUI) | 2 | 2026-08-18 | 2026-08-19 | Claude Code style TUI for Deepseek-Harness |
| 24 | [dawsondx/dsh-custom-logo](https://github.com/dawsondx/dsh-custom-logo) | 2 | 2026-08-19 | 2026-08-19 | DSH web plugin: replace branding (favicon + sidebar logo) with your own images via an in-app upload panel |
| 25 | [EDMOK/dsh-minecraft-theme](https://github.com/EDMOK/dsh-minecraft-theme) | 2 | 2026-08-17 | 2026-08-19 | Minecraft Launcher 风格的 DeepSeek Harness WebUI 皮肤插件 |
| 26 | [Eligahyu/dsh-sentinel-scanner](https://github.com/Eligahyu/dsh-sentinel-scanner) | 2 | 2026-08-17 | 2026-08-19 | 🛡️ 给 DeepSeek Harness 插件拍 X 光 — 插件安全体检与健康检查。零依赖只读静态扫描:代码执行/凭据/外传/混淆/安装脚本/bundle 清单,0-100 风险分。DSH tool plugin + standalone CLI。 |
| 27 | [fancr-code/dsh-plugin-usage-meter](https://github.com/fancr-code/dsh-plugin-usage-meter) | 2 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 网页插件：API 用量/费用/余额仪表 — 当日/近7天按模型堆叠柱状图、预算提醒、跨会话账本。 |
| 28 | [HongzhongL/dsh-grayprint](https://github.com/HongzhongL/dsh-grayprint) | 2 | 2026-08-19 | 2026-08-19 | GrayPrint — dsh web plugin: places a session's reasoning style between the dsv4-grayscale and current-release poles. Calibrated on 41 grayscale + 42 current sessions, 92.8% holdout. |
| 29 | [ht719/dsh-session-categories](https://github.com/ht719/dsh-session-categories) | 2 | 2026-08-19 | 2026-08-19 | Session categories plugin for DeepSeek Harness |
| 30 | [JasperGuWP/dsh-plugin-schemes](https://github.com/JasperGuWP/dsh-plugin-schemes) | 2 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin development rules: five extension forms (bundle / patch plugin / preset / skill / dynamic plugin) with a selection decision tree, install & publish guide. |
| 31 | [JasperGuWP/dsh-project-memory](https://github.com/JasperGuWP/dsh-project-memory) | 2 | 2026-08-19 | 2026-08-19 | Project-level persistent memory plugin for deepseek-harness: auditable Markdown memory files with memory_load_context / upsert / finalize / forget tools. Zero-dependency, installable via dsh plugin add. |
| 32 | [OpenSaozi/dsh-antigravity](https://github.com/OpenSaozi/dsh-antigravity) | 2 | 2026-08-14 | 2026-08-19 | 接入 Google Anti Gravity Coding Plan 作为 DeepSeek Harness LLM Provider，直接使用账号下的 Gemini / Claude / GPT-OSS。 \| Google Anti Gravity Coding Plan LLM Provider for DeepSeek Harness. |
| 33 | [OpenSaozi/dsh-xai-catalog](https://github.com/OpenSaozi/dsh-xai-catalog) | 2 | 2026-08-14 | 2026-08-19 | 接入 xAI / Grok Coding Plan 作为 DeepSeek Harness 模型清单插件，自动同步并选用 grok-4.6 等最新模型。 \| Live xAI / Grok model catalog plugin for DeepSeek Harness. |
| 34 | [Roarpeng/GraphFlow](https://github.com/Roarpeng/GraphFlow) | 2 | 2026-05-27 | 2026-08-19 | Local-first code knowledge graph and context harness for coding agents. MCP + DeepSeek Harness (dsh) plugin. |
| 35 | [warrenop/open-preset-harness](https://github.com/warrenop/open-preset-harness) | 2 | 2026-08-18 | 2026-08-19 | DeepSeek Harness: Everything is a Plugin. |
| 36 | [wellcover/dsh-opencodego-quota](https://github.com/wellcover/dsh-opencodego-quota) | 2 | 2026-08-19 | 2026-08-19 | OpenCode Go (opencode.ai/zen/go) quota usage card for the DeepSeek Harness (DSH) Web GUI sidebar - day/week/month progress bars, DS peak/valley billing strip, customizable auto-refresh interval. |
| 37 | [wtiaw/dsh-ccswitch-importer](https://github.com/wtiaw/dsh-ccswitch-importer) | 2 | 2026-08-18 | 2026-08-19 | Import CCSwitch Codex profiles and configure per-model reasoning in DSH. |
| 38 | [yuye05/dsh-monitor](https://github.com/yuye05/dsh-monitor) | 2 | 2026-08-19 | 2026-08-19 | Windows 桌面悬浮窗，实时显示 DeepSeek 官方用量（余额/今日消费/模型 Tokens/请求数）+  本地缓存命中统计 |
| 39 | [ywleeo/browser-mcp](https://github.com/ywleeo/browser-mcp) | 2 | 2026-08-12 | 2026-08-19 | Local MCP server for reading and interacting with web pages through real Chrome. |
| 40 | [142475/dsh-esc-stop](https://github.com/142475/dsh-esc-stop) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness web GUI plugin: press Esc to stop conversation generation (same as the stop button). |
| 41 | [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) | 1 | 2026-08-19 | 2026-08-19 | Google Antigravity (agy CLI) models for DeepSeek Harness — streaming chat, thinking, tool activity, usage, in-GUI Google OAuth login |
| 42 | [aqsk-BLG/dsh-memory](https://github.com/aqsk-BLG/dsh-memory) | 1 | 2026-08-16 | 2026-08-19 | Layered file memory for DeepSeek Harness — workspace-scoped USER/MEMORY notes, background consolidation, hybrid session recall. npm: dsh-file-memory |
| 43 | [Awesome-AI-Pedia/dsh-lark-web-auth](https://github.com/Awesome-AI-Pedia/dsh-lark-web-auth) | 1 | 2026-08-19 | 2026-08-19 | deepseek飞书登录插件，对话隔离 |
| 44 | [bihangchi9-creator/dsh-lark-bridge](https://github.com/bihangchi9-creator/dsh-lark-bridge) | 1 | 2026-08-19 | 2026-08-19 | A native DeepSeek Harness (dsh) plugin bridging dsh coding agents to Feishu/Lark group chats — one group, one project directory. |
| 45 | [brianwang2007xjtu/dsh-agent-teams](https://github.com/brianwang2007xjtu/dsh-agent-teams) | 1 | 2026-08-19 | 2026-08-19 | dsh plugin for multi-agent co-working. |
| 46 | [brianwang2007xjtu/dsh-memory-evolve](https://github.com/brianwang2007xjtu/dsh-memory-evolve) | 1 | 2026-08-19 | 2026-08-19 | Empowers DeepSeek Harness AI with cross-session long-term memory, manages your to-dos and skills, and orchestrates multiple AI sessions and external agents to collaborate—it learns from you over time, so context stays intact even when you switch conversations. |
| 47 | [CanglongCl/dsh-tool-retry](https://github.com/CanglongCl/dsh-tool-retry) | 1 | 2026-08-17 | 2026-08-19 | DeepSeek Harness 的工具调用重试插件：自动暂存每次工具调用，失败后让 AI 只改一部分参数并重放，免去整段长参数重新生成。 |
| 48 | [ChenYiming-aaa/dsh-github](https://github.com/ChenYiming-aaa/dsh-github) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness（DSH）GitHub 集成插件：一次认证（GITHUB_TOKEN 或 OAuth Device Flow）后，模型可直接调用 45 个 github_* 工具完成建仓、推送、提 PR、管 issue、搜索代码等；常规读写直接放行，危险操作（删除/force push/合并 PR/关 issue）保留审批门；token 存于 DSH credentials 服务，不落日志。对标 opencode GitHub MCP。 |
| 49 | [ChenYiming-aaa/dsh-ui-ux-pro-max](https://github.com/ChenYiming-aaa/dsh-ui-ux-pro-max) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness（DSH）插件：基于 GitHub 开源项目 ui-ux-pro-max-skill 修改优化的 UI/UX 设计智能库——内置 67 种设计风格、161 个调色板、57 组字体搭配、99 条 UX 规范、25 种图表类型与 22 个技术栈，提供 design_recommend / design_review / design_search 模型工具，离线可用、中文优先、零网络依赖。 |
| 50 | [Chillizu/MiopIIk](https://github.com/Chillizu/MiopIIk) | 1 | 2026-08-15 | 2026-08-19 | DeepSeek Harness 插件集——恢复/执行/授权/探测/学习/遥测 7 个单职责插件 + miopiik preset 模板 \| Single-purpose plugin suite for DeepSeek Harness (DSH): checkpoint/rewind recovery, scoped executor subagents, model authorization gate, capability probing, skill minting, token telemetry — plus the miopiik 4-layer workflow preset template |
| 51 | [CraZY222123/dsh-self-evolve](https://github.com/CraZY222123/dsh-self-evolve) | 1 | 2026-08-19 | 2026-08-19 | Self-evolve memory plugin for DeepSeek Harness: learns from your own sessions, injects token-budgeted preference summaries into every step. /memory commands, memory tool, settings panel. Local-only data. |
| 52 | [CZ1900/suanzhang-dsh](https://github.com/CZ1900/suanzhang-dsh) | 1 | 2026-08-19 | 2026-08-19 | 算账 (suanzhang) — DeepSeek Harness 计费插件：余额/今日消费/按步骤费用，交易终端风格，官方价自动同步。 |
| 53 | [deff-C/dsh-desktop](https://github.com/deff-C/dsh-desktop) | 1 | 2026-08-19 | 2026-08-19 | 提供一键启动桌面版deepseek harness的极简版dsh-plugin |
| 54 | [enilmalus/offline_websearch](https://github.com/enilmalus/offline_websearch) | 1 | 2026-08-19 | 2026-08-19 | DSH/Claude Code 的本地 Web Search |
| 55 | [ericfetch/dsh-sight](https://github.com/ericfetch/dsh-sight) | 1 | 2026-08-19 | 2026-08-19 | 支持多模态模型图片直传，自动扫描、自动匹配\手动切换。可主动清除对话里的图片，解决误传图片后不可切回llm模型导致的整个会话作废的情况。 |
| 56 | [EugeneVl/dsh_session_folders](https://github.com/EugeneVl/dsh_session_folders) | 1 | 2026-08-19 | 2026-08-19 | Session folders for the DSH web sidebar: one-level named folders per workspace, drag-and-drop or context menu to group sessions, server-side persistence. No harness changes. |
| 57 | [fan56/dsh-tui-pi](https://github.com/fan56/dsh-tui-pi) | 1 | 2026-08-14 | 2026-08-19 | pi-style terminal UI for DeepSeek Harness (dsh) — pi-tui look & feel, dsh slash commands, GitHub light/dark themes, powerline footer |
| 58 | [frankstanmonster/dsh-overlay_companion](https://github.com/frankstanmonster/dsh-overlay_companion) | 1 | 2026-08-18 | 2026-08-19 | 动态女仆桌面悬浮窗Floating desktop overlay for Deepseek Harness(dsh):  A floating, skinnable Waifu widget for Deepseek Harness. Features  auto-launch on boot, port auto registration, and a clickable waifu GIF that lets you monitor dsh's live status(tool calling,Approval,thinking,browsing etc) and launch dsh with a double click |
| 59 | [gdgfd22/deepseek-harness-ssh](https://github.com/gdgfd22/deepseek-harness-ssh) | 1 | 2026-08-19 | 2026-08-19 | Safety-gated SSH development plugin for DeepSeek Harness and MCP, built for GPU and offline laboratory servers. |
| 60 | [GDWhisper/dsh-web-startup-auth](https://github.com/GDWhisper/dsh-web-startup-auth) | 1 | 2026-08-18 | 2026-08-19 | DSH（DeepSeek Harness）远程 Web 启动 + 用户名/密码认证插件。 \|  DeepSeek Harness Remote‑Web‑Launch Plugin with Username/Password Auth |
| 61 | [hatter123/dsh-math-suite](https://github.com/hatter123/dsh-math-suite) | 1 | 2026-08-19 | 2026-08-19 | dsh用来进行数学计算的工具整合包，内含多个数学工具 |
| 62 | [Ho11ow8/deepseek-harness-balance-pet](https://github.com/Ho11ow8/deepseek-harness-balance-pet) | 1 | 2026-08-19 | 2026-08-19 | A deepseek balance pet |
| 63 | [jingshang12/dsh-web-quick-launcher](https://github.com/jingshang12/dsh-web-quick-launcher) | 1 | 2026-08-19 | 2026-08-19 | Windows 一键启动脚本，简化 @deepseek‑ai/dsh web 启动流程，自动抓取真实访问地址，非官方社区工具 |
| 64 | [justinhuangai/deepseek-harness-desktop](https://github.com/justinhuangai/deepseek-harness-desktop) | 1 | 2026-08-19 | 2026-08-19 | 更稳定好用的 DeepSeek Harness 桌面端应用，由 DeepSeek Harness 自举开发。 |
| 65 | [KaramachiA217/dsh-bundle-manager](https://github.com/KaramachiA217/dsh-bundle-manager) | 1 | 2026-08-17 | 2026-08-19 | Runtime mount manager for optional third-party plugins in DeepSeek Harness - mount/unmount bundle rows in-process via the Loader API (instant, no restart, never touches the profile manifest), with named presets and self-healing failure fallback. |
| 66 | [kevinforge/orbit](https://github.com/kevinforge/orbit) | 1 | 2026-05-21 | 2026-08-19 | A local-first workspace for human-led collaboration with multiple AI employees. |
| 67 | [Kitup666/dsh-plugin-kmanager](https://github.com/Kitup666/dsh-plugin-kmanager) | 1 | 2026-08-16 | 2026-08-19 | Deepseek harness插件安装管理助手 |
| 68 | [lavenleo/dsh-web-summary](https://github.com/lavenleo/dsh-web-summary) | 1 | 2026-08-19 | 2026-08-19 | A DeepSeek Harness plugin that fetches a public web page and returns its title and plain-text summary to the agent. |
| 69 | [lilming123/dsh-api](https://github.com/lilming123/dsh-api) | 1 | 2026-08-17 | 2026-08-19 | HTTP control-plane plugin for DeepSeek Harness (dsh) — exposes settings/language, workspace registry and host-companion bridge as /dsh-api/* JSON routes |
| 70 | [lucaslus/dsh-balance-plugin](https://github.com/lucaslus/dsh-balance-plugin) | 1 | 2026-08-17 | 2026-08-19 | DeepSeek Harness plugin that displays real-time account balances for DeepSeek, Kimi (Moonshot), and Qwen providers. |
| 71 | [Luke-Yong/dsh-plugin-project-management](https://github.com/Luke-Yong/dsh-plugin-project-management) | 1 | 2026-08-17 | 2026-08-19 | A DeepSeek Harness plugin that interviews the user about a project, generates a project timeline / Gantt chart, and exports it as Word or Excel. |
| 72 | [mel0nyrame/deepseek-harness-desktop](https://github.com/mel0nyrame/deepseek-harness-desktop) | 1 | 2026-08-14 | 2026-08-19 | Native Electron desktop app with a bundled DeepSeek Harness agent runtime |
| 73 | [mrzhangkris/dsh-session-pruner](https://github.com/mrzhangkris/dsh-session-pruner) | 1 | 2026-08-19 | 2026-08-19 | DSH 会话生命周期管理插件：one-shot 子代理自动清理 + 容量保底 + 连带清理 projcache，从源头杜绝缓存膨胀卡顿 |
| 74 | [Mungbean-Cake/dsh-plugin-whale-fenggu](https://github.com/Mungbean-Cake/dsh-plugin-whale-fenggu) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek 峰谷提醒插件：北京时间梁文峰/梁文谷实时播报、切换前提前提醒、省 token 小贴士、自由拖动 |
| 75 | [NelsonLongxiang/dsh-open-a2a-net](https://github.com/NelsonLongxiang/dsh-open-a2a-net) | 1 | 2026-08-19 | 2026-08-19 | Open A2A network plugin for DeepSeek Harness: signed agent cards, decentralized peer/zone discovery, direct routing model tools, and joinable session nodes in the web sidebar |
| 76 | [NelsonLongxiang/dsh-prompt-templates](https://github.com/NelsonLongxiang/dsh-prompt-templates) | 1 | 2026-08-19 | 2026-08-19 | Quick prompt templates for DeepSeek Harness: global and per-session templates, a right-side panel, and Python-backed SQLite persistence |
| 77 | [openrect/dsh-community-installer](https://github.com/openrect/dsh-community-installer) | 1 | 2026-08-18 | 2026-08-19 | Unofficial community installer for @deepseek-ai/dsh on Windows. |
| 78 | [OpenSaozi/dsh-bigmodel-catalog](https://github.com/OpenSaozi/dsh-bigmodel-catalog) | 1 | 2026-08-14 | 2026-08-19 | 接入智谱 BigModel / GLM Coding Plan 作为 DeepSeek Harness 模型清单插件，解锁 glm-5.3 等模型。 \| Live Zhipu BigModel / GLM catalog plugin for DeepSeek Harness. |
| 79 | [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) | 1 | 2026-08-19 | 2026-08-19 | Read-only security & compliance plugin for DeepSeek Harness: prompt-injection detection, Chinese-PII redaction, and local configuration audit with redacted, reproducible reports. |
| 80 | [perlied03/dsh-approval-auto-review](https://github.com/perlied03/dsh-approval-auto-review) | 1 | 2026-08-19 | 2026-08-19 | Codex-style automatic approval review plugin for DeepSeek Harness |
| 81 | [Qiao-NEYC/silverhand-dsh-pet](https://github.com/Qiao-NEYC/silverhand-dsh-pet) | 1 | 2026-08-19 | 2026-08-19 | Silverhand desktop pet for DeepSeek Harness — drag to move, reacts to agent state. |
| 82 | [ruisenbai/dsh-inline-comments](https://github.com/ruisenbai/dsh-inline-comments) | 1 | 2026-08-17 | 2026-08-19 | Inline, batchable comments for DeepSeek Harness assistant replies |
| 83 | [runfali/dsh-web-fetch](https://github.com/runfali/dsh-web-fetch) | 1 | 2026-08-19 | 2026-08-19 | dsh 双源网页抓取插件 — CDP 真实渲染 + Tavily 极速提取，LLM自主选工具 |
| 84 | [sa998aaron/better-LVGL-for-dsh](https://github.com/sa998aaron/better-LVGL-for-dsh) | 1 | 2026-08-19 | 2026-08-19 | knows better LVGL for dsh |
| 85 | [sa998aaron/deepseek-harness-matt-plugin](https://github.com/sa998aaron/deepseek-harness-matt-plugin) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 插件：内置 Matt Pocock 技能集 + 侧边栏可视化流水线面板（Idea→Triage→Grill→Spec→Tickets→Implement→Review），一键把 /技能 发进会话。Bundled matt skills + visual pipeline sidebar for DSH. |
| 86 | [sa998aaron/dsh-agent-forge](https://github.com/sa998aaron/dsh-agent-forge) | 1 | 2026-08-19 | 2026-08-19 | 指定代码工作区 → 渐进式生成可固化 agent |
| 87 | [sfyyy/dsh-generation-image](https://github.com/sfyyy/dsh-generation-image) | 1 | 2026-08-17 | 2026-08-19 | dsh 中可以使用插件来调用gpt-image2生成图片 |
| 88 | [SiriLee/dsh-approval-hotkeys](https://github.com/SiriLee/dsh-approval-hotkeys) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: approval-panel hotkeys — Enter approves once, Esc rejects, Esc pauses a running agent |
| 89 | [SiriusWJ/dsh-updater-npm](https://github.com/SiriusWJ/dsh-updater-npm) | 1 | 2026-08-19 | 2026-08-19 | DSH updater + official docs sync plugin: one-click npm update with live progress, incremental docs sync with progress, dsh_docs_search/read tools. DSH 更新器+官方文档同步器（进度显示）。 |
| 90 | [Sombrer0-1/dsh-git-dashboard](https://github.com/Sombrer0-1/dsh-git-dashboard) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness的仓外只读 Git 工作区看板。显示分支与变更摘要，可展开查看文件列表、分支比较，并对小改动做 unified diff 预览。 |
| 91 | [SuperLS-X/dsh-minecraft-theme](https://github.com/SuperLS-X/dsh-minecraft-theme) | 1 | 2026-08-19 | 2026-08-19 | Minecraft theme plugin for DeepSeek Harness: block-texture background, pixel fonts, MC-style buttons with click sounds, texture import/management, music player with local music folder support. |
| 92 | [TencentCloudADP/Tencent-ADP-dsh-plugin](https://github.com/TencentCloudADP/Tencent-ADP-dsh-plugin) | 1 | 2026-08-17 | 2026-08-19 | Tencent Cloud ADP plugin for DeepSeek Harness |
| 93 | [TGYD-helige/dsh-plugins](https://github.com/TGYD-helige/dsh-plugins) | 1 | 2026-08-19 | 2026-08-19 | Generic DeepSeek Harness (dsh) plugins: A2A protocol server, session storage mirror, and Langfuse observability. |
| 94 | [the-beating-light-of-the-nail/awesome-dsh-plugin-stock](https://github.com/the-beating-light-of-the-nail/awesome-dsh-plugin-stock) | 1 | 2026-08-19 | 2026-08-19 | Curated vertical list of stock/finance/quant plugins for DeepSeek Harness (dsh) — 24 verified entries, bilingual |
| 95 | [ttb-eng/dsh-github-search](https://github.com/ttb-eng/dsh-github-search) | 1 | 2026-08-19 | 2026-08-19 | GitHub console plugin for the DeepSeek Harness web sidebar — search, judge, clone, Star/Fork in one panel |
| 96 | [uruana33/dsh-cost-meter](https://github.com/uruana33/dsh-cost-meter) | 1 | 2026-08-19 | 2026-08-19 | Provider-aware LLM cost meter and local ledger for DeepSeek Harness |
| 97 | [wangxing-git/dsh-tool-session](https://github.com/wangxing-git/dsh-tool-session) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 会话管理工具插件，为模型提供会话创建/重命名/归档/切换/列表/查询工具，支持沙箱提权审批与 UI 会话切换。 |
| 98 | [weien666/dsh-conversation-density-map](https://github.com/weien666/dsh-conversation-density-map) | 1 | 2026-08-19 | 2026-08-19 | 为DeepSeek Harness制作的极简“对话密度地图”插件（右侧对话历史标签）A minimal "Conversation Density Map" extension for DeepSeek Harness (Right Chat History Tab) |
| 99 | [wellcover/dsh-conversation-stats](https://github.com/wellcover/dsh-conversation-stats) | 1 | 2026-08-19 | 2026-08-19 | Conversation statistics tab for the DeepSeek Harness (DSH) Web GUI - per-session turns/steps/calls/token usage (input/output/cache), LLM & tool wall times, model/tool breakdowns, per-call detail, and permanent session deletion. |
| 100 | [wjingshan/dsh-cost-gauge](https://github.com/wjingshan/dsh-cost-gauge) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness cost gauge: floating widget showing DeepSeek API spend & balance, peak/off-peak rate pointer, flashing red alarm when balance below threshold. |
| 101 | [WODE25500/dsh-lan-share](https://github.com/WODE25500/dsh-lan-share) | 1 | 2026-08-19 | 2026-08-19 | DSH LAN file share: share the workspace over the local network - phones/tablets/other computers browse, download and upload files via browser, no DSH login. Token gate, path boundary, read-only mode, rate limit. Zero-dependency (node:http). |
| 102 | [WODE25500/dsh-niche-industries](https://github.com/WODE25500/dsh-niche-industries) | 1 | 2026-08-19 | 2026-08-19 | Cold-industry domain pack for DeepSeek Harness: agent presets + skills for tea tasting (GB/T 23776), classical text collation, and beekeeping. |
| 103 | [WODE25500/dsh-token-diet](https://github.com/WODE25500/dsh-token-diet) | 1 | 2026-08-19 | 2026-08-19 | DSH token-saving toolkit: proactively slim large text/JSON/CSV before they enter context (diet_text / diet_json / diet_csv / diet_estimate). Zero-dependency pure functions. |
| 104 | [WODE25500/dsh-tool-sqlite](https://github.com/WODE25500/dsh-tool-sqlite) | 1 | 2026-08-19 | 2026-08-19 | DSH SQLite data tool: list databases, tables, schema and run read-only SQL over local .db files. Zero-dependency (node:sqlite). DeepSeek Harness plugin. |
| 105 | [xiaoyuer3921/dsh-showreel](https://github.com/xiaoyuer3921/dsh-showreel) | 1 | 2026-08-19 | 2026-08-19 | 鲸迹 · dsh-showreel — 把 DeepSeek Harness Agent 任务生成可编辑、隐私脱敏的竖屏战报视频（MP4/WebM + PNG 封面）。Turns the latest completed DSH turn into an editable, privacy-redacted vertical recap video. |
| 106 | [xiaozhugez/dsh-project-memory](https://github.com/xiaozhugez/dsh-project-memory) | 1 | 2026-08-19 | 2026-08-19 | A DeepSeek Harness plugin that records project pitfalls and user coding habits, injecting them into future conversations so the AI gets smarter the more you use it./一个 DeepSeek Harness 插件,记录项目踩坑和用户代码习惯,在后续对话中自动注入,让 AI 越用越懂你。 |
| 107 | [xiaxingtianxia2-glitch/dsh-chime](https://github.com/xiaxingtianxia2-glitch/dsh-chime) | 1 | 2026-08-19 | 2026-08-19 | DSH 插件：opencode 任务完成提示音（完成/提问/错误三音，原始 mp3 内嵌，零依赖）。官方 bundle 插件，dsh plugin --profile web add: github:xiaxingtianxia2-glitch/dsh-chime#main |
| 108 | [ygcdsj/dsh-home-migrate](https://github.com/ygcdsj/dsh-home-migrate) | 1 | 2026-08-19 | 2026-08-19 | 一个插件，把本地的 DSH 配置（皮肤、预设、注入包）打包成文件，到另一台 Windows 上直接还原。 |
| 109 | [yoiizesdev-crypto/DSH-Balance-display](https://github.com/yoiizesdev-crypto/DSH-Balance-display) | 1 | 2026-08-16 | 2026-08-19 | DSH plugins |
| 110 | [zenglihunter/dsh-petdex-pet](https://github.com/zenglihunter/dsh-petdex-pet) | 1 | 2026-08-19 | 2026-08-19 | Petdex pet in the DSH web GUI: floating, draggable, sprite-animated by agent activity, with a live settings page. Ships 4 bundled Hunter x Hunter starter pets. |
| 111 | [zink-ning-lkr/dsh-chat-width](https://github.com/zink-ning-lkr/dsh-chat-width) | 1 | 2026-08-16 | 2026-08-19 | DSH Web GUI 对话区宽度调节插件：聊天内容区/用户气泡宽度滑块即时生效 |
| 112 | [zink-ning-lkr/dsh-ui-state](https://github.com/zink-ning-lkr/dsh-ui-state) | 1 | 2026-08-16 | 2026-08-19 | DSH Web GUI 界面状态持久化插件：侧边栏开合/宽度/详情面板/对话滚动位置恢复 |
| 113 | [00080000/dsh-project-memory](https://github.com/00080000/dsh-project-memory) | 0 | 2026-08-19 | 2026-08-19 | Read-time project memory plugin for DeepSeek Harness (dsh) |
| 114 | [0x1a27/dsh-pwsh-direct](https://github.com/0x1a27/dsh-pwsh-direct) | 0 | 2026-08-19 | 2026-08-19 | DSH Desktop（Windows）内置 pwsh/shell 空结果 bug 修复 + pwsh_direct 直启兜底工具 |
| 115 | [173787247/dsh-repeat-stop](https://github.com/173787247/dsh-repeat-stop) | 0 | 2026-08-19 | 2026-08-19 | Hard-stop consecutive identical DeepSeek Harness tool calls after a configurable streak. |
| 116 | [764475881/dsh-chat-width](https://github.com/764475881/dsh-chat-width) | 0 | 2026-08-19 | 2026-08-19 | Drag-to-resize chat content width for the DeepSeek Harness web UI (748px -> 1040px, draggable handle). · DSH 网页聊天宽度可拖拽调节插件 |
| 117 | [a1297424439/dsh-quote-panel](https://github.com/a1297424439/dsh-quote-panel) | 0 | 2026-08-19 | 2026-08-19 | Real-time stock watch panel for DeepSeek Harness. A-share & US quotes with K-lines, watchlist, draggable always-on-top overlay. Zero config, free public data (Tencent Finance), no API key. |
| 118 | [ABccgh/imakb](https://github.com/ABccgh/imakb) | 0 | 2026-08-16 | 2026-08-19 | DSH dynamic Cordis plugin: bulk import/update Wiki sites into Tencent IMA knowledge base (wiki_to_ima tool) |
| 119 | [ABccgh/ws-cleaner](https://github.com/ABccgh/ws-cleaner) | 0 | 2026-08-19 | 2026-08-19 | DSH dynamic Cordis plugin: auto/manual workspace cleanup (clean_workspace tool) |
| 120 | [accpowered/dsh-auto-review](https://github.com/accpowered/dsh-auto-review) | 0 | 2026-08-18 | 2026-08-19 | LLM approval answerer for DeepSeek Harness: deterministic filter + clean-context LLM review for sandbox escalations (requires the patched core, patches included) |
| 121 | [accpowered/dsh-credential-manager](https://github.com/accpowered/dsh-credential-manager) | 0 | 2026-08-18 | 2026-08-19 | Named user credentials for DeepSeek Harness: model-facing credential tools, DSH_CM_* shell variables, and a Settings -> Credentials page |
| 122 | [AdenChenCoder/dsh-werewolf](https://github.com/AdenChenCoder/dsh-werewolf) | 0 | 2026-08-19 | 2026-08-19 | AI-powered Werewolf game plugin for the DeepSeek Harness Web UI |
| 123 | [aga-j/dsh-mini-games](https://github.com/aga-j/dsh-mini-games) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness details 面板的纯前端小游戏合集：猜数字 / 2048 / 扫雷。一键安装，无后端，最高分存 localStorage。 |
| 124 | [AgoraIO-Community/dsh-agora](https://github.com/AgoraIO-Community/dsh-agora) | 0 | 2026-08-19 | 2026-08-19 | DSH skill plugin: Agora skill (RTC, RTM, ConvoAI, CLI, Cloud Recording, tokens) synced verbatim from AgoraIO/skills |
| 125 | [Altermoe/fluent2-design-skills](https://github.com/Altermoe/fluent2-design-skills) | 0 | 2026-08-19 | 2026-08-19 | Fluent 2 Design Tokens in Skills |
| 126 | [alwaysmid-19990/dsh-projects](https://github.com/alwaysmid-19990/dsh-projects) | 0 | 2026-08-19 | 2026-08-19 | DSH Web Project Center — Cowork/WorkBuddy-style projects with CLAUDE.md memory sync |
| 127 | [ankye/dsh_use_browser](https://github.com/ankye/dsh_use_browser) | 0 | 2026-08-19 | 2026-08-19 | Codex-style local browser automation for DeepSeek Harness: open pages, interact by @e references, extract content, screenshot, and run page JS — with two backends: managed headless Playwright (fast, invisible) or CDP connected to your own Chrome (visible, and loads Chrome extensions that headless cannot). |
| 128 | [ankye/dsh-client-vision](https://github.com/ankye/dsh-client-vision) | 0 | 2026-08-19 | 2026-08-19 | Give your DeepSeek Harness agent eyes. dsh-client-vision is a screen-capture + external image-recognition plugin for DeepSeek Harness: the agent takes a screenshot (or points at any image), hands it to a vision-capable model through a pluggable channel, and gets back plain text it can actually act on — no multimodal model required. |
| 129 | [ankye/dsh-image-generation](https://github.com/ankye/dsh-image-generation) | 0 | 2026-08-19 | 2026-08-19 | Give your DeepSeek Harness agent a paintbrush. dsh-image-generation is an image-generation plugin for DeepSeek Harness: the agent describes an image in text, a settings-selected generation channel produces it through a pluggable backend, and the file paths are written to disk — all outside the model, so no image-capable model is required. |
| 130 | [Arborsm/dsh-plugin-devin-bridge](https://github.com/Arborsm/dsh-plugin-devin-bridge) | 0 | 2026-08-19 | 2026-08-19 | Devin Connect 反代为 OpenAI Chat Completions 兼容协议的 dsh 插件，服务 glm-5.2 / swe-1.7 |
| 131 | [Asher-2000/dsh-memory-connect](https://github.com/Asher-2000/dsh-memory-connect) | 0 | 2026-08-19 | 2026-08-19 | Cross-session memory plugin for DSH — auto-extraction, semantic recall, scheduled maintenance, LLM-powered consolidation |
| 132 | [auuduu/dsh-timem-memory](https://github.com/auuduu/dsh-timem-memory) | 0 | 2026-08-18 | 2026-08-19 | TiMEM 长期记忆的 DeepSeek Harness 插件：MCP 桥（凭证走 ctx.credentials）+ 内置 5 个记忆 skill |
| 133 | [Badegg404/dsh-code-review](https://github.com/Badegg404/dsh-code-review) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin: one-click Claude-subagent code review with report back to the UI |
| 134 | [BakaCirno233/dsh-session-delete](https://github.com/BakaCirno233/dsh-session-delete) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin: permanently delete cold sessions from a Settings page (会话管理) |
| 135 | [bblike/dsh-plugin-odette](https://github.com/bblike/dsh-plugin-odette) | 0 | 2026-08-19 | 2026-08-19 | Odette / Snezhnaya theme skin for DeepSeek Harness Web: winter backgrounds, ballet cursors, ballerina thinking spinner |
| 136 | [bentong-chain/dsh-plugin-dir-tree](https://github.com/bentong-chain/dsh-plugin-dir-tree) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 插件：浮窗展示工作区目录树，支持拖拽路径、懒加载、搜索、文件类型图标。提供动态插件与持久化双包两种形态。 |
| 137 | [bingoogolapple/bga-dsh-workbench](https://github.com/bingoogolapple/bga-dsh-workbench) | 0 | 2026-08-17 | 2026-08-19 | DeepSeek Harness Workbench |
| 138 | [birat-chapagain/dsh-codex-oauth](https://github.com/birat-chapagain/dsh-codex-oauth) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: use your OpenAI Codex (ChatGPT Plus/Pro) subscription through OAuth |
| 139 | [Bole1001/dsh-power-awake](https://github.com/Bole1001/dsh-power-awake) | 0 | 2026-08-19 | 2026-08-19 | Keep your device awake while DeepSeek Harness is running. Prevents system sleep on macOS, Windows, and Linux for remote access. |
| 140 | [BroBFG/dsh-tool-docx](https://github.com/BroBFG/dsh-tool-docx) | 0 | 2026-08-17 | 2026-08-19 | Model-facing MS Word (.docx) tools for DeepSeek Harness: docx_read, docx_create, docx_edit |
| 141 | [BrokkAi/bifrost](https://github.com/BrokkAi/bifrost) | 0 | 2026-08-14 | 2026-08-19 | Multi-language static analysis for agents, editors, and large repositories. |
| 142 | [Bruvis625/dsh-peakshift](https://github.com/Bruvis625/dsh-peakshift) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 错峰插件：高峰时段自动切换备用供应商，低谷用回 DeepSeek / Peak-shift plugin for DeepSeek Harness |
| 143 | [Chaos-Hyper/dsh-econ-tools](https://github.com/Chaos-Hyper/dsh-econ-tools) | 0 | 2026-08-19 | 2026-08-19 | Econometrics Research Assistant — A DSH plugin with 6 tools for econometrics analysis |
| 144 | [chendefine/dsh-cdp-live-view](https://github.com/chendefine/dsh-cdp-live-view) | 0 | 2026-08-19 | 2026-08-19 | deepseek harness live view chromium via cdp in sidebar tab |
| 145 | [chengwill45-bot/dsh-hacker-terminal-theme](https://github.com/chengwill45-bot/dsh-hacker-terminal-theme) | 0 | 2026-08-19 | 2026-08-19 | Standalone hacker-terminal theme plugin for the DeepSeek Harness Web UI |
| 146 | [civaapple-alt/pi-cordis](https://github.com/civaapple-alt/pi-cordis) | 0 | 2026-08-19 | 2026-08-19 | 🥧 Developer-first terminal coding agent rebuilt on Cordis (v4.0.1) microkernel with an "Everything is a plugin" architecture. 100% Pi parity & marketplace compatible. |
| 147 | [ClawsJoy/exam-prep-extension](https://github.com/ClawsJoy/exam-prep-extension) | 0 | 2026-08-17 | 2026-08-19 | 考研智复习 · AI刷题助手 Chrome 扩展 |
| 148 | [CSlawyer1985/trajectory-zh-guide](https://github.com/CSlawyer1985/trajectory-zh-guide) | 0 | 2026-08-19 | 2026-08-19 | 轨迹面板中文翻译+白话讲解：DeepSeek Harness 轨迹面板的文科生友好补丁（中文标签/逐条讲解/导读横幅） |
| 149 | [cuteG41cute/dsh-memory-db](https://github.com/cuteG41cute/dsh-memory-db) | 0 | 2026-08-19 | 2026-08-19 | 🧠 Project memory database plugin for DeepSeek Harness — 为 AI 助手沉淀项目级问答记忆，三态分类智能注入历史上下文 |
| 150 | [cyh12345678910/dsh-vision-bridge](https://github.com/cyh12345678910/dsh-vision-bridge) | 0 | 2026-08-19 | 2026-08-19 | Multi-backend vision plugin for DeepSeek Harness — API (OpenAI Vision) + CDP (Doubao bridge), cross-platform, cached, configurable |
| 151 | [David131131/makise-kurisu-desktop-pet](https://github.com/David131131/makise-kurisu-desktop-pet) | 0 | 2026-08-19 | 2026-08-19 | 牧濑红莉栖桌宠 Makise Kurisu Desktop Pet — DSH 动态插件 + Electron 桌面应用 |
| 152 | [Dinis0214/dsh-desktop-lite](https://github.com/Dinis0214/dsh-desktop-lite) | 0 | 2026-08-19 | 2026-08-19 | Ultra-lightweight cross-platform native desktop client for DeepSeek Harness (macOS / Linux / Windows, <1MB) |
| 153 | [directwire/culmen](https://github.com/directwire/culmen) | 0 | 2026-08-17 | 2026-08-19 | persona/v1 — 通用智能体人格格式：定义有记忆、会成长、有关系的 AI 如何落盘、迁移、在任意实现（Claude CLI / OpenClaw / Hermes / 自建运行时）间互换。 |
| 154 | [DocJlm/dsh-supervisor](https://github.com/DocJlm/dsh-supervisor) | 0 | 2026-08-19 | 2026-08-19 | Lifecycle supervision, evidence-driven audit subagents, safe intervention, and blind acceptance gates for DeepSeek Harness |
| 155 | [DoggyHU/dsh-plugin-quota-monitor](https://github.com/DoggyHU/dsh-plugin-quota-monitor) | 0 | 2026-08-19 | 2026-08-19 | DSH sidebar footer quota & balance monitor: DeepSeek Rage + OpenCode Go HP/MP/SP + SCNet (国家超算) Credits local estimate. 设置→插件管理可配置数据源与费率表。 |
| 156 | [dsh-niao/dsh-niao-message](https://github.com/dsh-niao/dsh-niao-message) | 0 | 2026-08-17 | 2026-08-19 | macOS 系统通知插件：在「异常终止 / 需要你操作 / 正常完成」三大场景弹通知中心横幅，点击横幅直达指定应用。 |
| 157 | [dsh-niao/dsh-niao-quick-open](https://github.com/dsh-niao/dsh-niao-quick-open) | 0 | 2026-08-16 | 2026-08-19 | 会话/工作区快捷操作插件：一键打开工作区、编辑器自动发现、DeepSeek 网页版同款用户消息导航条、会话待办标记、硬性重启 |
| 158 | [eka3os/dsh-balance](https://github.com/eka3os/dsh-balance) | 0 | 2026-08-19 | 2026-08-19 | 在DeepSeek-harness Web端显示官方开放平台API的所剩余额 |
| 159 | [Ethanz11-creat/dsh-billing-tui](https://github.com/Ethanz11-creat/dsh-billing-tui) | 0 | 2026-08-19 | 2026-08-19 | Peak/off-peak billing plugin for DeepSeek Harness (dsh) — real-time token costing, ASCII whale receipts, TUI status line & /billing command |
| 160 | [evanfang0054/dsh-mermaid-zoom](https://github.com/evanfang0054/dsh-mermaid-zoom) | 0 | 2026-08-19 | 2026-08-19 | Mermaid diagram zoom/pan/reset/PNG-copy enhancement plugin for DeepSeek Harness (DSH) web GUI |
| 161 | [EvenLRs/dsh-messaging](https://github.com/EvenLRs/dsh-messaging) | 0 | 2026-08-15 | 2026-08-19 | DeepSeek Harness messaging gateway plugin |
| 162 | [evil7/deepSea](https://github.com/evil7/deepSea) | 0 | 2022-05-12 | 2026-08-19 | 搜罗类聚 deepseek-harness 周边插件生态，提供快速搜索、下载使用、社区讨论、插件评分、协助开发等能力。 |
| 163 | [eya46/dsh-plugins](https://github.com/eya46/dsh-plugins) | 0 | 2026-08-19 | 2026-08-19 | Personal plugins for dsh projects. |
| 164 | [feihu1991/dsh-kefu](https://github.com/feihu1991/dsh-kefu) | 0 | 2026-08-19 | 2026-08-19 | DSH 多租户客服平台插件：商家账号/店员Agent/模型档位/限流/知识库RAG/网页客服SDK —— DeepSeek Harness multi-tenant customer-service platform |
| 165 | [feiyang-dev/dsh-mobile-remote](https://github.com/feiyang-dev/dsh-mobile-remote) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 移动端远程控制插件（Mobile Remote Control Plugin）：设置页内置扫码连接二维码、一键开启远程控制与在线设备数统计，并提供手机端界面优化，实现局域网内手机远程操控电脑端 DeepSeek Harness。 |
| 166 | [Foo1Moon/dsh-web-visualuiconfig](https://github.com/Foo1Moon/dsh-web-visualuiconfig) | 0 | 2026-08-18 | 2026-08-19 | DSH Web GUI 可视化配置插件 / visual configuration plugin |
| 167 | [g-yixuan/dsh-sidechat](https://github.com/g-yixuan/dsh-sidechat) | 0 | 2026-08-19 | 2026-08-19 | Codex-style side chat & selection annotations for DeepSeek Harness (DSH) web — fork the session into a persistent side panel; quote selections into context. Thin consumer of dsh-better-sidebar. |
| 168 | [GalaxyCcx/dsh-desktop-pet](https://github.com/GalaxyCcx/dsh-desktop-pet) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness in-page desktop pet overlay |
| 169 | [ggggggggggz/dsh-gh-search](https://github.com/ggggggggggz/dsh-gh-search) | 0 | 2026-08-19 | 2026-08-19 | GitHub search & view tools (gh_search / gh_view) for DeepSeek Harness, backed by the GitHub CLI. Ported from oh-my-pi gh-search/gh-view; not official. |
| 170 | [guoliyuan97-png/dsh-game-hud](https://github.com/guoliyuan97-png/dsh-game-hud) | 0 | 2026-08-19 | 2026-08-19 | Game-style floating HUD for DeepSeek Harness: balance HP bar, context MP bar, official peak/valley pricing with countdown, auto-compaction, memory-carrying new conversation. ?????? HUD ?? |
| 171 | [GuTianshuo/powershell-fix](https://github.com/GuTianshuo/powershell-fix) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness (DSH) host-layer plugin: detect & auto-fix Windows PowerShell command syntax mistakes (bash constructs, broken continuations, pasted prompts), then execute under the normal sandbox/approval policy |
| 172 | [haimuhaimu/dsh-hello-plugin](https://github.com/haimuhaimu/dsh-hello-plugin) | 0 | 2026-08-19 | 2026-08-19 | My first DeepSeek Harness plugin (dsh-plugin) |
| 173 | [haimuhaimu/dsh-image-gen](https://github.com/haimuhaimu/dsh-image-gen) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: generate images via Aliyun Bailian Qwen-Image (bl CLI). Adds a generate_image tool returning images as conversation attachments. |
| 174 | [haimuhaimu/dsh-persona](https://github.com/haimuhaimu/dsh-persona) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: give the agent a switchable, persistent persona (人设) — an-ruotong / yan-guan / lao-jie built in, plus user-defined personas. |
| 175 | [HaoyueQin/deepseek-harness-background](https://github.com/HaoyueQin/deepseek-harness-background) | 0 | 2026-08-19 | 2026-08-19 | 为 DeepSeek Harness Web GUI 添加自定义背景图片：上传本地图片或粘贴图片链接，可调不透明度、遮罩、面板透明与毛玻璃模糊，带实时预览，5% 阻尼滑块松手即存，遮罩自动适配明暗主题。 |
| 176 | [Harzva/dsh-session-context-menu](https://github.com/Harzva/dsh-session-context-menu) | 0 | 2026-08-19 | 2026-08-19 | Lifecycle-safe Codex-style Session context actions for DeepSeek Harness. |
| 177 | [Harzva/dsh-uvm](https://github.com/Harzva/dsh-uvm) | 0 | 2026-08-19 | 2026-08-19 | DSH-native uv environment manager: create/sync/run Python venvs from DSH Web, pip fallback, read-only conda visibility |
| 178 | [hatter123/dsh-diffgeom](https://github.com/hatter123/dsh-diffgeom) | 0 | 2026-08-19 | 2026-08-19 | dsh用来计算几何问题的插件 |
| 179 | [helibeiqi/dsh-compaction-pro](https://github.com/helibeiqi/dsh-compaction-pro) | 0 | 2026-08-17 | 2026-08-19 | High-fidelity, faithful, bilingual, recursive compaction backend for DeepSeek Harness. |
| 180 | [helibeiqi/dsh-cordis-universal-adapter](https://github.com/helibeiqi/dsh-cordis-universal-adapter) | 0 | 2026-08-19 | 2026-08-19 | Universal bridge adapter for DeepSeek Harness: consume external MCP servers & Agent Plugins 1.0 packages, and expose DSH native tools back as a standard MCP server. Host composition layer, bidirectional (Inbound/Outbound). |
| 181 | [heming-gmh/dsh-capcheck](https://github.com/heming-gmh/dsh-capcheck) | 0 | 2026-08-19 | 2026-08-19 | V0 capability-disclosure scanner for DeepSeek Harness (DSH) cordis plugins -- zero-execution static analysis of which sensitive services a plugin declares/references |
| 182 | [hey-ruomei/dsh-music-player](https://github.com/hey-ruomei/dsh-music-player) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 音乐播放器插件：搜索/播放 Audius 免费曲库，支持收藏、迷你播放条和 agent 对话遥控 \| Music player plugin for DSH web: stream legal music from Audius, favorites, mini player, agent chat control. |
| 183 | [hherosoul/dsh-smart-charts](https://github.com/hherosoul/dsh-smart-charts) | 0 | 2026-08-19 | 2026-08-19 | smart charts |
| 184 | [huaqian695-sudo/dsh-wechat-bot](https://github.com/huaqian695-sudo/dsh-wechat-bot) | 0 | 2026-08-16 | 2026-08-19 | 🤖 基于 DeepSeek Harness 的微信 AI 自动化机器人：AI对话/记忆/日程提醒/天气/联网搜索，多面具人格切换，双通道LLM，Web控制台 |
| 185 | [ibrhr/dsh-peak](https://github.com/ibrhr/dsh-peak) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek API Peak & Off-Peak (50% Discount) status indicator plugin for DeepSeek Harness (DSH) |
| 186 | [imdeniil/dsh-effort-bars](https://github.com/imdeniil/dsh-effort-bars) | 0 | 2026-08-19 | 2026-08-19 | Палочки уровня размышлений для DeepSeek Harness: переключение глубины мышления одним кликом + меню моделей сразу списком. Effort bars: one-click reasoning level switching. |
| 187 | [imdeniil/dsh-locale-ru](https://github.com/imdeniil/dsh-locale-ru) | 0 | 2026-08-19 | 2026-08-19 | Русская локализация (ru) для DeepSeek Harness и DSH Desktop — веб-интерфейс, магазин плагинов, 849 строк. Russian locale plugin for DeepSeek Harness. |
| 188 | [imdeniil/dsh-model-picker-search](https://github.com/imdeniil/dsh-model-picker-search) | 0 | 2026-08-19 | 2026-08-19 | Модельный пикер с поиском и фильтрами по провайдеру для DeepSeek Harness и DSH Desktop. Searchable, provider-filterable model picker. |
| 189 | [imdeniil/dsh-ui-zoom](https://github.com/imdeniil/dsh-ui-zoom) | 0 | 2026-08-19 | 2026-08-19 | Масштабирование всего UI DeepSeek Harness как в браузере: Ctrl +/−/0, Ctrl+колесо, виджет с процентом. Browser-style UI zoom. |
| 190 | [iqingyoung/search2chart-mcp](https://github.com/iqingyoung/search2chart-mcp) | 0 | 2026-08-17 | 2026-08-19 | search2chart-mcp: agent-native charting — turn search/research/tabular data into inline charts in agent conversations. Native DSH plugin (true inline) + cross-agent MCP server (file-link + interactive HTML). |
| 191 | [itsnone-liu/dsh-feishu](https://github.com/itsnone-liu/dsh-feishu) | 0 | 2026-08-19 | 2026-08-19 | Feishu/Lark bridge for DeepSeek Harness (dsh) — long-connection, card streaming, slash commands |
| 192 | [ivanon/dsh-dev-crew](https://github.com/ivanon/dsh-dev-crew) | 0 | 2026-08-19 | 2026-08-19 | 按职责把工作分派给绑定了不同模型的子代理的 DeepSeek Harness 插件 |
| 193 | [jaco-tech/dsh-web-fetch-crw](https://github.com/jaco-tech/dsh-web-fetch-crw) | 0 | 2026-08-19 | 2026-08-19 | crw (Firecrawl-compatible) fetch provider plugin for DeepSeek Harness (ctx.web) — no auth, no API key |
| 194 | [jaco-tech/dsh-web-search-searxng](https://github.com/jaco-tech/dsh-web-search-searxng) | 0 | 2026-08-19 | 2026-08-19 | SearXNG-backed search provider plugin for DeepSeek Harness (ctx.web) — no auth, no API key |
| 195 | [JasperGuWP/dsh-plugin-market](https://github.com/JasperGuWP/dsh-plugin-market) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 插件技能库：浏览/预检/一键安装/更新/卸载 dsh 插件与 Skill 技能包，设置页一键重启与 harness 本体自更新。Plugin & skill marketplace for deepseek-harness. |
| 196 | [jcleener/api-monitor](https://github.com/jcleener/api-monitor) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件：常驻 API 用量监控 —— DeepSeek/SiliconFlow/OpenCode Go/火山引擎 余额与配额、会话树 token 与花费（侧边栏入口 + 浮动窗） |
| 197 | [jcleener/dsh-local-plugin-switch](https://github.com/jcleener/dsh-local-plugin-switch) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件：设置页「本地插件开关」区块 —— 列出本地已安装插件并实时/持久开关 |
| 198 | [jcleener/dsh-model-cascade](https://github.com/jcleener/dsh-model-cascade) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件：模型选择三级级联菜单（供应商→系列→完整模型名） |
| 199 | [jdz321/dsh-plugin-git-status](https://github.com/jdz321/dsh-plugin-git-status) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin: current workspace Git status in the Web GUI composer tool row (branch, change counts, expandable file list, auto-refresh) plus a git_status agent tool. |
| 200 | [Jiangdl0220/dsh-archived-sessions](https://github.com/Jiangdl0220/dsh-archived-sessions) | 0 | 2026-08-19 | 2026-08-19 | View and manage archived sessions in DSH: browse the archive, read full transcripts (turns/reasoning/tools/markdown tables), remove records. Desktop + web. |
| 201 | [jin123-alpha/dsh-ext-vision-proxy](https://github.com/jin123-alpha/dsh-ext-vision-proxy) | 0 | 2026-08-19 | 2026-08-19 | External vision proxy extension for DeepSeek Harness, enabling text-only models  to analyze and understand images via OpenAI-compatible vision APIs. |
| 202 | [JK-LIL/dsh-compaction-current-model](https://github.com/JK-LIL/dsh-compaction-current-model) | 0 | 2026-08-19 | 2026-08-19 | DSH bundle: route manual /compact summarization to the frontend current model |
| 203 | [jo32/DeepDeck](https://github.com/jo32/DeepDeck) | 0 | 2026-08-17 | 2026-08-19 | DeepDeck — an extensible desktop workspace for DeepSeek Harness. |
| 204 | [Jonah-Wu23/dsh-bg-carousel](https://github.com/Jonah-Wu23/dsh-bg-carousel) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 背景轮播插件：把工作区 backgrounds 目录的图片设为背景并自动轮播 (MIT) |
| 205 | [Jonah-Wu23/dsh-fullstack-pack](https://github.com/Jonah-Wu23/dsh-fullstack-pack) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 全栈开发整合包：一键安装 7 个核心 dsh 插件 (MIT) |
| 206 | [jsdvjx/dshn](https://github.com/jsdvjx/dshn) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness Network — public forwarding for a local dsh web UI over *.ds.hn: a dsh plugin + self-hosted WSS relay behind Cloudflare, with optional end-to-end encryption. |
| 207 | [JunguangJiang/ds-whale-ui](https://github.com/JunguangJiang/ds-whale-ui) | 0 | 2026-08-19 | 2026-08-19 | 🐳 DeepSeek brand whale progress indicator for DSH Web GUI — swims above the composer while the agent works, with spout animation and todo-progress tracking |
| 208 | [JunguangJiang/dsh-agent-lead](https://github.com/JunguangJiang/dsh-agent-lead) | 0 | 2026-08-19 | 2026-08-19 | DSH 带队模式插件：主 Agent 只规划派活监工，改动交给 subagent，每次派活弹窗选子模型 |
| 209 | [JunguangJiang/dsh-lark-channel](https://github.com/JunguangJiang/dsh-lark-channel) | 0 | 2026-08-19 | 2026-08-19 | Lark/Feishu IM bot channel for DeepSeek Harness: session mirroring, interactive cards, topic-level sync |
| 210 | [Junkrat9527/dsh-desktop-automation](https://github.com/Junkrat9527/dsh-desktop-automation) | 0 | 2026-08-19 | 2026-08-19 | macOS desktop automation for DeepSeek Harness: mouse/keyboard/scroll/apps/windows/screenshot agent tools + vision closed-loop (see+locate). GUI-session service, no boot autostart. |
| 211 | [JW53222/faultseed](https://github.com/JW53222/faultseed) | 0 | 2026-08-14 | 2026-08-19 | Nine deterministic hooks that block a coding agent from weakening tests, swallowing errors, or stubbing type checks — each backed by a planted-failure test proving the guard can actually fire. Runs on Claude Code and DeepSeek Harness. |
| 212 | [kaieye/dsh-AIR](https://github.com/kaieye/dsh-AIR) | 0 | 2026-08-18 | 2026-08-19 | 使用 ↑ / ↓ 切换历史发送记录，并通过 /btw 打开停靠式侧边对话。 |
| 213 | [KannaKuron/dsh-ptc-cordis-preset](https://github.com/KannaKuron/dsh-ptc-cordis-preset) | 0 | 2026-08-19 | 2026-08-19 | PTC 模式基础上的创造模式:DSH 插件,合成 Code Mode 工具编排 + 自引用 Cordis 工具与 preset 创作指导,物化为 'ptc-cordis' 用户 preset |
| 214 | [kuaiyukuaikuai/dsh-agent-sync](https://github.com/kuaiyukuaikuai/dsh-agent-sync) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin: scan other AI agents (Codex, Claude Code, cc-switch, Hermes, opencode, Gemini, Grok, Kimi, CodeBuddy, Trae, OpenClaw, Qoder, WorkBuddy, Cursor, ...) and one-click sync their MCP servers and skills into DSH. |
| 215 | [kui123456789/dsh-codex-workflow](https://github.com/kui123456789/dsh-codex-workflow) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin that coordinates Codex planning and independent review while DSH executes. |
| 216 | [lan450/dsh-mobile-ui](https://github.com/lan450/dsh-mobile-ui) | 0 | 2026-08-19 | 2026-08-19 | Mobile layout adaptation for the DeepSeek Harness Web UI — no overflow on phones: overlay sidebar, bottom-sheet pickers, two-row question/plan-review cards, safe-area handling. 手机端 UI 适配插件. |
| 217 | [levi52/dsh-pet](https://github.com/levi52/dsh-pet) | 0 | 2026-08-19 | 2026-08-19 | 🐾 DeepSeek Harness 桌宠插件 |
| 218 | [lexmount/dsh-browser](https://github.com/lexmount/dsh-browser) | 0 | 2026-08-17 | 2026-08-19 | Lexmount Browser plugin for DeepSeek Harness (DSH). |
| 219 | [linziyanleo/dsh-custom-provider](https://github.com/linziyanleo/dsh-custom-provider) | 0 | 2026-08-18 | 2026-08-19 | Configure custom LLM providers in DeepSeek Harness. |
| 220 | [Linzr-lly/dsh-whale-lap](https://github.com/Linzr-lly/dsh-whale-lap) | 0 | 2026-08-19 | 2026-08-19 | 趴趴鲸鱼娘 🐋 趴在 DeepSeek Harness 对话框上的二次元鲸鱼娘桌宠插件：手绘 SVG、灵动动态、零外部依赖 |
| 221 | [liqiming-whu/dsh-status-card](https://github.com/liqiming-whu/dsh-status-card) | 0 | 2026-08-19 | 2026-08-19 | Dynamic dsh-ui status cards for DeepSeek Harness agent replies |
| 222 | [liuchang8877/dsh-plugin-openviking](https://github.com/liuchang8877/dsh-plugin-openviking) | 0 | 2026-08-19 | 2026-08-19 | 把 OpenViking 作为记忆层接入 DeepSeek Harness。不需要写代码，实测可用的 MCP 对接配置。 |
| 223 | [liuwenji007/dsh-muyu](https://github.com/liuwenji007/dsh-muyu) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 电子木鱼：右下角的小肥鲸，敲头记功德，等 loop 时摸摸鱼头 |
| 224 | [lninghaha/dsh-coding-remote-kit](https://github.com/lninghaha/dsh-coding-remote-kit) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness mobile pairing remote: E2EE companion over dual-plane allowlisted RPC |
| 225 | [lninghaha/dsh-hub-oauth-gateway](https://github.com/lninghaha/dsh-hub-oauth-gateway) | 0 | 2026-08-17 | 2026-08-19 | DSH Web plugin: Usage Center with Hub snapshots and cost analytics, coding-plan OAuth, and optional loopback OpenAI-compatible gateway |
| 226 | [lvxinrong/Kantu](https://github.com/lvxinrong/Kantu) | 0 | 2026-08-18 | 2026-08-19 | 堪图 - 系统级分析 |
| 227 | [Makoveli89/dsh-swarm](https://github.com/Makoveli89/dsh-swarm) | 0 | 2026-08-19 | 2026-08-19 | BSP coding swarm plugin for DeepSeek Harness: nested 3-tier swarms of 100+ concurrent DeepSeek V4 agents with barrier-synchronized phases, worktree isolation, guardrails, and cache-stable prefixes |
| 228 | [Mamihlapinatapaiooo/dsh-plugin-inventory-groups](https://github.com/Mamihlapinatapaiooo/dsh-plugin-inventory-groups) | 0 | 2026-08-16 | 2026-08-19 | 把官方插件与自装插件分开显示，方便快速定位和管理自己安装的插件。 |
| 229 | [MFWTW/dsh-UI-web](https://github.com/MFWTW/dsh-UI-web) | 0 | 2026-08-19 | 2026-08-19 | 工作流UI弹窗 |
| 230 | [MicroWearld/dsh-a2a-server](https://github.com/MicroWearld/dsh-a2a-server) | 0 | 2026-08-19 | 2026-08-19 | A2A server bridge plugin for DeepSeek Harness |
| 231 | [MicroWearld/dsh-subagent-a2a](https://github.com/MicroWearld/dsh-subagent-a2a) | 0 | 2026-08-19 | 2026-08-19 | A2A client provider plugin for DeepSeek Harness |
| 232 | [mikegabyte/dsh-vn-biz](https://github.com/mikegabyte/dsh-vn-biz) | 0 | 2026-08-19 | 2026-08-19 | Vietnam business toolkit for DeepSeek Harness (dsh): VietQR quick-link, tax-code (MST) lookup, amount-to-Vietnamese-words. |
| 233 | [MkaliezZ/dsh-evidence-task-board](https://github.com/MkaliezZ/dsh-evidence-task-board) | 0 | 2026-08-15 | 2026-08-19 | Persistent, deterministic task-state primitives for DeepSeek Harness: create, status, and evidence transitions. |
| 234 | [MkaliezZ/dsh-test-normalizer](https://github.com/MkaliezZ/dsh-test-normalizer) | 0 | 2026-08-15 | 2026-08-19 | Structured test-result normalization for DSH: pytest, Vitest, Jest, and Cargo summaries into a stable shape. |
| 235 | [mobius/dsh-pixel-liangzu](https://github.com/mobius/dsh-pixel-liangzu) | 0 | 2026-08-18 | 2026-08-19 | 像素大头桌面宠物：角色跟随 6 档性能滑杆，动作跟随对话执行状态。 / Pixel desktop pet for DeepSeek Harness. |
| 236 | [Mshir0/dsh-conda-workspace-env](https://github.com/Mshir0/dsh-conda-workspace-env) | 0 | 2026-08-19 | 2026-08-19 | Choose and persist a Conda environment per DeepSeek Harness workspace |
| 237 | [msnlyy-rgb/dsh-spotify-theme](https://github.com/msnlyy-rgb/dsh-spotify-theme) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness Spotify 风格主题 — 近黑底色、灰阶分层卡片、Spotify 绿 (#1ed760) 点缀的 CSS 主题覆写，含折叠栏加宽与统计卡进度条可选补丁 |
| 238 | [NattoCB/dsh-plugin-memory](https://github.com/NattoCB/dsh-plugin-memory) | 0 | 2026-08-17 | 2026-08-19 | dsh-plugin-memory: a persistent 5-layer memory system plugin for DeepSeek Harness (DSH) — index+topics split, truncation budget, relevance injection, idle LLM auto-extraction, and 6 agent tools. |
| 239 | [NattoCB/dsh-plugin-notifications](https://github.com/NattoCB/dsh-plugin-notifications) | 0 | 2026-08-15 | 2026-08-19 | DSH (DeepSeek Harness) bundle plugin: a Settings → General card that pops a system notification (and optional Web Audio chime) when a conversation turn completes. |
| 240 | [NattoCB/dsh-plugin-petdex-market](https://github.com/NattoCB/dsh-plugin-petdex-market) | 0 | 2026-08-15 | 2026-08-19 | DSH plugin: petdex.dev companion-pet market with a native macOS desktop pet renderer |
| 241 | [NattoCB/dsh-skill-indexer](https://github.com/NattoCB/dsh-skill-indexer) | 0 | 2026-08-19 | 2026-08-19 | DSH Cordis plugin: two-level (category + skill) recall index over all local SKILL.md files with intent routing (hit/low/miss fallback), read-only on source dirs. |
| 242 | [neltharion11/dsh-api-balance](https://github.com/neltharion11/dsh-api-balance) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: show your DeepSeek API account balance in the DSH web sidebar (live widget) and expose it to the model via an api_balance tool |
| 243 | [NGdust/dsh-claude-code-local](https://github.com/NGdust/dsh-claude-code-local) | 0 | 2026-08-19 | 2026-08-19 | Local Claude Code provider for DeepSeek Harness — runs your installed claude CLI as an LLM provider |
| 244 | [NightsVesa/dsh-input-history](https://github.com/NightsVesa/dsh-input-history) | 0 | 2026-08-19 | 2026-08-19 | Arrow-key input history for the DeepSeek Harness Web composer |
| 245 | [ningmengxr/dsh-task-control](https://github.com/ningmengxr/dsh-task-control) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 插件：pip/GitHub 下载卡死一键急停 + 下载进度检测 + 卡死识别 + 隐形追加条件。Emergency stop for stuck pip/GitHub downloads in DSH. |
| 246 | [Nixz0824/dsh-composer-alcove](https://github.com/Nixz0824/dsh-composer-alcove) | 0 | 2026-08-19 | 2026-08-19 | DSH composer: scroll to an iPhone home-indicator pill; corner arcs dock the real composer into the left/right gutter / 下滑收到 Home 条，左右弧线把原输入框停到两侧留白。 |
| 247 | [oil-oil/dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator) | 0 | 2026-08-19 | 2026-08-19 | AI-assisted local creator workbench for DeepSeek Harness |
| 248 | [onlyforchris/dsh-plugin-manager](https://github.com/onlyforchris/dsh-plugin-manager) | 0 | 2026-08-17 | 2026-08-19 | DSH 插件管家：验证过的插件推荐 + 页内安装/升级/卸载与结构体检。Native DSH plugin discovery, first-use & lifecycle manager. |
| 249 | [OpenSaozi/dsh-session-archive](https://github.com/OpenSaozi/dsh-session-archive) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 网页版会话归档与还原插件，把暂时不用的对话收进侧边栏底部。 \| Session archive management and restoration UI plugin for DeepSeek Harness. |
| 250 | [OpenSaozi/dsh-session-pin](https://github.com/OpenSaozi/dsh-session-pin) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 网页版全局会话置顶插件，把重要对话钉在侧边栏顶部。 \| Codex-style global pinned conversations UI plugin for DeepSeek Harness. |
| 251 | [ostar999/ostar-dsh-left-sidebar](https://github.com/ostar999/ostar-dsh-left-sidebar) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness left sidebar \| DeepSeek Harness 左侧边栏增强版 |
| 252 | [Pasumao/dsh-plugin-choice-refresh](https://github.com/Pasumao/dsh-plugin-choice-refresh) | 0 | 2026-08-19 | 2026-08-19 | DSH 选择增强插件：「重新生成选项」/「更多选项」按钮。Choice refresh (regenerate / more options) for DeepSeek Harness (dsh). |
| 253 | [Pasumao/dsh-plugin-dev-kb](https://github.com/Pasumao/dsh-plugin-dev-kb) | 0 | 2026-08-17 | 2026-08-19 | DeepSeek Harness (dsh) 插件开发知识库：官方文档完整镜像 + 主题导航与检索。Plugin development knowledge base for dsh. |
| 254 | [Pasumao/dsh-plugin-image-tools](https://github.com/Pasumao/dsh-plugin-image-tools) | 0 | 2026-08-17 | 2026-08-19 | DSH 图片插件：ask_user_choice 图片/图文混合选择卡（可放大查看）+ show_images 回复内嵌图片。Image choice cards + inline images for DeepSeek Harness (dsh). |
| 255 | [Payel-git-ol/use-opencode-local-provider](https://github.com/Payel-git-ol/use-opencode-local-provider) | 0 | 2026-08-19 | 2026-08-19 | dsh plugin: use the opencode local server (OpenCode Zen client channel) as an OpenAI-compatible provider |
| 256 | [PeanutsDou/dsh-selection-tutor](https://github.com/PeanutsDou/dsh-selection-tutor) | 0 | 2026-08-19 | 2026-08-19 | DSH selection tutor plugin: explain/translate selected text in a temporary hidden session branch. |
| 257 | [PerryLink/dsh-data-quality](https://github.com/PerryLink/dsh-data-quality) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: deterministic data profiling, cleaning, and verification (dsh-data-quality) |
| 258 | [PerryLink/dsh-fund-research](https://github.com/PerryLink/dsh-fund-research) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: deterministic research reports for Chinese public mutual funds |
| 259 | [PerryLink/dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) | 0 | 2026-08-19 | 2026-08-19 | Industry and company research domain pack for DeepSeek Harness: methodology skills, industry chain mapping, public-source policy/news tracking, company research cards, and auditable research reports. Research only - not investment advice. |
| 260 | [PerryLink/dsh-research-report](https://github.com/PerryLink/dsh-research-report) | 0 | 2026-08-19 | 2026-08-19 | Verifiable research-report engine for DeepSeek Harness: content-addressed evidence ledger (claim-snapshot binding, tamper-evident) plus versioned sealed reports with per-claim verification verdicts and a manifest-sealed directory. |
| 261 | [PineappleTwilight/dsh-llm-retry-infinite](https://github.com/PineappleTwilight/dsh-llm-retry-infinite) | 0 | 2026-08-19 | 2026-08-19 | Better retry handling for DSH |
| 262 | [quei4r/dsh-client-open-in-vscode](https://github.com/quei4r/dsh-client-open-in-vscode) | 0 | 2026-08-19 | 2026-08-19 | DSH web plugin: click file paths in the chat UI to open them in the matching VS Code window (webview-safe host route) |
| 263 | [qwertyuiop314/dsh-recycle-bin](https://github.com/qwertyuiop314/dsh-recycle-bin) | 0 | 2026-08-19 | 2026-08-19 | DSH recycle bin plugin: archive trash, batch restore/purge, sidebar batch archive |
| 264 | [QWQcool/dsh-trivium](https://github.com/QWQcool/dsh-trivium) | 0 | 2026-08-19 | 2026-08-19 | In-process graph memory kernel for DeepSeek Harness, backed by TriviumDB. |
| 265 | [RailgunHamster/dsh-web-search](https://github.com/RailgunHamster/dsh-web-search) | 0 | 2026-08-19 | 2026-08-19 | A DeepSeek Harness plugin for selecting and routing web search providers. |
| 266 | [Ratevoid/dsh-aseprite](https://github.com/Ratevoid/dsh-aseprite) | 0 | 2026-08-19 | 2026-08-19 | Unofficial Aseprite-compatible pixel editor and sprite animation plugin for DeepSeek Harness. |
| 267 | [rison114514/deepseek-status-monitor](https://github.com/rison114514/deepseek-status-monitor) | 0 | 2026-08-19 | 2026-08-19 | DSH 对话页时段状态显示器：按收费低谷/过渡/高峰显示对应插画,引导低谷时段使用。 |
| 268 | [ROOKIE02314/dsh-browser](https://github.com/ROOKIE02314/dsh-browser) | 0 | 2026-08-19 | 2026-08-19 | Browser-enabled DeepSeek Harness distribution with Playwright automation |
| 269 | [Rtyyy233/dsh-factor-mining-plugin](https://github.com/Rtyyy233/dsh-factor-mining-plugin) | 0 | 2026-08-19 | 2026-08-19 | A agentic factor mining plugin for DSH, suitable for small llm like qwen.Its core package could also work independently. |
| 270 | [Schumchanvi/dsh-voice-input-cn](https://github.com/Schumchanvi/dsh-voice-input-cn) | 0 | 2026-08-19 | 2026-08-19 | Voice input plugin for DeepSeek Harness web (China-ready): Alibaba Cloud DashScope ASR via local bridge |
| 271 | [SeaOf0/dsh-mcp-studio](https://github.com/SeaOf0/dsh-mcp-studio) | 0 | 2026-08-16 | 2026-08-19 | DeepSeek Harness (dsh) 的 MCP 服务器工作台：实时挂载、真实连接状态、工具预览、JSON 一键导入 |
| 272 | [shiyazhou666/dsh-token-plan-compare](https://github.com/shiyazhou666/dsh-token-plan-compare) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness (DSH) plugin: compare token plan cost-effectiveness across LLM providers. ???????API token??????DSH??? |
| 273 | [SiriusWJ/dsh-skills](https://github.com/SiriusWJ/dsh-skills) | 0 | 2026-08-19 | 2026-08-19 | Personal DeepSeek Harness (dsh) skills collection. 个人 DSH 技能集。 |
| 274 | [sjh9714/repo-cover](https://github.com/sjh9714/repo-cover) | 0 | 2026-08-19 | 2026-08-19 | Agent skill that designs your GitHub social preview (og:image) as one self-contained HTML file. Five moods, CJK-first, deterministic checks, PNG export. repo cover, opengraph, link card. |
| 275 | [sjhmars/dsh-plugins](https://github.com/sjhmars/dsh-plugins) | 0 | 2026-08-18 | 2026-08-19 | 一个deepseek插件库 |
| 276 | [SmileBuild/dsh-planchart](https://github.com/SmileBuild/dsh-planchart) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: the agent publishes a project plan as steps in a side panel and a framework diagram in a centre tab, downloadable as SVG or PNG. |
| 277 | [sologuy/dsh-llm-bailian-kimi](https://github.com/sologuy/dsh-llm-bailian-kimi) | 0 | 2026-08-19 | 2026-08-19 | Bailian (DashScope) Kimi LLM adapter plugin for DeepSeek Harness — kimi-k3 with image input, thinking and tool calling. No build step. |
| 278 | [ssdyg4444-sys/dsh-audit-log](https://github.com/ssdyg4444-sys/dsh-audit-log) | 0 | 2026-08-19 | 2026-08-19 | Runtime data-flow audit log for DeepSeek Harness: who mutated what, in what order - per-plugin, per-fiber attribution. |
| 279 | [staavanothanh/dsh-cbm](https://github.com/staavanothanh/dsh-cbm) | 0 | 2026-08-18 | 2026-08-19 | Adapter plugin đưa `codebase-memory-mcp` vào DeepSeek Harness (DSH). |
| 280 | [sunyuhuirong/shl-session-history](https://github.com/sunyuhuirong/shl-session-history) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: conversation history request rail (ZCode-style) - 会话历史请求迷你滑轨 |
| 281 | [surenkid/dsh-selection-based-comments](https://github.com/surenkid/dsh-selection-based-comments) | 0 | 2026-08-19 | 2026-08-19 | DSH Web 的选区评论插件，提供类似 ChatGPT/Codex 网页端的评论体验：在聊天消息中选中一段文字，针对该选段写评论；可以继续选择其他内容追加评论；最后一次性把所有选段和评论组成一条普通用户消息提交给当前会话。 |
| 282 | [tangyuewei/dsh-client-ui-pet](https://github.com/tangyuewei/dsh-client-ui-pet) | 0 | 2026-08-18 | 2026-08-19 | 🐟 Salted Fish Pet — a Cordis-based web-client UI plugin for the DeepSeek Harness Web UI. Injects a draggable, feedable salted fish mascot + full-viewport engineer wallpaper into the shell.overlay slot. Pure front-end (React + CSS Modules), zero server-side. |
| 283 | [taot/dsh-better-model-picker](https://github.com/taot/dsh-better-model-picker) | 0 | 2026-08-19 | 2026-08-19 | A better model picker for Deepseek Harness |
| 284 | [Tastelessor/dsh-usage-stats](https://github.com/Tastelessor/dsh-usage-stats) | 0 | 2026-08-14 | 2026-08-19 | Token usage and cost analytics plugin for DeepSeek Harness (dsh) |
| 285 | [temidayoxyz/deep-tariff](https://github.com/temidayoxyz/deep-tariff) | 0 | 2026-08-19 | 2026-08-19 | Free DeepSeek official-API peak/off-peak plugin for DeepSeek Harness |
| 286 | [tengfeizhao1219/dsh-ai-collab](https://github.com/tengfeizhao1219/dsh-ai-collab) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件：AI 多角色协作开发框架（文件即通信）—— 一键初始化协作约定文件，任何 DSH 会话通过 ai_collab_init 驱动多角色 AI 协作完成软件项目。 |
| 287 | [tenglongbohai/dsh-paddle-ocr](https://github.com/tenglongbohai/dsh-paddle-ocr) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin: Add PaddleOCR vision capability to Agnes-2.5-Flash free model |
| 288 | [thisissevenpoints/DeepSeek-Harness-Local-svpts](https://github.com/thisissevenpoints/DeepSeek-Harness-Local-svpts) | 0 | 2026-08-16 | 2026-08-19 | DeepSeek Harness Local svpts —— 常驻托盘桌面壳（看门狗 + 注入式 UI + 局域网确认鉴权） |
| 289 | [tiantianlaolao/dsh-astock-research](https://github.com/tiantianlaolao/dsh-astock-research) | 0 | 2026-08-19 | 2026-08-19 | A股个股研究助手 - DeepSeek Harness (dsh) 插件：股票搜索/历史公告/财报/画像/信号科普，附合规 skill |
| 290 | [timsok-shit/dsh-conversation-tracker](https://github.com/timsok-shit/dsh-conversation-tracker) | 0 | 2026-08-19 | 2026-08-19 | DSH Web Conversation Navigator（对话追踪导航条）- 节点直接来自当前 conversation 完整 messages 数据 |
| 291 | [Tinzlu/dsh-review](https://github.com/Tinzlu/dsh-review) | 0 | 2026-08-19 | 2026-08-19 | Codex 独立审查技能：DeepSeek Harness + V4 Flash 交叉 review。Independent code review via DSH — cross-model second opinion at near-zero cost. |
| 292 | [TY-ang/dsh-worktree-flow](https://github.com/TY-ang/dsh-worktree-flow) | 0 | 2026-08-19 | 2026-08-19 | DSH (DeepSeek Harness) plugin: multi-repo feature workspaces — one directory per feature, one git worktree per component repo, all on a shared feature branch, auto-registered as a DSH workspace. |
| 293 | [victorytianyi-dev/dsh-upload-button](https://github.com/victorytianyi-dev/dsh-upload-button) | 0 | 2026-08-19 | 2026-08-19 | Upload-image button plugin for DeepSeek Harness Web UI + DashScope text-to-image helper |
| 294 | [waknow/dsh-web-icon-indicator](https://github.com/waknow/dsh-web-icon-indicator) | 0 | 2026-08-19 | 2026-08-19 | DSH browser tab favicon reflecting session state: idle / running / asking / done. · DSH 标签页 favicon 实时反映会话状态：待机 / 运行中 / 提问 / 完成 |
| 295 | [Wanbinyu/dsh-error-lens](https://github.com/Wanbinyu/dsh-error-lens) | 0 | 2026-08-19 | 2026-08-19 | Read-only, redacted provider error diagnostics for DeepSeek Harness |
| 296 | [Wanbinyu/dsh-provider-probe](https://github.com/Wanbinyu/dsh-provider-probe) | 0 | 2026-08-19 | 2026-08-19 | Manual provider connectivity and latency checks for DeepSeek Harness |
| 297 | [wangcong1137-hash/dsh-geoserver](https://github.com/wangcong1137-hash/dsh-geoserver) | 0 | 2026-08-19 | 2026-08-19 | DSH 平台 GeoServer 交互插件，实现可视化配置与会话内地图图像输出。 |
| 298 | [wangxilhy23/dsh-wx-desktop](https://github.com/wangxilhy23/dsh-wx-desktop) | 0 | 2026-08-19 | 2026-08-19 | deepseek harness 桌面端插件 |
| 299 | [wangxing-git/dsh-tool-workspace](https://github.com/wangxing-git/dsh-tool-workspace) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 工作区管理工具集：查看、创建注册、重命名、删除工作区记录（纯注册，不触碰磁盘目录）；破坏性操作（删除注册、改注册路径）走用户审批 fail-closed。 |
| 300 | [wannanbigpig/dsh-usage-stats](https://github.com/wannanbigpig/dsh-usage-stats) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness web 用量与计费插件：官方余额、Token 用量、贡献热图与按小时计费统计。Balance, token usage, contribution heatmap & per-hour cost stats for dsh web. |
| 301 | [wbj0256/dsh-agent-handoff-deliberation](https://github.com/wbj0256/dsh-agent-handoff-deliberation) | 0 | 2026-08-19 | 2026-08-19 | Privacy-first cross-agent handoff and adversarial deliberation tools for the DeepSeek Harness ecosystem. |
| 302 | [webkong/dsh-plugin-manager](https://github.com/webkong/dsh-plugin-manager) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件管理器：内置/三方插件安装、卸载、启动、停用与 GitHub 直跳 |
| 303 | [wiyi/dsh-web-service-manager](https://github.com/wiyi/dsh-web-service-manager) | 0 | 2026-08-19 | 2026-08-19 | Manage the DSH web service from a settings panel: status, version, restart, stop and one-click updates. \| DSH Web 服务管理面板:状态、版本、重启、停止与一键更新。 |
| 304 | [wusai2333/dsh-yierpet-sentinel](https://github.com/wusai2333/dsh-yierpet-sentinel) | 0 | 2026-08-19 | 2026-08-19 | dsh plugin: forwards DeepSeek Harness lifecycle events to the YierPet desktop-pet sentinel (fire-and-forget) |
| 305 | [wusai2333/YierPet](https://github.com/wusai2333/YierPet) | 0 | 2026-08-19 | 2026-08-19 | YierPet — a macOS desktop pet that watches over your AI coding agents (qwen / qodercli / opencode / omp / omo / dsh): bubbles, animations and sounds on confirm / error / done |
| 306 | [XGrin/dsh-search-router](https://github.com/XGrin/dsh-search-router) | 0 | 2026-08-19 | 2026-08-19 | A tiny DeepSeek Harness (DSH) plugin |
| 307 | [xiaheng1/dsh-turn-nav](https://github.com/xiaheng1/dsh-turn-nav) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness Web 对话轮次导航轨 |
| 308 | [Xiangliuy/dsh-web-search-bing-rss](https://github.com/Xiangliuy/dsh-web-search-bing-rss) | 0 | 2026-08-19 | 2026-08-19 | 免费、无需 API Key 的 Bing RSS 联网搜索插件，供 DeepSeek Harness (DSH) 的大模型使用 |
| 309 | [Xiaofei-fei/dsh-prompt-history](https://github.com/Xiaofei-fei/dsh-prompt-history) | 0 | 2026-08-19 | 2026-08-19 | Bash-like prompt history for the DSH web composer: Up/Down arrows recall previously submitted messages, sourced from the session's own message log (zero config, zero extra storage). |
| 310 | [Xiaojing-511/dsh-web-restart](https://github.com/Xiaojing-511/dsh-web-restart) | 0 | 2026-08-18 | 2026-08-19 | DSH Web one-click restart plugin pair (dsh-restart) |
| 311 | [xiaoxianasd/dsh-liquid-glass-ui](https://github.com/xiaoxianasd/dsh-liquid-glass-ui) | 0 | 2026-08-19 | 2026-08-19 | 这是deepseek harness的插件，可以更改背景图以及更改ui为透明液态玻璃 |
| 312 | [xiaozs-com/dsh-screen-automation](https://github.com/xiaozs-com/dsh-screen-automation) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness (dsh) host plugin bridging the local Screen Automation Helper desktop into the Agent tool system (30 tools). |
| 313 | [xingyingyuzhui/dsh-restart](https://github.com/xingyingyuzhui/dsh-restart) | 0 | 2026-08-19 | 2026-08-19 | Restart the DeepSeek Harness Web host from Settings. |
| 314 | [xiongjiamu/dsh-gitmodules-dir](https://github.com/xiongjiamu/dsh-gitmodules-dir) | 0 | 2026-08-19 | 2026-08-19 | git-partial-submodule bundle for DeepSeek Harness (dsh): lets dsh users add, clone, and manage partial git submodules |
| 315 | [xisheng687/dsh-grok-subscription](https://github.com/xisheng687/dsh-grok-subscription) | 0 | 2026-08-19 | 2026-08-19 | Bring your Grok subscription into DeepSeek Harness as an ACP subagent, with multimodal media tools. |
| 316 | [Xpectuer/dsh-peak-alarm](https://github.com/Xpectuer/dsh-peak-alarm) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek peak-pricing alarm for DSH: Beijing peak hours (09:00-12:00 / 14:00-18:00, price x2) header badge + peak/valley transition toasts — alarm only, no prompt injection. · DeepSeek 峰谷计价告警插件（纯告警） |
| 317 | [xusuyang030218/dsh-code-workbench](https://github.com/xusuyang030218/dsh-code-workbench) | 0 | 2026-08-19 | 2026-08-19 | DSH code workbench plugin: upload code -> AI modify/optimize/review -> download modified code + diff view + review report. Zero external dependencies. |
| 318 | [xuxun-oss/dsh-gemini-bridge](https://github.com/xuxun-oss/dsh-gemini-bridge) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin: bridge Google Gemini vision & image generation (gemini_vision / gemini_generate_image / gemini_optimize_image) with auto model selection and self-check refinement |
| 319 | [Yaing-Yan/dsh-show-picture](https://github.com/Yaing-Yan/dsh-show-picture) | 0 | 2026-08-19 | 2026-08-19 | DSH (DeepSeek Harness) Cordis plugin that lets the agent display images — local files or URLs — directly inside the conversation. |
| 320 | [YiCheng-Zzz/dsh-client-ui-skin-jarvis](https://github.com/YiCheng-Zzz/dsh-client-ui-skin-jarvis) | 0 | 2026-08-19 | 2026-08-19 | 可兼容web-ui的贾维斯皮肤 |
| 321 | [YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own](https://github.com/YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own) | 0 | 2026-08-19 | 2026-08-19 | 独立的贾维斯皮肤 |
| 322 | [yllyx/dsh-plugin-stock](https://github.com/yllyx/dsh-plugin-stock) | 0 | 2026-08-19 | 2026-08-19 | DSH 股票监控插件 - 实时行情、K线、持仓监控、AI 对话式查询（仅监控） |
| 323 | [Yourtsao/gongwen-dsh](https://github.com/Yourtsao/gongwen-dsh) | 0 | 2026-08-19 | 2026-08-19 | 智能公文写作 DeepSeek Harness 插件——0知识库在线调用，免费10次/7天，2元/次或399元包年（前10个终身），GB/T 9704 38类文种 |
| 324 | [yuzh1090/dsh-voice-prompt-compressor](https://github.com/yuzh1090/dsh-voice-prompt-compressor) | 0 | 2026-08-19 | 2026-08-19 | DSH plugin: compress verbose voice-dictation text into token-efficient prompts — fully local, zero LLM tokens. |
| 325 | [ZChenW/dsh-codex-switch](https://github.com/ZChenW/dsh-codex-switch) | 0 | 2026-08-19 | 2026-08-19 | ChatGPT OAuth, multi-account switching, and Codex models for DeepSeek Harness. |
| 326 | [zengrz/dsh-matrix-theme](https://github.com/zengrz/dsh-matrix-theme) | 0 | 2026-08-16 | 2026-08-19 | The Matrix movie theme for the DeepSeek Harness (dsh) web GUI — installable dsh plugin: green-on-black palette, digital-rain backdrop, and a General-settings toggle. |
| 327 | [Zenjibad/llmtrim-stats-plugin](https://github.com/Zenjibad/llmtrim-stats-plugin) | 0 | 2026-08-19 | 2026-08-19 | Live llmtrim savings dashboard inside the DeepSeek Harness (DSH) Web UI: a settings dashboard plus a rotating carousel stats strip under the composer. |
| 328 | [ZHI-QI/dsh-okf-memory](https://github.com/ZHI-QI/dsh-okf-memory) | 0 | 2026-08-19 | 2026-08-19 | dsh-okf-memory: 会话记忆 → OKF 知识沉淀插件(神经自我学习驱动)。Session-to-OKF memory plugin: predictive recall, uncertainty-driven capture, reinforcement feedback, consolidation & forgetting. |
| 329 | [zhouchengke2046/dsh-restart](https://github.com/zhouchengke2046/dsh-restart) | 0 | 2026-08-19 | 2026-08-19 | Independent one-click restart for DeepSeek Harness web (Settings page). · 独立的 DSH Web 一键重启插件。 |
| 330 | [zhoushuoshi-code/dsh-live](https://github.com/zhoushuoshi-code/dsh-live) | 0 | 2026-08-19 | 2026-08-19 | DSH Live — Your coding agent calls you when it needs you. Approve actions, track live progress, send photos, and review results from iPhone or Android. A mobile companion plugin for DeepSeek Harness. |
| 331 | [zhuifengqug/dsh-quick-restart](https://github.com/zhuifengqug/dsh-quick-restart) | 0 | 2026-08-19 | 2026-08-19 | 为 DeepSeek Harness 提供快速重启命令的插件 |
| 332 | [zoyluoblue/deepseek-harness-replay](https://github.com/zoyluoblue/deepseek-harness-replay) | 0 | 2026-08-19 | 2026-08-19 | Export any DeepSeek Harness session as a self-contained, replayable HTML transcript · 把 dsh 会话导出成自包含、可回放的 HTML |
| 333 | [zoyluoblue/deepseek-harness-rewind](https://github.com/zoyluoblue/deepseek-harness-rewind) | 0 | 2026-08-19 | 2026-08-19 | dsh plugin: snapshot your workspace every turn and restore the files to any earlier point. A rewind/undo for DeepSeek Harness coding sessions — your own git repo is never touched. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 23swccp/dsh-undo-plugin
- Army1900/dsh-cordis-emotion-engine
- Badegg404/dsh-api-balance
- dsh-external/chat-width
- dsh-external/dsh-agent-teams
- dsh-external/dsh-at-file
- dsh-external/dsh-automation
- dsh-external/dsh-bash-encoding
- dsh-external/dsh-better-browser
- dsh-external/dsh-book2skill
- dsh-external/dsh-computer-use
- dsh-external/dsh-custom-tool
- dsh-external/dsh-cyber-sec
- dsh-external/dsh-daily-fortune
- dsh-external/dsh-deepcel
- dsh-external/dsh-deeplink
- dsh-external/dsh-doctor
- dsh-external/dsh-easy-ctx-manager
- dsh-external/dsh-fun-ticker
- dsh-external/dsh-fun-typewriter
- dsh-external/dsh-fun-weather
- dsh-external/dsh-genui
- dsh-external/dsh-grok-tui
- dsh-external/dsh-handoff
- dsh-external/dsh-input-history
- dsh-external/dsh-island
- dsh-external/dsh-minigames
- dsh-external/dsh-my-rsi
- dsh-external/dsh-notification
- dsh-external/dsh-nowledge-mem
- dsh-external/dsh-open-in-vscode
- dsh-external/dsh-openmaic
- dsh-external/dsh-paste-input
- dsh-external/dsh-pet
- dsh-external/dsh-pet-corner
- dsh-external/dsh-pi-adapter
- dsh-external/dsh-plan-execute
- dsh-external/dsh-plannotator
- dsh-external/dsh-plugin-guide
- dsh-external/dsh-qq2006
- dsh-external/dsh-revive
- dsh-external/dsh-session-hub
- dsh-external/dsh-spotlight
- dsh-external/dsh-STAGE
- dsh-external/dsh-STAR
- dsh-external/dsh-tps
- dsh-external/dsh-turn-rewind
- dsh-external/dsh-ui-progress
- dsh-external/dsh-ui-whale
- dsh-external/dsh-vision-toolkit
- dsh-external/dsh-visualize
- dsh-external/dsh-webui-live-html
- dsh-external/oh-my-dsh
- Eligahyu/dsh-sentinel
- Gdnaiteab/pingo-dsh-plugin
- huaqian695-sudo/wechat-bot
- hytime/dsh-companion
- Iwctwbh/dsh-dynamic-toolbox
- johnwick128-ship/dsh-opencode-subscription
- Kitup666/dsh-plugin-kmanager-installer
- lingruan28-boop/dsh-balance-float
- lire1131/dsh-undo-plugin
- MkaliezZ/dsh-task-board
- MkaliezZ/dsh-test-runner
- mobius/dsh-pixel-pet
- MoonGlassKitty/dsh-tailscale-sync
- my-dsh-plugin/readonly-security-audit
- noone89A/dsh-gauge
- Odefined/dsh-mobile-webui
- openma-ai/deepseek-harness-tui
- rayafriandion/deepseek-harness-tui
- shenyan-008/dsh-visual-aid
- VincentPhoton/SeekBalance
- webkubor/dsh-bloom-theme
- wxxb789/dsh-j-space
- yan77-h/dsh-agent-evaluator
- yuzhounh/dsh-windows-tray-launcher
- zink-ning/dsh-chat-width
- zink-ning/dsh-ui-state

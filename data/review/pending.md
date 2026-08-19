# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-19**
- 快照日期 / Snapshot date: **2026-08-19 (UTC)**
- 待审核 / Pending: **357**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **26**

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
| 1 | [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | 10774 | 2025-07-06 | 2026-08-19 | Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and DeepSeek Harness support. |
| 2 | [TencentCloudBase/CloudBase-AI-Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit) | 1070 | 2025-05-23 | 2026-08-19 | Backend for AI coding agents on CloudBase — database, auth, functions via Plugin, Skills & MCP. |
| 3 | [tong-io/tongflow](https://github.com/tong-io/tongflow) | 860 | 2026-04-08 | 2026-08-19 | TongFlow — multimodal workflow studio and engine (canvas + Python plugin engine) and dsh-tongflow, the DeepSeek Harness studio plugin |
| 4 | [cocode-agency/cocode](https://github.com/cocode-agency/cocode) | 68 | 2026-08-14 | 2026-08-19 | Best ready-to-run DeepSeek Harness distribution: DSH desktop GUI, terminal TUI, and harness integration. |
| 5 | [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins) | 27 | 2026-08-16 | 2026-08-19 | Make Deepseek Harness Great |
| 6 | [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode) | 21 | 2026-07-28 | 2026-08-19 | 面向 AI 编程客户端的动态、可响应环境——视频背景、氛围场景与主题，适用于 DeepSeek Harness 与 Codex Desktop。 |
| 7 | [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | 16 | 2026-08-15 | 2026-08-19 | A sidebar can pop out a separate browser tab (drag it to another monitor) |
| 8 | [dsh-external/dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) | 14 | 2026-08-05 | 2026-08-19 | 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】 |
| 9 | [1847123733/dsh-prompt-optimize](https://github.com/1847123733/dsh-prompt-optimize) | 6 | 2026-08-15 | 2026-08-19 | DSH Web plugin: web ui |
| 10 | [shenyan-008/dsh-visual-aid](https://github.com/shenyan-008/dsh-visual-aid) | 6 | 2026-08-18 | 2026-08-19 | dsh visual aid plugin: lets text-only main models handle images via a vision model |
| 11 | [MrElysium/dsh-md-quiz](https://github.com/MrElysium/dsh-md-quiz) | 5 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin: quiz-style reading (答题式阅读) of any Markdown document — 5-stage game loop with a sidebar panel and a reading-area tab. |
| 12 | [qweqwe12382/dsh-client-ui-pet](https://github.com/qweqwe12382/dsh-client-ui-pet) | 4 | 2026-08-15 | 2026-08-19 | Q pet desktop companion overlay plugin for DeepSeek Harness web GUI (dsh bundle) |
| 13 | [sixtysevenlf/dsh-save-balance-monitor](https://github.com/sixtysevenlf/dsh-save-balance-monitor) | 4 | 2026-08-16 | 2026-08-19 | 省钱+余额监控悬浮窗（DSH Web UI 插件）：DeepSeek / OpenCode Go 双标签余额、限额监控（金额/tok/小时）、语音提醒、超限断点截断 |
| 14 | [WTStarMark/DSH-QAQ](https://github.com/WTStarMark/DSH-QAQ) | 4 | 2026-08-15 | 2026-08-19 | QAQ（DSH-QAQ）面向 DeepSeek Harness（DSH）的启动容灾守卫，配套 dsh-qaq 备份插件：headless Chrome 读浏览器真实 DOM，检测宿主崩溃与 Web UI 红屏，自动回滚 last-good 配置并安全重启，内置防死循环。全屏 TUI 整合启动、日志、插件管理与热更新监控，零侵入、一条命令部署。开源：github.com/WTStarMark/DSH-QAQ。 |
| 15 | [AIFireForAll/dsh-enter-lock](https://github.com/AIFireForAll/dsh-enter-lock) | 3 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin that locks the web chat composer Enter-send. Toggle with a lock button or Ctrl+Alt+L to prevent accidental sends while typing or editing long prompts; unlock to send. IME-safe and per-session. |
| 16 | [dsh-external/awesome-dsh-plugins](https://github.com/dsh-external/awesome-dsh-plugins) | 3 | 2026-08-04 | 2026-08-19 | DSH 插件雷达与精选榜：多路自动发现 1600+ 候选，容器真实安装路径运行级实测（四档判定，883/1415 可用），精选 Top 50 · 11 类人工策展，全量索引 PLUGINS-ALL。15 分钟节奏自动更新。 |
| 17 | [dsh-external/dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) | 3 | 2026-08-08 | 2026-08-19 | DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录 |
| 18 | [fuyao606/dsh-plugin-manager](https://github.com/fuyao606/dsh-plugin-manager) | 3 | 2026-08-19 | 2026-08-19 | DeepSeek Harness Web GUI plugin manager |
| 19 | [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) | 3 | 2026-08-15 | 2026-08-19 | Configurable reasoning levels for hand-declared DSH llm-pi-ai models, with bilingual settings and subagent defaults. |
| 20 | [lamost423/dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare) | 3 | 2026-08-18 | 2026-08-19 | Trace Compare & Live Maze for DeepSeek Harness: visualize agent exploration (main path, detours, backtracks) from session logs or live sessions |
| 21 | [sixtysevenlf/dsh-opencode-go-monitor](https://github.com/sixtysevenlf/dsh-opencode-go-monitor) | 3 | 2026-08-16 | 2026-08-19 | DSH web UI 悬浮面板：OpenCode Go 月度/滚动/每周额度余额 + 用量监控（key 本地读取，各自显示自己的余额） |
| 22 | [StarryHui/dsh-custom-background](https://github.com/StarryHui/dsh-custom-background) | 3 | 2026-08-19 | 2026-08-19 | DSH 自定义 WebUI 背景插件 |
| 23 | [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | 3 | 2026-07-04 | 2026-08-19 | Video Frame Interpolation for Windows |
| 24 | [Aampidy/dsh-mcmp-1](https://github.com/Aampidy/dsh-mcmp-1) | 2 | 2026-08-18 | 2026-08-19 | 数学建模竞赛论文全自动撰写流水线 —— 8 大步骤、每轮 19 次迭代、质疑驱动的多轮优化,成果全部落盘,浮动面板实时显示进度百分比 |
| 25 | [askman-dev/dsh-canvas-design-harness](https://github.com/askman-dev/dsh-canvas-design-harness) | 2 | 2026-08-18 | 2026-08-19 | A DeepSeek Harness plugin and AI skill for Figma-style canvas design. Generates, previews, and iterates multi-frame UI drafts directly from chat, storing living design specifications as clean HTML files version-controlled in Git. |
| 26 | [brittanistrehlowll-oss/dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura) | 2 | 2026-08-14 | 2026-08-19 | 修罗小脑斧 — animated desktop pet for the DeepSeek Harness (DSH) web surface: v2 spritesheet animation, drag & drop, look-at-mouse, settings panel |
| 27 | [bufeibufei/dsh-openai-codex](https://github.com/bufeibufei/dsh-openai-codex) | 2 | 2026-08-19 | 2026-08-19 | ChatGPT OAuth model provider plugin for DeepSeek Harness |
| 28 | [byh819-png/dsh-client-ui-notify](https://github.com/byh819-png/dsh-client-ui-notify) | 2 | 2026-08-18 | 2026-08-19 | Ringtone notifications for DeepSeek Harness: alerts are triggered when the conversation ends and when authorization is required (either with a built-in tone, TTS voice, or custom audio).  **DeepSeek Harness 网页端铃声提醒插件：回答完成或需要授权时响铃提醒，支持内置铃声 / 文字转语音 / 自定义音频。 |
| 29 | [diamondfsd/deepseek-harness-desktop](https://github.com/diamondfsd/deepseek-harness-desktop) | 2 | 2026-08-14 | 2026-08-19 | Deepseek harness desktop package. all origin, not modify |
| 30 | [dsh-external/dsh-genui](https://github.com/dsh-external/dsh-genui) | 2 | 2026-08-08 | 2026-08-19 | DSH的生成式UI能力,不断更新中,欢迎issue&pr! |
| 31 | [dsh-external/dsh-STAGE](https://github.com/dsh-external/dsh-STAGE) | 2 | 2026-08-12 | 2026-08-19 | STAGE: Systematic Toolchain for Authoring, Guiding, and Editing (DSH Version) |
| 32 | [dsh-external/dsh-STAR](https://github.com/dsh-external/dsh-STAR) | 2 | 2026-08-12 | 2026-08-19 | STAR: Systematic Toolchain for AI Research (DSH Version) |
| 33 | [Eve-146T/DSH-CODEX-SUBSCRIPTION-POOL](https://github.com/Eve-146T/DSH-CODEX-SUBSCRIPTION-POOL) | 2 | 2026-08-16 | 2026-08-19 | dsh plugin for openai codex subscriptions that can pool multiple accounts.  |
| 34 | [Loping151/dsh-vibeos](https://github.com/Loping151/dsh-vibeos) | 2 | 2026-08-18 | 2026-08-19 | VibeOS inside DeepSeek Harness: the whole web UI becomes a virtual desktop whose app windows are HTML the model writes as you use them. Ported from benis-me/VibeOS. |
| 35 | [MichengAI/dsh-codex-desktop](https://github.com/MichengAI/dsh-codex-desktop) | 2 | 2026-08-14 | 2026-08-19 | Desktop for DeepSeek Harness 跨平台桌面版，无需提前安装任何环境 |
| 36 | [Mvyvn/dsh-skill-manager](https://github.com/Mvyvn/dsh-skill-manager) | 2 | 2026-08-18 | 2026-08-19 | 为 DSH 打造的技能管理器插件：扫描/一键导入技能、分组启停、默认组与全部禁用、会话级选择器、全中文 UI，AI 可经 skillmg_* 工具自主管理。A DSH skill-manager plugin: scan & one-click import skills, group enable/disable via atomic SKILL.md rename, default group & all-off mode, per-session picker, all-Chinese UI, and AI self-service via skillmg_* tools. |
| 37 | [SunQingyuan0/Kabutack](https://github.com/SunQingyuan0/Kabutack) | 2 | 2026-08-17 | 2026-08-19 | Kabutack 是一个面向 DSH 的插件，用于在一个界面里统一管理插件、Skill 和 MCP，并支持按“角色”一键动态装载、切换与恢复能力组合。 |
| 38 | [v587d/dsh-anysearch-refs](https://github.com/v587d/dsh-anysearch-refs) | 2 | 2026-08-19 | 2026-08-19 | A DSH sidebar plugin that shows AnySearch references as cards, with the search query, source snippets and highlighted keywords in the right sidebar.一个 DSH 侧边栏插件，把 AnySearch 的搜索结果以卡片形式展示在右侧侧边栏中，包括搜索词、来源摘要和关键词高亮。 |
| 39 | [wangxilhy23/dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin) | 2 | 2026-08-14 | 2026-08-19 | deepseek harness 皮肤插件。支持选择本地目录下的图片作为背景设置 |
| 40 | [whaojie797-design/Novera-AI-skills](https://github.com/whaojie797-design/Novera-AI-skills) | 2 | 2026-07-25 | 2026-08-19 | 8 款生产级 AI Agent Skill：持久记忆、代码安全评审、自然语言数据分析、调试复现、测试生成、IaC 安全扫描、性能诊断、文档生成 \| 8 production-ready agent skills (memory, code-review security, NL data analysis, agentic debugger, testforge, iac-guard, perf-doctor, docsmith). Pure Python stdlib, zero dependencies. |
| 41 | [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) | 2 | 2026-08-15 | 2026-08-19 | Voice input plugin for DeepSeek Harness (dsh): Supports voice input plugins with polishing and multiple backends. |
| 42 | [yuanc1204/dsh-multi-selection-comments](https://github.com/yuanc1204/dsh-multi-selection-comments) | 2 | 2026-08-19 | 2026-08-19 | Codex-style multiple independent selection comments for DeepSeek Harness (DSH). |
| 43 | [ZhangFengshun/dsh-remote-ssh](https://github.com/ZhangFengshun/dsh-remote-ssh) | 2 | 2026-08-18 | 2026-08-19 | DSH web plugin: VSCode Remote-SSH-like remote development (SSH, remote workspace, file explorer, integrated terminal) |
| 44 | [23swccp/dsh-undo-plugin](https://github.com/23swccp/dsh-undo-plugin) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness (dsh) plugin: conversation rollback via Shadow Git snapshots + archive task management (restore/permanent delete/delete-all) |
| 45 | [AiHeSa/ui-conversation-indexed](https://github.com/AiHeSa/ui-conversation-indexed) | 1 | 2026-08-19 | 2026-08-19 | dsh ui-conversation  indexed |
| 46 | [AIRIKE1/dsh-ide-panels](https://github.com/AIRIKE1/dsh-ide-panels) | 1 | 2026-08-18 | 2026-08-19 | DSH 客户端布局插件：仿 VS Code 的 IDE 外壳——中间标签工具区/右侧栏/底部面板，真实 PowerShell 终端 + 本地代码变更对比 + Git 源码管理 + SSH/WSL 远程 |
| 47 | [Awesome-AI-Pedia/dsh-plugin-desktop](https://github.com/Awesome-AI-Pedia/dsh-plugin-desktop) | 1 | 2026-08-18 | 2026-08-19 | deepseek harness desktop Tauri Rust DSH 桌面端 |
| 48 | [Badegg404/dsh-api-balance](https://github.com/Badegg404/dsh-api-balance) | 1 | 2026-08-18 | 2026-08-19 | DSH 插件：多平台 AI 账户余额悬浮监控 |
| 49 | [baihejiangnan/dsh-plugin-pack-web](https://github.com/baihejiangnan/dsh-plugin-pack-web) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 插件包 · Profile/Web 一键复刻 \| DSH Plugin Pack |
| 50 | [baihejiangnan/dsh-settings-organizer](https://github.com/baihejiangnan/dsh-settings-organizer) | 1 | 2026-08-18 | 2026-08-19 | Customizable hierarchical DSH settings navigation organizer |
| 51 | [bob334477/harness-safe-exhaust-probe-qs](https://github.com/bob334477/harness-safe-exhaust-probe-qs) | 1 | 2026-08-19 | 2026-08-19 | DSH plugin spec: observing soft-signal drift |
| 52 | [changer-changer/dsh-blind-arena](https://github.com/changer-changer/dsh-blind-arena) | 1 | 2026-08-19 | 2026-08-19 | A blind, fair, local DSH Web arena: same task, isolated worktrees, shared verification, judge before reveal. |
| 53 | [Chuiguo/dsh-gpt56-sol-kit](https://github.com/Chuiguo/dsh-gpt56-sol-kit) | 1 | 2026-08-18 | 2026-08-19 | Unofficial GPT-5.6-Sol workflow, recovery, verification, and budget plugin for DeepSeek Harness. |
| 54 | [ddggkkcc/dsh-stash](https://github.com/ddggkkcc/dsh-stash) | 1 | 2026-08-18 | 2026-08-19 | 随手抽屉 · Handy Drawer — DSH plugin: stash 'later' snippets during AI chats, then pick & ask in place. 低打扰、不打断心流。 |
| 55 | [drscrewdriver/dsh-thinking-levels](https://github.com/drscrewdriver/dsh-thinking-levels) | 1 | 2026-08-18 | 2026-08-19 | deepseek-harness dsh thinging levels 调整 reasoning强度调整 |
| 56 | [dsh-external/dsh-agent-teams](https://github.com/dsh-external/dsh-agent-teams) | 1 | 2026-08-13 | 2026-08-19 | AgentTeams plugin for DeepSeek Harness |
| 57 | [dsh-external/dsh-bash-encoding](https://github.com/dsh-external/dsh-bash-encoding) | 1 | 2026-08-08 | 2026-08-19 | DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 编码并正确解码，修复 WSL/Windows 下 bash 工具中文乱码。 |
| 58 | [dsh-external/dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) | 1 | 2026-08-12 | 2026-08-19 | 一个适用于dsh的上下文管理插件，包含上下文节省，注意力优化，压缩档案馆等功能 |
| 59 | [dsh-external/dsh-handoff](https://github.com/dsh-external/dsh-handoff) | 1 | 2026-08-14 | 2026-08-19 | DSH 插件：在 DeepSeek Harness 会话之间保存 / 加载开发交接文档（/handoff save \| load，含确定性脱敏与 Git 状态捕获） |
| 60 | [dsh-external/dsh-input-history](https://github.com/dsh-external/dsh-input-history) | 1 | 2026-08-08 | 2026-08-19 | DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动 |
| 61 | [dsh-external/dsh-minigames](https://github.com/dsh-external/dsh-minigames) | 1 | 2026-08-10 | 2026-08-19 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| 62 | [dsh-external/dsh-pet](https://github.com/dsh-external/dsh-pet) | 1 | 2026-08-09 | 2026-08-19 | 🐋 DSH 桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材 |
| 63 | [dsh-external/dsh-session-hub](https://github.com/dsh-external/dsh-session-hub) | 1 | 2026-08-07 | 2026-08-19 | 跨工具会话管理中心：在 DeepSeek Harness 中集中浏览、检索并无缝导入 OpenCode、Claude Code、Antigravity 与 QoderCN 的本地开发会话 |
| 64 | [dsh-external/dsh-turn-rewind](https://github.com/dsh-external/dsh-turn-rewind) | 1 | 2026-08-08 | 2026-08-19 | Turn Rewind for DSH — rewind conversation and workspace state, powered by a persistent Change Ledger |
| 65 | [dsh-external/dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) | 1 | 2026-08-05 | 2026-08-19 | DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动 |
| 66 | [dsh-external/dsh-vision-toolkit](https://github.com/dsh-external/dsh-vision-toolkit) | 1 | 2026-08-11 | 2026-08-19 | DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI. |
| 67 | [dsh-external/dsh-visualize](https://github.com/dsh-external/dsh-visualize) | 1 | 2026-08-08 | 2026-08-19 | DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随 |
| 68 | [dsh-external/dsh-webui-live-html](https://github.com/dsh-external/dsh-webui-live-html) | 1 | 2026-08-13 | 2026-08-19 | DeepSeek Harness Web UI 的实时 HTML 可视化卡片，支持流式更新和沙箱化交互。 |
| 69 | [ExploringBB/dsh-edit-regenerate](https://github.com/ExploringBB/dsh-edit-regenerate) | 1 | 2026-08-18 | 2026-08-19 | DSH plugin: edit a user message in conversation history and regenerate from the revised prompt in a forked session. |
| 70 | [G1en-114/dsh-codex-import](https://github.com/G1en-114/dsh-codex-import) | 1 | 2026-08-18 | 2026-08-19 | Import OpenAI Codex CLI conversations into DeepSeek Harness as sessions — /codex-import command + standalone CLI · 把 OpenAI Codex CLI 的对话历史导入 DeepSeek Harness 成为可浏览的会话 |
| 71 | [G1en-114/dsh-failbook](https://github.com/G1en-114/dsh-failbook) | 1 | 2026-08-18 | 2026-08-19 | 失败账本：DeepSeek Harness 工具失败自动记录·签名聚类·跨会话持久化 + 失败感知重试拦截，让 Agent 越用越少犯错，含 Web UI 面板 |
| 72 | [heyiwe1/dsh-multi-agent-preset](https://github.com/heyiwe1/dsh-multi-agent-preset) | 1 | 2026-08-15 | 2026-08-19 | 为 DeepSeek Harness 打造的多 agent 协同 preset：方向师/架构师/执行者三角色热插拔 + 可交互三模工具栏与一键启动。开箱即用、随包协议完备。Multi-agent collaboration preset for DeepSeek Harness: hot-swappable three roles — Director, Architect and Executor, alongside an interactive three-module toolbar supporting one-click startup. Ready-to-use, with fully integrated bundled protocols. |
| 73 | [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) | 1 | 2026-08-17 | 2026-08-19 | 为 DeepSeek Harness（DSH）打造的会话效率插件，时间轴导航、收藏文件夹、对话导出、提示词库、闪记。 |
| 74 | [hxy91819/dsh-auth](https://github.com/hxy91819/dsh-auth) | 1 | 2026-08-14 | 2026-08-19 | Caddy-fronted administrator authentication for DeepSeek Harness: Argon2id, revocable sessions, bilingual UI, zero upstream forks. |
| 75 | [iceBear662/dsh-vision-edge-doubao](https://github.com/iceBear662/dsh-vision-edge-doubao) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness（DSH）视觉插件：Edge+豆包网页版识图，零成本免 API Key。通用识图 + 数学建模图专项（几何/流程图/图表/表格/公式）+ 不确定项澄清闭环。Vision plugin for DeepSeek Harness: image understanding via Edge + Doubao Web, zero cost, no API key. General recognition + math-modeling diagrams (geometry/flowcharts/charts/tables/formulas) + clarify loop for uncertainties. |
| 76 | [jelly-000/dsh-3d-plugin-graph](https://github.com/jelly-000/dsh-3d-plugin-graph) | 1 | 2026-08-19 | 2026-08-19 | Live 3D visualization of the DSH plugin ecosystem - every node, edge and state is the real Cordis runtime |
| 77 | [jiuge2467/DSH-WhaleDeck](https://github.com/jiuge2467/DSH-WhaleDeck) | 1 | 2026-08-18 | 2026-08-19 | 🐬 专为小白与极客打造的 DeepSeek Harness 桌面全栈工作台：内置小鲸鱼姬桌宠、多源 MCP 调试沙箱、持久化终端与看板 \| The Geek & Cozy Desktop Client for DeepSeek Harness with Whale-chan Mascot, MCP Hub & Terminal. |
| 78 | [jsdvjx/dsh-strata](https://github.com/jsdvjx/dsh-strata) | 1 | 2026-08-18 | 2026-08-19 | Session strata for the DeepSeek Harness Web GUI: the transcript's scrollbar becomes a to-scale, colour-coded map of the whole run, with your own messages emphasised and clickable anchors. |
| 79 | [kriskite/dsh-network-proxy](https://github.com/kriskite/dsh-network-proxy) | 1 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin to manage network proxy (system / manual / direct) with a live settings UI. [dsh-plugin] |
| 80 | [KYinCode/dsh-hooks-plugin](https://github.com/KYinCode/dsh-hooks-plugin) | 1 | 2026-08-18 | 2026-08-19 | Claude Code 风格的 DSH hooks：通过 .dsh/hooks.json 在智能体/工具生命周期事件上运行 shell 命令 ｜ Claude Code style hooks for DeepSeek Harness: shell commands on agent/tool events via .dsh/hooks.json |
| 81 | [Leonx01/peak-valley-ticker](https://github.com/Leonx01/peak-valley-ticker) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek 峰谷计价行情条：国风峰谷印章 + 北京时间实时倒计时（DSH Web 插件 / dsh-plugin） |
| 82 | [Likenttt/garmin-connect-plugin-for-dsh](https://github.com/Likenttt/garmin-connect-plugin-for-dsh) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin for Garmin Connect — AI-powered fitness data access |
| 83 | [Max-Null/dsh-chat-rail](https://github.com/Max-Null/dsh-chat-rail) | 1 | 2026-08-18 | 2026-08-19 | 画卷式消息导航栏：右侧竖条 hover 展开画卷，scroll-spy 高亮居中跟随，与 better-sidebar 双面板动画同步避让 |
| 84 | [Max-Null/dsh-node-appearance](https://github.com/Max-Null/dsh-node-appearance) | 1 | 2026-08-18 | 2026-08-19 | 会话节点外观插件：按节点类型/工具名给 DeepSeek Harness Web GUI 会话节点着色（可配置配色）+ 思考过程显示开关 |
| 85 | [NexusClawHQ/nexusclaw-agent-governance](https://github.com/NexusClawHQ/nexusclaw-agent-governance) | 1 | 2026-08-15 | 2026-08-19 | The deny-by-default governance kernel for AI agents — permissions, L0–L4 guardrails, human approvals and an immutable audit chain as an Apache-2.0, framework-neutral library. Gate LangGraph / CrewAI / n8n / Dify or plain scripts in three lines. |
| 86 | [onlyqzq/dsh-riskproof](https://github.com/onlyqzq/dsh-riskproof) | 1 | 2026-07-13 | 2026-08-19 | Risk-aware approval layer for high-risk AI Agent tool calls |
| 87 | [oppnc/dsh-kernel-kimi](https://github.com/oppnc/dsh-kernel-kimi) | 1 | 2026-08-13 | 2026-08-19 | Kimi Code written in DSH form: the kimi-cli tool surface re-registered as native DeepSeek Harness tools. |
| 88 | [orrinzeng/chat-deepseek-vision](https://github.com/orrinzeng/chat-deepseek-vision) | 1 | 2026-08-18 | 2026-08-19 | A native DeepSeek Harness (DSH) Cordis plugin that analyzes images through the reverse-engineered chat.deepseek.com vision mode (model_type=vision) — free, no third-party vision API key required. DeepSeek Harness（DSH）原生 Cordis 插件：通过逆向 chat.deepseek.com 识图模式（model_type=vision）分析图片，免费、无需第三方视觉 API key。 |
| 89 | [orrinzeng/dsh-cursor-subscription](https://github.com/orrinzeng/dsh-cursor-subscription) | 1 | 2026-08-18 | 2026-08-19 | Log directly into your Cursor account within DeepSeek Harness and use your Cursor subscription — no API Key required, and no dependency on Cursor IDE or Cursor CLI. 在 DeepSeek Harness 中直接登录 Cursor 账户并使用 Cursor 订阅，不需要 API Key， 也不依赖 Cursor IDE 或 Cursor CLI。 |
| 90 | [pedesdestiny/dsh-notify](https://github.com/pedesdestiny/dsh-notify) | 1 | 2026-08-18 | 2026-08-19 | Browser desktop notifications for DeepSeek Harness (dsh) — get notified when a turn completes or an approval is needed |
| 91 | [Player-YN/dsh-agent-driver-writehere](https://github.com/Player-YN/dsh-agent-driver-writehere) | 1 | 2026-08-18 | 2026-08-19 | Hierarchical long-form writing for DeepSeek Harness — WriteHERE as an agent driver, not extra ReAct tools. |
| 92 | [qubyyang/awesome-ios-sim](https://github.com/qubyyang/awesome-ios-sim) | 1 | 2026-08-18 | 2026-08-19 | Simulator State as Code for iOS developers, CI, and AI agents—capture, diff, plan, and safely apply reproducible simulator profiles through a deterministic Swift CLI and MCP server. |
| 93 | [Rainpomelo/deepseek-harness-liquid-glass-theme](https://github.com/Rainpomelo/deepseek-harness-liquid-glass-theme) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness - 液态玻璃与动态壁纸主题 (WebGL 物理透镜、动态壁纸与多层毛玻璃) #dsh-plugin |
| 94 | [Retr67/dsh-plugin-manager](https://github.com/Retr67/dsh-plugin-manager) | 1 | 2026-08-18 | 2026-08-19 | 在设置里关闭与启用插件 |
| 95 | [rqwj/oh-my-ticket](https://github.com/rqwj/oh-my-ticket) | 1 | 2026-08-19 | 2026-08-19 | a ticket tool for agent |
| 96 | [shenkonghui/dsh-llm-acp](https://github.com/shenkonghui/dsh-llm-acp) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 的 ACP 客户端 LLM 适配器 + ACP 服务设置界面。通过外部 [Agent Client Protocol](https://agentclientprotocol.com) 服务器作为模型提供方接入 harness 的 LLM 层，并提供一个 Web 设置页面用于浏览 ACP 注册表和管理已配置的服务器。 |
| 97 | [shizhonggang/dsh-collab](https://github.com/shizhonggang/dsh-collab) | 1 | 2026-08-18 | 2026-08-19 | Multi-agent collaboration shared workspace for DSH (DSH × Claude Code × Kimi Code × DevEco Code): outbox/status/tasks/knowledge/artifacts protocol as a cross-platform DSH plugin + CLI. |
| 98 | [sixtysevenlf/dsh-sound-alerts](https://github.com/sixtysevenlf/dsh-sound-alerts) | 1 | 2026-08-16 | 2026-08-19 | DSH Web UI 声音提示插件：需要授权/提问与任务完成时播放提示音 (Web Audio, no assets) |
| 99 | [sky-unicorn/dsh-enhanced-plugins](https://github.com/sky-unicorn/dsh-enhanced-plugins) | 1 | 2026-08-19 | 2026-08-19 | dsh-enhanced-plugins 是一站式 DeepSeek Harness 增强插件包，集成 MCP 管理、插件市场、文件引用、模型能力配置及子智能体开关。 |
| 100 | [skymecode/dsh-bgm](https://github.com/skymecode/dsh-bgm) | 1 | 2026-08-18 | 2026-08-19 | DSH plugin — turn your AI conversation into a rhythm game. Start your bgm! |
| 101 | [stvlynn/dsh-dify-marketplace](https://github.com/stvlynn/dsh-dify-marketplace) | 1 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin: browse, search, and install Dify Marketplace plugins from Settings, with daemon-based .difypkg installs and Cordis child fibers. |
| 102 | [szx-a/ds](https://github.com/szx-a/ds) | 1 | 2026-08-14 | 2026-08-19 | LMA (Layered Memory Architecture) 是一个为 DeepSeek Harness 设计的地基插件（Foundation Plugin）。它定义了 “记忆体（Memory Body）” 这一抽象概念及其挂载/卸载协议。  它与其他记忆插件的本质区别在于：LMA 是一个容器和载体，让 dsh-memory-evolve、EchoCore 等“能力性插件”可以挂载其上，它本身也内置了一套可开关的基础记忆流程，作为可选能力。LMA结束记忆功能的“一锅乱炖”，实现跨会话的结构化记忆机制。(目前功能还在持续完善以及测试，对于其他插件的接口在构想完整后逐步推动) |
| 103 | [taikaikaikai-pixel/dsh-codebuddy-plugin](https://github.com/taikaikaikai-pixel/dsh-codebuddy-plugin) | 1 | 2026-08-18 | 2026-08-19 | CodeBuddy (copilot.tencent.com) provider bundle for DeepSeek Harness: 18 models, web_search/web_fetch backends, image_generate, local streaming bridge with OAuth & multi-Key rotation, Web UI settings card. Unofficial. |
| 104 | [tonytanglab/deepseek-harness-relay-mcp](https://github.com/tonytanglab/deepseek-harness-relay-mcp) | 1 | 2026-08-18 | 2026-08-19 | Delegate long-running work to DeepSeek Harness from any MCP agent—and monitor it to completion. |
| 105 | [tsdfy/dsh-skin-switcher](https://github.com/tsdfy/dsh-skin-switcher) | 1 | 2026-08-19 | 2026-08-19 | Skin switcher for DeepSeek Harness web UI: one-click theme switching with auto-discovery of community skins |
| 106 | [uson1x/dsh-plugin-llm-verifier](https://github.com/uson1x/dsh-plugin-llm-verifier) | 1 | 2026-08-18 | 2026-08-19 | LLM-as-a-Verifier for DeepSeek Harness: continuous reward signals via select / compare / track |
| 107 | [w210548735-art/dsh-session-collaboration](https://github.com/w210548735-art/dsh-session-collaboration) | 1 | 2026-08-18 | 2026-08-19 | Bidirectional cross-session collaboration bundle for DeepSeek Harness |
| 108 | [westhack/deepseek-harness-desktop](https://github.com/westhack/deepseek-harness-desktop) | 1 | 2026-08-16 | 2026-08-19 | deepseek harness desktop |
| 109 | [whaojie797-design/agent-handoff-kit](https://github.com/whaojie797-design/agent-handoff-kit) | 1 | 2026-07-30 | 2026-08-19 | Portable, recoverable, verifiable agent handoff protocol across Codex/Claude Code/Cursor/Gemini CLI. 跨 Agent 任务续航 Skill |
| 110 | [whaojie797-design/change-proof](https://github.com/whaojie797-design/change-proof) | 1 | 2026-07-30 | 2026-08-19 | Auditable change-proof package for AI code changes: what changed, why safe, how to verify, risks remain. AI 代码改动验收 Skill |
| 111 | [whaojie797-design/china-exec-report](https://github.com/whaojie797-design/china-exec-report) | 1 | 2026-07-30 | 2026-08-19 | Chinese decision-style business report Agent Skill - messy materials into traceable, decision-ready Chinese reports. 中文决策型商业报告 Skill |
| 112 | [whaojie797-design/cn-brand-voice](https://github.com/whaojie797-design/cn-brand-voice) | 1 | 2026-07-30 | 2026-08-19 | Responsible Chinese brand-voice & content-quality editor Skill: specific, factual, on-brand. 中文品牌表达校准 Skill |
| 113 | [whaojie797-design/cn-source-research](https://github.com/whaojie797-design/cn-source-research) | 1 | 2026-07-30 | 2026-08-19 | Verifiable Chinese research evidence pack: official & primary sources first, facts/inferences/unknowns separated. 中文可信研究 Skill |
| 114 | [whaojie797-design/codebase-brief](https://github.com/whaojie797-design/codebase-brief) | 1 | 2026-07-30 | 2026-08-19 | Generate a 10-minute readable engineering onboarding pack for any local repo. Deterministic static analysis; Python/TS-JS/Docker Compose. Agent Skill for Codex/Claude Code/Cursor. |
| 115 | [whaojie797-design/Novera-AI-pipeline](https://github.com/whaojie797-design/Novera-AI-pipeline) | 1 | 2026-07-28 | 2026-08-19 | four-agent-pipeline agent skill: Specifier -> Coder -> Refactorer -> Architect. Turn a vague requirement into gate-verified code with Gherkin acceptance specs, steel-cage quality gates (coverage, complexity, duplication, mutation score), and automatic failure routing. Zero-dependency Python scaffolder included. MIT. |
| 116 | [xuedai-mayi/dsh-wenshan](https://github.com/xuedai-mayi/dsh-wenshan) | 1 | 2026-08-18 | 2026-08-19 | 问山：DeepSeek Harness 地理野外实习知识图谱插件与非官方二次开发项目 |
| 117 | [y-wi/dsh-deepseek-web](https://github.com/y-wi/dsh-deepseek-web) | 1 | 2026-08-18 | 2026-08-19 | 将 DeepSeek 网页端接入 DeepSeek Harness 的非官方 Provider |
| 118 | [Y1X1n/dsh-prompt-optimizer](https://github.com/Y1X1n/dsh-prompt-optimizer) | 1 | 2026-08-18 | 2026-08-19 | 针对Deepseek Harness开发的提示词优化插件 |
| 119 | [yanzwzz/dsh-whale-girl-pet](https://github.com/yanzwzz/dsh-whale-girl-pet) | 1 | 2026-08-19 | 2026-08-19 | 🐋 DeepSeek 娘桌宠：住进 DeepSeek Harness Web 界面的蓝发鲸鱼女仆。工作链路、任务完成统计（用时/消耗/花费）、睡眠系统、时间感知、余额/天气/喂食按钮、完整设置面板。 |
| 120 | [Yourtsao/Offical-paper-Wrighting--Chinese--skill](https://github.com/Yourtsao/Offical-paper-Wrighting--Chinese--skill) | 1 | 2026-08-04 | 2026-08-19 | 国企公文写作 AI 技能包｜38类文种·76篇精选范例·AI秒变笔杆子 |
| 121 | [0x0101010/dsh-feishu](https://github.com/0x0101010/dsh-feishu) | 0 | 2026-08-19 | 2026-08-19 | Feishu (Lark) long-connection channel plugin for DeepSeek Harness (dsh) — zero npm dependencies |
| 122 | [1162514620/plugin-center](https://github.com/1162514620/plugin-center) | 0 | 2026-08-19 | 2026-08-19 | DSH 插件中心：统一的插件管理面板，支持启用/禁用、插件市场浏览、AI 解释、一键重启 |
| 123 | [173787247/dsh-wsl-env](https://github.com/173787247/dsh-wsl-env) | 0 | 2026-08-18 | 2026-08-19 | Inject WSL/Windows path and shell facts into the DeepSeek Harness system prompt. |
| 124 | [173787247/dsh-wsl-net](https://github.com/173787247/dsh-wsl-net) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness Tool: Diagnose WSL/Windows Proxy, Node 24 fetch, and DeepSeek/npm reachability. |
| 125 | [444136347/dsh-capability-discovery](https://github.com/444136347/dsh-capability-discovery) | 0 | 2026-08-17 | 2026-08-19 | DeepSeek Harness 多源能力发现、排序与风险检查｜Multi-source capability discovery, ranking, and risk inspection for plugins, skills, MCP servers, and agents. |
| 126 | [a792883583/dsh-message-gateway](https://github.com/a792883583/dsh-message-gateway) | 0 | 2026-08-19 | 2026-08-19 | Universal message-platform gateway for the DSH web GUI: WeCom AI bot / Telegram / Discord / QQ / Email bridges with per-chat sessions, streaming replies, and auto context compression |
| 127 | [AlexYin-Tongji/dsh-ui-enhancer](https://github.com/AlexYin-Tongji/dsh-ui-enhancer) | 0 | 2026-08-19 | 2026-08-19 | Unofficial DeepSeek Harness desktop UI plugin with file workspace, wallpapers, pets, and @file references |
| 128 | [ArmyWas/dsh-failure-lens](https://github.com/ArmyWas/dsh-failure-lens) | 0 | 2026-08-18 | 2026-08-19 | Deterministic DeepSeek Harness plugin that explains Windows sandbox spawn EPERM failures in context |
| 129 | [asd13006/dsh-multi-lang-ui](https://github.com/asd13006/dsh-multi-lang-ui) | 0 | 2026-08-16 | 2026-08-19 | Multi-language UI plugin for DeepSeek Harness: 繁體中文 / 日本語 / 한국어 / Français / Deutsch / Español language options with hand-polished translations and automatic fallbacks |
| 130 | [Bernardxu123/dsh-kimi-webbridge](https://github.com/Bernardxu123/dsh-kimi-webbridge) | 0 | 2026-08-18 | 2026-08-19 | Kimi WebBridge browser tools for DeepSeek Harness (dsh plugin): drive the user's real browser with 16 native kimi_webbridge_* tools |
| 131 | [bigstyle777/dsh-tool-arxiv](https://github.com/bigstyle777/dsh-tool-arxiv) | 0 | 2026-08-19 | 2026-08-19 | arXiv preprint search tool for DeepSeek Harness agents — abstracts only, token-bounded |
| 132 | [bigstyle777/dshp](https://github.com/bigstyle777/dshp) | 0 | 2026-08-18 | 2026-08-19 | 🛠️ Scaffold, verify & ship DeepSeek Harness plugins — Windows-safe paths, version-family pinning, boot-free verify. npx dshp-cli create my-plugin |
| 133 | [Bil812/dsh-balance-tasks](https://github.com/Bil812/dsh-balance-tasks) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 插件：余额与任务数换算——右下角悬浮卡显示余额、峰谷档位与倒计时，按历史平均消耗估算还能跑多少个任务。 |
| 134 | [biubiukam/dsh-runtime-nutrition-label](https://github.com/biubiukam/dsh-runtime-nutrition-label) | 0 | 2026-08-18 | 2026-08-19 | Runtime nutrition labels for DeepSeek Harness plugins and tools, with bounded evidence for tool, filesystem, network, and side-effect activity. |
| 135 | [BlackBearCC/dsh-pet-sprite](https://github.com/BlackBearCC/dsh-pet-sprite) | 0 | 2026-08-18 | 2026-08-19 | A playable pixel companion plugin for DeepSeek Harness (DSH): platform-jumps over chat messages, WASD controllable, with a full nurture system fed by your agent's real token usage. |
| 136 | [bobby-sheng/dshget-plugin](https://github.com/bobby-sheng/dshget-plugin) | 0 | 2026-08-19 | 2026-08-19 | Search, inspect, update, and install DeepSeek Harness plugins from DSH Get. |
| 137 | [BoltBlue121/kimi-for-dsh](https://github.com/BoltBlue121/kimi-for-dsh) | 0 | 2026-08-18 | 2026-08-19 | Fix third-party model (Kimi) routing in DeepSeek Harness: reclassify context-overflow/quota errors so compaction recovery actually triggers; inject Kimi's context-management beta for preserved thinking. |
| 138 | [bpc-oss/dsh-routed-subagent](https://github.com/bpc-oss/dsh-routed-subagent) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin: subagent_routed — run a one-shot subagent fully mounted on ANY agent preset from ANY session, with per-call model/provider override and a model-availability pre-check. |
| 139 | [caizhihaoczh/dsh-profile-multica](https://github.com/caizhihaoczh/dsh-profile-multica) | 0 | 2026-08-18 | 2026-08-19 | Multica JSONL bridge profile for DeepSeek Harness |
| 140 | [charlzyx/dshwork](https://github.com/charlzyx/dshwork) | 0 | 2026-08-18 | 2026-08-19 | dsh-plugin.work in DeepSeek Harness — Pick By Human, one-click install |
| 141 | [Che-Year/dsh-unidoc](https://github.com/Che-Year/dsh-unidoc) | 0 | 2026-08-18 | 2026-08-19 | DSH 插件 - 用于处理非结构化文档 (Unstructured Document Processing) |
| 142 | [chenmzh/dsh-codex-reasoning-router](https://github.com/chenmzh/dsh-codex-reasoning-router) | 0 | 2026-08-17 | 2026-08-19 | DeepSeek Harness preset: Luna executes, tool-less Sol advises |
| 143 | [chenxuhl/dsh-tool-jwt](https://github.com/chenxuhl/dsh-tool-jwt) | 0 | 2026-08-18 | 2026-08-19 | DSH JWT tool: HS256 decode (header/payload/expiry status), sign, and verify — zero runtime dependencies, RFC 7515-verified |
| 144 | [chuankris/dsh-video-factory](https://github.com/chuankris/dsh-video-factory) | 0 | 2026-08-19 | 2026-08-19 | 竖版科普视频全链路生产 skill：专家视角文案、百炼 TTS、信息图动效、Live2D 数字人、音效、抖音封面/文案 |
| 145 | [Clarklevis1995/dsh-plugin-mobile-gateway](https://github.com/Clarklevis1995/dsh-plugin-mobile-gateway) | 0 | 2026-08-18 | 2026-08-19 | 以websocket为通信方式的dsh网关插件，支持在同一网域内移动端的接入，实现移动端的dsh app |
| 146 | [Coco-king/dsh-monitor](https://github.com/Coco-king/dsh-monitor) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 会话计费 + 通用提供方用量查询插件：会话费用角标(峰谷两档精确计费、刷新后依然准确)、按模型提供方配置的用量面板(DeepSeek 官方余额 / OpenCode Go 5小时·周·月套餐额度 / 自定义 HTTP 用量查询),官方价格一键同步,双币种(USD/CNY)价格表。 |
| 147 | [coeasy/oh-my-dsh](https://github.com/coeasy/oh-my-dsh) | 0 | 2026-08-17 | 2026-08-19 | DeepSeek Harness 非官方封装客户端 |
| 148 | [cuddly-guacamole/dsh-auto-approval-llm](https://github.com/cuddly-guacamole/dsh-auto-approval-llm) | 0 | 2026-08-18 | 2026-08-19 | LLM-assisted auto approval + timeout fallback for the DeepSeek Harness Auto preset |
| 149 | [CuteSamurai24/dsh-md-memory](https://github.com/CuteSamurai24/dsh-md-memory) | 0 | 2026-08-18 | 2026-08-19 | Small file memory for DeepSeek Harness. The model writes markdown, the host injects it. |
| 150 | [CypherNaught-0x/DSH-Subagent-Model-Router](https://github.com/CypherNaught-0x/DSH-Subagent-Model-Router) | 0 | 2026-08-17 | 2026-08-19 | Deepseek Harness plugin that allows automatic delegation of subtasks to different models based on user preferences |
| 151 | [dakeshui123/dsh-pet-frieren](https://github.com/dakeshui123/dsh-pet-frieren) | 0 | 2026-08-18 | 2026-08-19 | A chibi Frieren desktop pet for the DeepSeek Harness Web GUI: install with dsh plugin --profile web add github:dakeshui123/dsh-pet-frieren |
| 152 | [Daseanle/dsh-mcp-orchestrator](https://github.com/Daseanle/dsh-mcp-orchestrator) | 0 | 2026-08-19 | 2026-08-19 | MCP orchestration layer for DeepSeek Harness — multi-server routing, health monitoring, fallback, and tool aggregation |
| 153 | [Daseanle/dsh-obsidian-bridge](https://github.com/Daseanle/dsh-obsidian-bridge) | 0 | 2026-08-18 | 2026-08-19 | Bidirectional knowledge bridge between DeepSeek Harness and Obsidian Vault — FTS5 search, draft writing, session linking |
| 154 | [Daseanle/dsh-teacher-preset](https://github.com/Daseanle/dsh-teacher-preset) | 0 | 2026-08-19 | 2026-08-19 | Teacher-focused vertical industry preset for DeepSeek Harness — lesson plans, rubrics, quizzes, and teaching materials generation |
| 155 | [DeBug-lzy/Restart-service-button](https://github.com/DeBug-lzy/Restart-service-button) | 0 | 2026-08-18 | 2026-08-19 | 一个DeepSeek Harness (DSH)Web 插件：在 DSH 网页界面的右上角添加一个一键重启服务按钮，并提供一个设置页用于调整按钮位置。 |
| 156 | [demacia1314/dsh-airdrop](https://github.com/demacia1314/dsh-airdrop) | 0 | 2026-08-17 | 2026-08-19 | Codex-app-style attachments for DeepSeek Harness: drop any file or folder anywhere in the window; bytes upload into the session workspace on the server, so remote servers and SSH tunnels work exactly like localhost. |
| 157 | [Diluka/dsh-side-session](https://github.com/Diluka/dsh-side-session) | 0 | 2026-08-18 | 2026-08-19 | DSH 侧边临时会话插件（Claude Code /btw 风格）：fork 主会话 + 近期上下文补全，主会话同款 UI，关闭即销毁 |
| 158 | [Dinosaur-MC/dsh-win-multi-bash](https://github.com/Dinosaur-MC/dsh-win-multi-bash) | 0 | 2026-08-18 | 2026-08-19 | Multi-bash plugin for dsh. Add Git Bash / WSL Bash support for Windows. |
| 159 | [disc0nct/dsh-memory-plugin](https://github.com/disc0nct/dsh-memory-plugin) | 0 | 2026-08-18 | 2026-08-19 | A persistent memory plugin for DeepSeek Harness (DSH) that enables agents to store and recall information across sessions. |
| 160 | [DM-Odyssey/dsh-session-manager](https://github.com/DM-Odyssey/dsh-session-manager) | 0 | 2026-08-18 | 2026-08-19 | dsh Session Manager（会话管理插件） |
| 161 | [dolcejust-spec/dsh-event-watch](https://github.com/dolcejust-spec/dsh-event-watch) | 0 | 2026-08-19 | 2026-08-19 | Condition-driven session wake for DeepSeek Harness: file and GitHub watches that fire prompts into target sessions (cold-wake included) |
| 162 | [DongDong1997/dsh-mcskin](https://github.com/DongDong1997/dsh-mcskin) | 0 | 2026-08-19 | 2026-08-19 | Minecraft-themed skin for the DeepSeek Harness Web GUI. 6 themes (3 styles x 2 colorSchemes), MC pixel-art icons, biome sidebar gradient, top grass strip, bottom-right creeper, and chest / grass-block / sword / pickaxe replacements for the main-page controls. |
| 163 | [dsh-external/chat-width](https://github.com/dsh-external/chat-width) | 0 | 2026-08-05 | 2026-08-19 | 自由调节正文和输入框的展示宽度 |
| 164 | [dsh-external/dsh-at-file](https://github.com/dsh-external/dsh-at-file) | 0 | 2026-08-13 | 2026-08-19 | dsh-at-file 是 DeepSeek Harness Web GUI 的一个 Codex 风格 @ 文件提及插件：在输入框输入 @ 即可实时智能搜索并选中工作区文件（或目录），发送时自动把文件内容交给模型、同时保留可点击打开的文件链接。 |
| 165 | [dsh-external/dsh-automation](https://github.com/dsh-external/dsh-automation) | 0 | 2026-08-13 | 2026-08-19 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并保留可审计历史。 / A DSH automation plugin for scheduled coding runs in fresh Agent sessions with auditable history. |
| 166 | [dsh-external/dsh-better-browser](https://github.com/dsh-external/dsh-better-browser) | 0 | 2026-08-11 | 2026-08-19 | DSH Better Browser：通过 Kimi WebBridge 驱动用户真实浏览器的 13 个 webbridge_* 工具，保留登录态，零核心改动。 |
| 167 | [dsh-external/dsh-book2skill](https://github.com/dsh-external/dsh-book2skill) | 0 | 2026-08-13 | 2026-08-19 | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel |
| 168 | [dsh-external/dsh-computer-use](https://github.com/dsh-external/dsh-computer-use) | 0 | 2026-08-11 | 2026-08-19 | Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input. |
| 169 | [dsh-external/dsh-custom-tool](https://github.com/dsh-external/dsh-custom-tool) | 0 | 2026-08-12 | 2026-08-19 | 在设置界面用 Monaco 编辑器编写自己的 JavaScript 工具，让模型在授权范围内自主扩展，沙箱隔离执行。 |
| 170 | [dsh-external/dsh-cyber-sec](https://github.com/dsh-external/dsh-cyber-sec) | 0 | 2026-08-10 | 2026-08-19 | dsh 生态授权渗透测试 profile bundle：容器化 bash 执行（可降级本机）+ engagement 级技术授权 guard + SQLite 证据域 + 技能双档（assessment 默认/redteam opt-in）+ 7 专项子代理 |
| 171 | [dsh-external/dsh-daily-fortune](https://github.com/dsh-external/dsh-daily-fortune) | 0 | 2026-08-13 | 2026-08-19 | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| 172 | [dsh-external/dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) | 0 | 2026-08-12 | 2026-08-19 | 一款模仿 excel 的 dsh 皮肤 |
| 173 | [dsh-external/dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) | 0 | 2026-08-12 | 2026-08-19 | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 |
| 174 | [dsh-external/dsh-deeptag](https://github.com/dsh-external/dsh-deeptag) | 0 | 2026-08-13 | 2026-08-19 | WIP organization collaboration layer for DeepSeek Harness: IM routing, scoped memory, and proactive follow-ups |
| 175 | [dsh-external/dsh-doctor](https://github.com/dsh-external/dsh-doctor) | 0 | 2026-08-13 | 2026-08-19 | DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式），cordis.patch.yml 安装：github:dsh-external/dsh-doctor#<commit>&path:/.dsh-plugin |
| 176 | [dsh-external/dsh-fun-ticker](https://github.com/dsh-external/dsh-fun-ticker) | 0 | 2026-08-12 | 2026-08-19 | DSH 行情跑马灯插件：可自选标的的加密/汇率/A股/指数/港美股跑马灯，免 key 数据源，宿主代理+缓存 |
| 177 | [dsh-external/dsh-fun-typewriter](https://github.com/dsh-external/dsh-fun-typewriter) | 0 | 2026-08-13 | 2026-08-19 | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| 178 | [dsh-external/dsh-fun-weather](https://github.com/dsh-external/dsh-fun-weather) | 0 | 2026-08-13 | 2026-08-19 | DSH weather tab and weather-following themes powered by Open-Meteo |
| 179 | [dsh-external/dsh-grok-tui](https://github.com/dsh-external/dsh-grok-tui) | 0 | 2026-08-06 | 2026-08-19 | Use dsh via grok-build's TUI. |
| 180 | [dsh-external/dsh-island](https://github.com/dsh-external/dsh-island) | 0 | 2026-08-06 | 2026-08-19 | DSH Dynamic Island — macOS notch panel for DSH；macOS 上的 codeisland 复刻 |
| 181 | [dsh-external/dsh-my-rsi](https://github.com/dsh-external/dsh-my-rsi) | 0 | 2026-08-04 | 2026-08-19 | Evidence-driven RSI experiments and Cordis plugins for DeepSeek Harness |
| 182 | [dsh-external/dsh-notification](https://github.com/dsh-external/dsh-notification) | 0 | 2026-08-13 | 2026-08-19 | DeepSeek Harness 的桌面通知插件，会话完成一轮任务时通过浏览器系统通知提醒你，并按结束状态与关键词规则精确控制哪些完成需要提醒。 |
| 183 | [dsh-external/dsh-nowledge-mem](https://github.com/dsh-external/dsh-nowledge-mem) | 0 | 2026-08-07 | 2026-08-19 | DSH plugin for Nowledge Mem™ |
| 184 | [dsh-external/dsh-open-in-vscode](https://github.com/dsh-external/dsh-open-in-vscode) | 0 | 2026-08-13 | 2026-08-19 | dsh-open-in-vscode —— 在 DeepSeek Harness Web 界面中，从侧边栏工作区的「…」菜单一键用 VS Code 打开对应目录的插件。 |
| 185 | [dsh-external/dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) | 0 | 2026-08-12 | 2026-08-19 | Generate OpenMAIC classrooms (interactive AI lessons) and return a playable classroom link |
| 186 | [dsh-external/dsh-pet-corner](https://github.com/dsh-external/dsh-pet-corner) | 0 | 2026-08-13 | 2026-08-19 | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| 187 | [dsh-external/dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) | 0 | 2026-08-05 | 2026-08-19 | Run pi coding-agent extensions (ExtensionAPI) inside DeepSeek Harness via a cordis plugin bridge |
| 188 | [dsh-external/dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) | 0 | 2026-08-08 | 2026-08-19 | DSH plan/execute 双模型路由插件：plan 模式用规划模型（推理型），批准后自动切执行模型（快速型）；settings.yaml 与 Web 设置页均可配置 |
| 189 | [dsh-external/dsh-plannotator](https://github.com/dsh-external/dsh-plannotator) | 0 | 2026-08-13 | 2026-08-19 | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. |
| 190 | [dsh-external/dsh-plugin-guide](https://github.com/dsh-external/dsh-plugin-guide) | 0 | 2026-08-10 | 2026-08-19 | DSH 插件开发指南：从零到精通 |
| 191 | [dsh-external/dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) | 0 | 2026-08-10 | 2026-08-19 | DSH (DeepSeek Harness) QQ2006 skin plugin: theme registration + global skin sheet + full QQ2006 asset set (learning use only). |
| 192 | [dsh-external/dsh-revive](https://github.com/dsh-external/dsh-revive) | 0 | 2026-08-13 | 2026-08-19 | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| 193 | [dsh-external/dsh-sentinel](https://github.com/dsh-external/dsh-sentinel) | 0 | 2026-08-13 | 2026-08-19 | [已迁移 Migrated] → https://github.com/fuhefei/dsh-sentinel — 本仓库停止维护 |
| 194 | [dsh-external/dsh-spotlight](https://github.com/dsh-external/dsh-spotlight) | 0 | 2026-08-13 | 2026-08-19 | Keyboard-first command palette for DeepSeek Harness Web |
| 195 | [dsh-external/dsh-tps](https://github.com/dsh-external/dsh-tps) | 0 | 2026-08-08 | 2026-08-19 | 只是一个 tps 插件 |
| 196 | [dsh-external/oh-my-dsh](https://github.com/dsh-external/oh-my-dsh) | 0 | 2026-08-07 | 2026-08-19 | Perpetual-motion swarm: DSH feature-gap plugins (24/24 gaps closed) |
| 197 | [dsh-plugin-evaluation/dsh-agent-observe](https://github.com/dsh-plugin-evaluation/dsh-agent-observe) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin for agent observability and security evaluation |
| 198 | [duhu2000/qcc-mcp-legal-oauth](https://github.com/duhu2000/qcc-mcp-legal-oauth) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查法律数据 MCP（法律产品：法规/案例） / One-click OAuth connect to Qichacha legal-data MCP (regulation & case) for DeepSeek Harness |
| 199 | [EIGHTfs/dsh-bili-publisher](https://github.com/EIGHTfs/dsh-bili-publisher) | 0 | 2026-08-18 | 2026-08-19 | DSH B站动态发布插件：扫码登录 + 发纯文本/图文动态 + 删动态（工具 + HTTP API） |
| 200 | [EIGHTfs/dsh-git-push](https://github.com/EIGHTfs/dsh-git-push) | 0 | 2026-08-18 | 2026-08-19 | DSH git 自动提交推送插件：扫描仓库 + 一键 commit/push（工具 + HTTP API） |
| 201 | [EIGHTfs/dsh-session-group](https://github.com/EIGHTfs/dsh-session-group) | 0 | 2026-08-18 | 2026-08-19 | DSH 会话管理插件（DeepSeek Harness） |
| 202 | [EIGHTfs/dsh-session-manager](https://github.com/EIGHTfs/dsh-session-manager) | 0 | 2026-08-18 | 2026-08-19 | DSH 会话功能增强插件（重命名/分支/归档） |
| 203 | [EIGHTfs/dsh-task-completion](https://github.com/EIGHTfs/dsh-task-completion) | 0 | 2026-08-18 | 2026-08-19 | DSH 任务完成约束自动化插件：AI 回复 ✅ 任务完成 → 按推送许可开关自动 commit+push |
| 204 | [EIGHTfs/dsh-test-sync-plugin](https://github.com/EIGHTfs/dsh-test-sync-plugin) | 0 | 2026-08-18 | 2026-08-19 | DSH 测试环境插件同步工具 |
| 205 | [faukwaa/dsh-gap-feed](https://github.com/faukwaa/dsh-gap-feed) | 0 | 2026-08-19 | 2026-08-19 | dsh plugin: during long agent thinking, posts a hot-news or reminder message directly into the conversation stream. |
| 206 | [feng78-boop/dsh-thirteen-bg](https://github.com/feng78-boop/dsh-thirteen-bg) | 0 | 2026-08-19 | 2026-08-19 | Animated and video live wallpaper for the DeepSeek Harness Web GUI - GIF, animated WebP/APNG images plus MP4/WebM video backgrounds, with auto format detection and a dim slider. |
| 207 | [fishOfOUC/dsh-self-analyze](https://github.com/fishOfOUC/dsh-self-analyze) | 0 | 2026-08-18 | 2026-08-19 | AI自我总结开销,无gui还没做 |
| 208 | [Frog755/dsh-client-auto-retry](https://github.com/Frog755/dsh-client-auto-retry) | 0 | 2026-08-18 | 2026-08-19 | DSH client plugin: auto-sends 「继续」 when a turn is interrupted/errored/overlong. No model/provider switching. Ships with a settings card. |
| 209 | [fuchao2pku/dsh-experts](https://github.com/fuchao2pku/dsh-experts) | 0 | 2026-08-18 | 2026-08-19 | DSH Expert Marketplace — browse & install community experts/expert groups from the Web UI Settings. Out-of-tree DSH plugin. |
| 210 | [giter00/dsh-headroom](https://github.com/giter00/dsh-headroom) | 0 | 2026-08-16 | 2026-08-19 | deepSeek harness上下文压缩工具 |
| 211 | [goecho/dsh-generation](https://github.com/goecho/dsh-generation) | 0 | 2026-08-19 | 2026-08-19 | Fork agent presets and run tasks on the next generation. Make, not a compiler. |
| 212 | [guchang/draw2code](https://github.com/guchang/draw2code) | 0 | 2026-08-18 | 2026-08-19 | Human-AI collaborative prototyping for DeepSeek Harness. |
| 213 | [guozede12593312/dsh-tdx](https://github.com/guozede12593312/dsh-tdx) | 0 | 2026-08-18 | 2026-08-19 | A股行情数据助手：K线/实时行情/技术指标/概念板块，数据源通达信(pytdx) |
| 214 | [Gyanano/wayfinder-dashboard](https://github.com/Gyanano/wayfinder-dashboard) | 0 | 2026-08-18 | 2026-08-19 | Wayfinder Dashboard — DeepSeek Harness 插件，把模糊想法画成一层层决定图 |
| 215 | [habushe/dsh-oneclick-launcher](https://github.com/habushe/dsh-oneclick-launcher) | 0 | 2026-08-19 | 2026-08-19 | Windows one-click launcher for DeepSeek Harness: standalone PWA window, no browser tab |
| 216 | [Hanice404/dsh-Session-State](https://github.com/Hanice404/dsh-Session-State) | 0 | 2026-08-18 | 2026-08-19 | 回答过程中折叠思考过程，直接输出回答内容。 |
| 217 | [haodongzhang022-hue/OpenLiulan](https://github.com/haodongzhang022-hue/OpenLiulan) | 0 | 2026-08-17 | 2026-08-19 | 开「浏览」之眼，赋「AI」以行动 —— 让 AI 真正看懂网页、精准操作、自愈排障的下一代浏览器控制框架。 |
| 218 | [Harzva/dsh-maclens](https://github.com/Harzva/dsh-maclens) | 0 | 2026-08-18 | 2026-08-19 | Bridge Apple on-device Vision framework (macOS) into DeepSeek Harness: OCR, image classification, face detection, document layout as local dsh tools. No network, no API key. |
| 219 | [he110Warudo/dsh-window](https://github.com/he110Warudo/dsh-window) | 0 | 2026-08-14 | 2026-08-19 | DeepSeek Harness 桌面 GUI 客户端:双击启动,自动拉起 dsh web 并在桌面窗口中打开 |
| 220 | [hinayoung23/dsh-cordis-plugin-kit](https://github.com/hinayoung23/dsh-cordis-plugin-kit) | 0 | 2026-08-18 | 2026-08-19 | Offline Cordis/DSH plugin standards, scaffolding, static checks, runtime debugging, and performance gates. |
| 221 | [hinayoung23/dsh-live-wallpaper](https://github.com/hinayoung23/dsh-live-wallpaper) | 0 | 2026-08-18 | 2026-08-19 | Dependency-free dynamic wallpapers for the DeepSeek Harness Web UI |
| 222 | [hongsantu/dsh-personalization](https://github.com/hongsantu/dsh-personalization) | 0 | 2026-08-19 | 2026-08-19 | dsh-personalization brings Codex-style custom instructions to DSH: edit your global personalization once in a Settings card, and every session auto-loads and follows it. |
| 223 | [hpyperry/dsh-ref-lib](https://github.com/hpyperry/dsh-ref-lib) | 0 | 2026-08-17 | 2026-08-19 | deepseek harness 参考库插件 |
| 224 | [huangdaxianer/dsh-dual-model-eval](https://github.com/huangdaxianer/dsh-dual-model-eval) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin for isolated side-by-side multi-model coding evaluation |
| 225 | [imchenmin/dsh-auth-lock](https://github.com/imchenmin/dsh-auth-lock) | 0 | 2026-08-17 | 2026-08-19 | 在将 DeepSeek Harness Web 开放给局域网、远程设备、反向代理或共享环境之前，为它增加密码保护。Add password protection to DeepSeek Harness Web before exposing it to your LAN, remote devices, reverse proxies, or shared environments. |
| 226 | [imkingjh999/dsh-float-window](https://github.com/imkingjh999/dsh-float-window) | 0 | 2026-08-18 | 2026-08-19 | Shared floating-window shell for DSH web plugins: float/dock/minimize, drag, edge-snap, corner resize, per-window auto-assigned boss keys, multi-window stacking. 共享浮窗外壳组件 |
| 227 | [jackControls/dsh-telegram-control](https://github.com/jackControls/dsh-telegram-control) | 0 | 2026-08-19 | 2026-08-19 | Telegram remote control for DeepSeek Harness (dsh): conversations with titles + workspace, on-demand resume of paused sessions, turn-tracked replies, inline-button approvals, reasoning summaries, bot command menu |
| 228 | [jacujay/dsh-model-balance](https://github.com/jacujay/dsh-model-balance) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin: auto-detect current model vendor and show balance/quota in the composer input row (DeepSeek/Moonshot/MiniMax/StepFun/Zhipu/SiliconFlow/OpenRouter + custom endpoints) |
| 229 | [jerryjiao/dsh-wewrite](https://github.com/jerryjiao/dsh-wewrite) | 0 | 2026-08-18 | 2026-08-19 | 微信公众号 AI 写作插件，跑在 DeepSeek Harness 里：一条命令装上 30+ 篇真实文章验证的写作管线（选题→写作→质量门禁→排版→配图→草稿箱），定时默认只进草稿箱，群发永远人工。MIT 开源。 |
| 230 | [Joe-rq/dsh-research-agent](https://github.com/Joe-rq/dsh-research-agent) | 0 | 2026-08-18 | 2026-08-19 | 通用调研智能体（DeepSeek Harness 插件 / Agent Preset）：7 个调研工具 + 调研工作法提示词，零内置数据，clone 即装 |
| 231 | [kaiwangleo/xiwen](https://github.com/kaiwangleo/xiwen) | 0 | 2026-08-17 | 2026-08-19 | 析问：自然语言问数工作台 |
| 232 | [kaixinbaba/dsh-model-preset](https://github.com/kaixinbaba/dsh-model-preset) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness model preset shortcuts with Settings customization |
| 233 | [kazma258/dsh-usage-card](https://github.com/kazma258/dsh-usage-card) | 0 | 2026-08-18 | 2026-08-19 | DSH web sidebar usage card: 7d/30d tokens, spend, and remaining DeepSeek balance |
| 234 | [kiligzzz/dsh-session-archive](https://github.com/kiligzzz/dsh-session-archive) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness web plugin: list, preview, restore or delete archived sessions from a sidebar panel. |
| 235 | [kongchengavg/dsh-pet-StatusLight](https://github.com/kongchengavg/dsh-pet-StatusLight) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 状态灯插件：角色表情状态灯 + 聊天框气泡，完成任务/出错/提问时自动弹出（dsh-plugin） |
| 236 | [KotDath/dsh-voice](https://github.com/KotDath/dsh-voice) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin for voice input |
| 237 | [lavapapa/dsh-composer-layout](https://github.com/lavapapa/dsh-composer-layout) | 0 | 2026-08-19 | 2026-08-19 | Optional DSH Web plugin for docking Composer at the bottom or in a right-side column |
| 238 | [ldystudy0913-jpg/dsh-pet](https://github.com/ldystudy0913-jpg/dsh-pet) | 0 | 2026-08-18 | 2026-08-19 | Desk pet for the DSH Web UI: an orange desk cat that reacts to the live agent session state. |
| 239 | [Leonx01/peak-valley-alarm](https://github.com/Leonx01/peak-valley-alarm) | 0 | 2026-08-18 | 2026-08-19 | 省钱闹钟：DeepSeek 峰谷计价低谷/高峰切换时，浏览器通知 + 国风提示音 + 页内 toast（DSH Web 插件 / dsh-plugin） |
| 240 | [lesliechowsh/dsh-weniger-theme](https://github.com/lesliechowsh/dsh-weniger-theme) | 0 | 2026-08-18 | 2026-08-19 | "Weniger" — less, but better: a Dieter Rams-inspired theme for the DeepSeek Harness Web GUI |
| 241 | [Leyan0365/dsh-retro-mac](https://github.com/Leyan0365/dsh-retro-mac) | 0 | 2026-08-19 | 2026-08-19 | Retro Macintosh — a classic Mac OS 8/9 Platinum skin for the DeepSeek Harness Web GUI. 复古麦金塔皮肤：铂金灰界面、Chicago 字体、条纹壁纸、浮雕控件。 |
| 242 | [linanatoly/dsh-chat-history-locator](https://github.com/linanatoly/dsh-chat-history-locator) | 0 | 2026-08-18 | 2026-08-19 | Chat History Locator: a dynamic Cordis plugin for DeepSeek Harness — persistent vertical marker rail on the chat area's left edge, click/hover/wheel to navigate your sent messages |
| 243 | [littleDogWang/dsh-agora](https://github.com/littleDogWang/dsh-agora) | 0 | 2026-08-19 | 2026-08-19 | DSH skill plugin: Agora skill (RTC, RTM, ConvoAI, CLI, Cloud Recording, tokens) synced verbatim from AgoraIO/skills |
| 244 | [liveqte/dsh-lan-proxy](https://github.com/liveqte/dsh-lan-proxy) | 0 | 2026-08-15 | 2026-08-19 | DSH 插件：把 dsh 的回环 Web UI 通过 0.0.0.0 反代暴露到局域网，开关/状态/日志嵌入设置页。官方 bundle 插件，安装：dsh plugin --profile web add github:liveqte/dsh-lan-proxy#main |
| 245 | [lsaa4/dsh-custom-ui](https://github.com/lsaa4/dsh-custom-ui) | 0 | 2026-08-18 | 2026-08-19 | 毛玻璃风格DSH主题，含壁纸、字体定制与网易云音乐 |
| 246 | [lueb386-lgtm/dsh-wallpaper](https://github.com/lueb386-lgtm/dsh-wallpaper) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 壁纸插件：为 Web 界面添加可自定义的壁纸背景——8 款渐变预设、自定义图片 URL、多来源随机壁纸（Bing 每日 / Picsum / LoremFlickr）、自动定时更换与设置持久化；随 DSH 启动自动加载，重启无需手动激活。 |
| 247 | [Lzh3070/dsh-file-review-tab](https://github.com/Lzh3070/dsh-file-review-tab) | 0 | 2026-08-19 | 2026-08-19 | dsh-better-sidebar 侧边栏 Tab 版文件改动审查：行级红绿 diff + 撤销，chat 行深链（移植自 left0ver/dsh-file-review）/ Review agent file changes as a dsh-better-sidebar sidebar tab — line-level diffs + undo, ported from left0ver/dsh-file-review |
| 248 | [marshfolx/dsh-provider-badge](https://github.com/marshfolx/dsh-provider-badge) | 0 | 2026-08-15 | 2026-08-19 | add a badge to show your seleted model provider |
| 249 | [martinbear1/dsh-realtime-voice](https://github.com/martinbear1/dsh-realtime-voice) | 0 | 2026-08-19 | 2026-08-19 | Realtime full-duplex voice Agent plugin for DeepSeek Harness WebUI and future WeChat Mini Program clients |
| 250 | [menantonio83-hue/tnt-house](https://github.com/menantonio83-hue/tnt-house) | 0 | 2026-06-13 | 2026-08-19 | TNT House - Safe New Tokens Platform |
| 251 | [mozhuanzuojing/dsh-agent-pill](https://github.com/mozhuanzuojing/dsh-agent-pill) | 0 | 2026-08-18 | 2026-08-19 | DSH web plugin: ZCode-style agent activity capsule + right summary drawer (goal / subagents / agent status / background jobs) with control verbs, Ctrl+Alt+P toggle, draggable, auto light/dark theme |
| 252 | [mozhuanzuojing/dsh-liangwengu](https://github.com/mozhuanzuojing/dsh-liangwengu) | 0 | 2026-08-19 | 2026-08-19 | 梁文谷提醒：DeepSeek API 定价高峰/空闲时段提醒（DSH/Cordis bundle）— 卡通弹窗+系统通知+提示音+30分钟倒计时 |
| 253 | [mrlfarano/dsh-tailscale-surface](https://github.com/mrlfarano/dsh-tailscale-surface) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin: Tailscale serve surface — canonical external URL, identity-gated privileged RPC relay, same-origin plugin UIs |
| 254 | [Mryuanliu/dsh-prompt-presets](https://github.com/Mryuanliu/dsh-prompt-presets) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness prompt presets help you quickly fill in the prompt in English with one click. |
| 255 | [nan1010082085/dsh-chat-sync](https://github.com/nan1010082085/dsh-chat-sync) | 0 | 2026-08-17 | 2026-08-19 | DSH plugin: browse & live-sync local Claude Code / Codex CLI / Cursor Agent conversations inside the dsh web GUI |
| 256 | [nan1010082085/dsh-mcp-sync](https://github.com/nan1010082085/dsh-mcp-sync) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin: sync MCP configs from Claude Code, Codex CLI, and Cursor Agent |
| 257 | [naodeng/dsh-qa](https://github.com/naodeng/dsh-qa) | 0 | 2026-08-19 | 2026-08-19 | dsh-qa · QA Workbench — A local software testing workbench plugin for DeepSeek Harness. Zero-dependency test project & iteration management with AI-assisted requirements, test cases, defects, milestones, reports, kanban and calendar. |
| 258 | [nekomona/dsh-plugin-zai-mcp](https://github.com/nekomona/dsh-plugin-zai-mcp) | 0 | 2026-08-18 | 2026-08-19 | 1-click Deepseek Harness plugin for Z.ai coding plan MCPs |
| 259 | [NeoMei/dsh-roundtable](https://github.com/NeoMei/dsh-roundtable) | 0 | 2026-08-18 | 2026-08-19 | Roundtable (圆桌讨论) multi-agent discussion plugin for DeepSeek Harness |
| 260 | [ngk3pori/dsh-zh-cn-ui](https://github.com/ngk3pori/dsh-zh-cn-ui) | 0 | 2026-08-18 | 2026-08-19 | DSH ??????????? |
| 261 | [nonmean/dsh-audio-input](https://github.com/nonmean/dsh-audio-input) | 0 | 2026-08-18 | 2026-08-19 | DSH web plugin: macOS native speech-to-text composer input (Apple Speech framework, remote helper) |
| 262 | [Odefined/dsh-mobile-webui](https://github.com/Odefined/dsh-mobile-webui) | 0 | 2026-08-18 | 2026-08-19 | Mobile-viewport fixes for the dsh web GUI (client plugin): overlay drawer sidebar, swipe gestures, dvh/safe-area composer, 44px touch targets. No build step, desktop untouched. |
| 263 | [okaditya84/dsh-agent-sentinel](https://github.com/okaditya84/dsh-agent-sentinel) | 0 | 2026-08-18 | 2026-08-19 | Security guard plugin for DeepSeek Harness: secret redaction, a shell command denylist, prompt-injection scanning, and syntax verification. |
| 264 | [onewilk/dsh-updater](https://github.com/onewilk/dsh-updater) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 更新检查插件：NEW 角标提醒 + 关于 Tab + GitHub 加速开关 |
| 265 | [oodzchen/deepseek-harness-gui](https://github.com/oodzchen/deepseek-harness-gui) | 0 | 2026-08-18 | 2026-08-19 | Open DeepSeek Harness UI in native window. 在系统原生窗口中打开 DeepSeek Harness 界面。 |
| 266 | [oppnc/dsh-kernel-codex](https://github.com/oppnc/dsh-kernel-codex) | 0 | 2026-08-13 | 2026-08-19 | Codex CLI written in DSH form: the OpenAI Codex tool surface re-registered as native DeepSeek Harness tools. |
| 267 | [oppnc/dsh-kernel-grok](https://github.com/oppnc/dsh-kernel-grok) | 0 | 2026-08-13 | 2026-08-19 | Grok Build written in DSH form: the grok-build tool surface re-registered as native DeepSeek Harness tools. |
| 268 | [oppnc/dsh-kernel-mesh](https://github.com/oppnc/dsh-kernel-mesh) | 0 | 2026-08-13 | 2026-08-19 | Harness-kernel mesh for DeepSeek Harness: kimi/grok/codex/minimax model routes (L1), distilled subagent recipes (L2) and kernel_run/kernel_status/kernel_switch tools. |
| 269 | [oppnc/dsh-kernel-minimax](https://github.com/oppnc/dsh-kernel-minimax) | 0 | 2026-08-13 | 2026-08-19 | Mini-Agent written in DSH form: the mini-agent tool surface re-registered as native DeepSeek Harness tools. |
| 270 | [Palaiologos1453/dsh-worktree-studio](https://github.com/Palaiologos1453/dsh-worktree-studio) | 0 | 2026-08-18 | 2026-08-19 | Human-operated Git worktree task board for DeepSeek Harness |
| 271 | [Perederey/dsh-mobile-ui](https://github.com/Perederey/dsh-mobile-ui) | 0 | 2026-08-18 | 2026-08-19 | Mobile-UI responsive layout plugin for DeepSeek Harness Web GUI: viewport detection, touch-friendly controls, bottom navigation bar, and adaptive conversation scaling |
| 272 | [pointer-a/dsh-server-login](https://github.com/pointer-a/dsh-server-login) | 0 | 2026-08-18 | 2026-08-19 | 面向公网的多租户 DSH 托管平台 —— 部署到一台公网服务器后，多个用户注册并经管理员审核，各自获得一套相互隔离的 deepseek-harness（DSH）环境，随时通过域名安全访问。 |
| 273 | [potterlee369-prog/dsh-feishu](https://github.com/potterlee369-prog/dsh-feishu) | 0 | 2026-08-19 | 2026-08-19 | 通过飞书机器人应用，使用飞书客户端，实现其他设备控制dsh |
| 274 | [potterlee369-prog/dsh-sound-notifier](https://github.com/potterlee369-prog/dsh-sound-notifier) | 0 | 2026-08-19 | 2026-08-19 | dsh任务完成或结束时，播放音效。 |
| 275 | [potterlee369-prog/dsh-vscode-opener](https://github.com/potterlee369-prog/dsh-vscode-opener) | 0 | 2026-08-19 | 2026-08-19 | 在deepseek harness聊天框加入VS code和文件管理器按钮 |
| 276 | [potterlee369-prog/dsh-workspace-pin](https://github.com/potterlee369-prog/dsh-workspace-pin) | 0 | 2026-08-19 | 2026-08-19 | 使dsh的工作区具有置顶区和根据当前工作目录自动置顶功能 |
| 277 | [pwangxo-sg/financial-market-analysis](https://github.com/pwangxo-sg/financial-market-analysis) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness 金融市场分析技能：A股/基金/QDII/黄金/亚太指数日报、指标追踪、决策追踪（可配置，零个人硬编码） |
| 278 | [QIANLING-0831/dsh-memory](https://github.com/QIANLING-0831/dsh-memory) | 0 | 2026-08-18 | 2026-08-19 | 可以有效减少token消耗！DeepSeek Harness memory plugins (dsh-plugin): CJK-aware session full-text search, tool-result dedup, hybrid vector+FTS5 memory search, cross-session core memory, near-lossless compaction locators. Real-harness verified, 47 tests. |
| 279 | [qianshe/dsh-assistant-optimization](https://github.com/qianshe/dsh-assistant-optimization) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin: fold mis-rendered thinking/reasoning content into collapsible blocks and render mermaid diagrams inline. |
| 280 | [Rainpomelo/deepseek-harness-mimo-memory](https://github.com/Rainpomelo/deepseek-harness-mimo-memory) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness - MiMoCode 工作区自动记忆插件 (0 工具调用预注入、后台自动蒸馏与跨会话持久化) #dsh-plugin |
| 281 | [Rainpomelo/deepseek-harness-plugin-market](https://github.com/Rainpomelo/deepseek-harness-plugin-market) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness - 插件中心与扩展市场 (可视化插件检索、双列自适应布局与状态管理) #dsh-plugin |
| 282 | [Raybbish/dsh-poker-plugin](https://github.com/Raybbish/dsh-poker-plugin) | 0 | 2026-08-18 | 2026-08-19 | Unofficial local multiplayer Texas Hold'em plugin for the DSH Web UI, with optional server-side AI players. |
| 283 | [raydez/deepseek-harness-pet-plugin](https://github.com/raydez/deepseek-harness-pet-plugin) | 0 | 2026-08-18 | 2026-08-19 | deepseek harness pet plugin（桌面宠物插件） |
| 284 | [Relethe/dsh-brief-session-title](https://github.com/Relethe/dsh-brief-session-title) | 0 | 2026-08-18 | 2026-08-19 | DSH session-title plugin: condenses a full sentence into a single word for easier recall. |
| 285 | [Ricketts-Guo/dsh-off-peak-message](https://github.com/Ricketts-Guo/dsh-off-peak-message) | 0 | 2026-08-19 | 2026-08-19 | DSH 谷时发送插件：开启后消息排队至谷时窗口自动发送，谷时价仅为峰时 50%，省一半 API 费用。原生外观输入条、快捷键、跨重启持久化。 |
| 286 | [ROOOOOYczx/DSH-peakseek](https://github.com/ROOOOOYczx/DSH-peakseek) | 0 | 2026-08-19 | 2026-08-19 | DeepSeek Harness plugin with Beijing peak and idle pricing hints plus a one-click Windows installer. |
| 287 | [runfali/dsh-web-search-custom](https://github.com/runfali/dsh-web-search-custom) | 0 | 2026-08-18 | 2026-08-19 | 让 DSH Web UI 使用任意 JSON 搜索 API 的通用搜索插件，默认对接自建 SearXNG，支持 API Key、GET/POST 与字段映射。 |
| 288 | [RyzeZhou/dsh-ui-mobile-layout](https://github.com/RyzeZhou/dsh-ui-mobile-layout) | 0 | 2026-08-18 | 2026-08-19 | deepseek-harness手机端页面适配插件 |
| 289 | [scubiry-glitch/dsh-plugin-feishu-chat](https://github.com/scubiry-glitch/dsh-plugin-feishu-chat) | 0 | 2026-08-19 | 2026-08-19 | DSH Web 飞书对话查看器客户端插件：会话头部 💬 按钮展示与飞书 bot 的私聊记录（数据来自 OpenClaw 独立网关 agent 会话文件，同源路由） |
| 290 | [sd3247930/SkyDome](https://github.com/sd3247930/SkyDome) | 0 | 2026-08-18 | 2026-08-19 | DSH 桌宠 - Flutter 跨平台桌面宠物。透明悬浮窗、状态驱动动画、MP3 音频反馈。 |
| 291 | [SensenMeng/dsh-plugin-8r](https://github.com/SensenMeng/dsh-plugin-8r) | 0 | 2026-08-19 | 2026-08-19 | 8R 规则本地判定插件：用户消息触发 8R 时 AI 回复自动带「诶！…」前缀（DSH Cordis bundle，模型不知情） |
| 292 | [shaoxia20240902/dsh-plugin-leaderboard](https://github.com/shaoxia20240902/dsh-plugin-leaderboard) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 插件排行榜：最热 / 最新 / 最火 Top 10，装进 web profile 后侧边栏直接可见。 |
| 293 | [ShenpingDD/wooden-fish-dsh](https://github.com/ShenpingDD/wooden-fish-dsh) | 0 | 2026-08-18 | 2026-08-19 | 🪵 电子木鱼桌宠 — A clickable wooden-fish desktop pet for the DeepSeek Harness web GUI. Click to knock; per-day counts with trends in settings. |
| 294 | [shenzhantu/dsh-subagent-model](https://github.com/shenzhantu/dsh-subagent-model) | 0 | 2026-08-18 | 2026-08-19 | 通过模型插件用来修改subagent所使用的模型和Agent预设/Use model plugins to modify the model used by the subagent and the agent presets. |
| 295 | [shenzhantu/dsh-usage-info](https://github.com/shenzhantu/dsh-usage-info) | 0 | 2026-08-16 | 2026-08-19 | DSH用量统计插件/DSH Usage Statistics Plugin |
| 296 | [Sivan757/dsh-agent-plugins-market](https://github.com/Sivan757/dsh-agent-plugins-market) | 0 | 2026-08-18 | 2026-08-19 | Agent Plugins Market for DeepSeek Harness: install, browse and inject agent-plugin suites — skills, MCP, hooks, commands. Supports Claude Code, Codex, Kimi, Cursor & agent-plugins.org v1.0.0. dsh-plugin |
| 297 | [sixtysevenlf/dsh-balance-window](https://github.com/sixtysevenlf/dsh-balance-window) | 0 | 2026-08-16 | 2026-08-19 | dsh 左下角余额悬浮窗：实时显示 DeepSeek 官方 API 余额与预计剩余 token，可拖动、自动刷新 |
| 298 | [sixtysevenlf/dsh-cost-guard](https://github.com/sixtysevenlf/dsh-cost-guard) | 0 | 2026-08-18 | 2026-08-19 | dsh-cost-guard — DeepSeek 成本守卫插件：会话成本核算（官方峰谷费率）、¥ 预算守卫、收敛引导、峰谷错峰队列；附对比测试报告 |
| 299 | [sixtysevenlf/dsh-routing-suite-opencode-go](https://github.com/sixtysevenlf/dsh-routing-suite-opencode-go) | 0 | 2026-08-16 | 2026-08-19 | dsh-routing-suite adapted for OpenCode Go API (opencode-go provider + DSH rc.6 compatibility) |
| 300 | [sluminositys/dsh-artifactloop](https://github.com/sluminositys/dsh-artifactloop) | 0 | 2026-08-18 | 2026-08-19 | A DeepSeek Harness review layer for polished, commentable Markdown artifacts and precise conversational feedback. |
| 301 | [sluminositys/dsh-nested-followups](https://github.com/sluminositys/dsh-nested-followups) | 0 | 2026-08-18 | 2026-08-19 | Ask a follow-up on any past answer in an isolated branch instead of appending it to your main conversation. A conversation-tree plugin for DeepSeek Harness. |
| 302 | [snow-The/dsh-session-handoff](https://github.com/snow-The/dsh-session-handoff) | 0 | 2026-08-18 | 2026-08-19 | Session handoff & context management for DeepSeek Harness: structured handoff docs (export/resume/status) + active context pruning (acp_* via official compaction API) + optional OpenViking/archify enhancers |
| 303 | [songofhawk/doco-dsh](https://github.com/songofhawk/doco-dsh) | 0 | 2026-08-18 | 2026-08-19 | Doco knowledge-base native plugin for DeepSeek Harness (dsh) — search, read, outline and save-draft with block-level addressing. |
| 304 | [sorry123maker/dsh-plugin-manager](https://github.com/sorry123maker/dsh-plugin-manager) | 0 | 2026-08-18 | 2026-08-19 | dsh三方插件管理，支持安装启用停用，支持热重载 |
| 305 | [SparkElf/dsh-plugins-plus](https://github.com/SparkElf/dsh-plugins-plus) | 0 | 2026-08-18 | 2026-08-19 | SparkElf-maintained independent plugins for DeepSeek Harness (dsh), installable on upstream dsh via profile composition bundles. |
| 306 | [staff-os/dsh-dify](https://github.com/staff-os/dsh-dify) | 0 | 2026-08-19 | 2026-08-19 | Dify agent and knowledge-base capability for the DeepSeek Harness |
| 307 | [statem-li/dsh-webui](https://github.com/statem-li/dsh-webui) | 0 | 2026-08-17 | 2026-08-19 | webui：右上角「对话/轨迹」图块视图切换 + 会话消息导航（消息弹窗、右侧消息横条） |
| 308 | [ther000/DshWebLauncher](https://github.com/ther000/DshWebLauncher) | 0 | 2026-08-18 | 2026-08-19 | Lightweight Windows tray launcher and process manager for DSH Web |
| 309 | [tkwkeven/dsh-lark-all](https://github.com/tkwkeven/dsh-lark-all) | 0 | 2026-08-18 | 2026-08-19 | Feishu/Lark all-in-one channel plugin for DeepSeek Harness (Cordis): WebSocket bridge, parallel task sessions with streaming cards, media in/out, cloud docs, restart recovery notification. |
| 310 | [trees163/dsh-customizations](https://github.com/trees163/dsh-customizations) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 全家桶定制——All-in-one customization suite for DeepSeek Harness: 3 agent presets (Classic / Pro Anchored / Flash Routed) with measured speedups, VS Code-style layout + 19 file API endpoints, 9-skin Beauty & Comfort UI layers, Reasonix skills & MCP bridge, official package patches. One-click install or npm. |
| 311 | [TrueNix/dsh-anthropic-oauth](https://github.com/TrueNix/dsh-anthropic-oauth) | 0 | 2026-08-18 | 2026-08-19 | Bridge Claude Code OAuth (Pro/Max/Team) into DeepSeek Harness — reuses ~/.claude/.credentials.json, auto-refreshes, no hardcoding |
| 312 | [txlznbzsdj-collab/dsh-session-delete](https://github.com/txlznbzsdj-collab/dsh-session-delete) | 0 | 2026-08-18 | 2026-08-19 | DSH plugin: add a "Delete" item to the sidebar session menu with a confirmation dialog. |
| 313 | [TYEclipse/dsh-geodesy](https://github.com/TYEclipse/dsh-geodesy) | 0 | 2026-08-18 | 2026-08-19 | Geodesic math toolbox for DeepSeek Harness (dsh): great-circle distance, bearings, destination points, and DMS coordinate parsing — zero runtime dependencies |
| 314 | [vuvanmai936-dot/dsh-ocr-bridge](https://github.com/vuvanmai936-dot/dsh-ocr-bridge) | 0 | 2026-08-19 | 2026-08-19 | OCR-level vision bridge for DeepSeek Harness: paste images, read them locally (macOS Vision / Tesseract), answer with your text-only DeepSeek model |
| 315 | [wangweber/dsh-my-todo](https://github.com/wangweber/dsh-my-todo) | 0 | 2026-08-19 | 2026-08-19 | Global cross-session todo list plugin for DeepSeek Harness: my_todo tool, /todo command, and an openable conversation view tab |
| 316 | [WaveSpeedAI/wavespeed-dsh-skill](https://github.com/WaveSpeedAI/wavespeed-dsh-skill) | 0 | 2026-08-19 | 2026-08-19 | WaveSpeed skill for DeepSeek Harness (dsh) — generate and edit AI image, video, audio & 3D via the wavespeed CLI |
| 317 | [weekitmo/dsh-notify](https://github.com/weekitmo/dsh-notify) | 0 | 2026-08-19 | 2026-08-19 | Completion and status notifications for DeepSeek Harness: desktop alerts, browser-tab unread counts, and sidebar session indicators, with per-event controls. |
| 318 | [weibaohui/dsh-plugin-scheduled-items](https://github.com/weibaohui/dsh-plugin-scheduled-items) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness plugin: cron-driven scheduled items with a full-page management UI. Each item carries a title, a prompt, and a croner expression; executions spawn a fresh agent session in a bound workspace (or the default cwd). |
| 319 | [weopenfire-git/dsh-plugin-pub-review](https://github.com/weopenfire-git/dsh-plugin-pub-review) | 0 | 2026-08-17 | 2026-08-19 | Publish-readiness review for DeepSeek Harness plugins: official docs freshness check (docs-check), 30+ static checks with a Ready/Not-Ready verdict (plugin-review), and publish preflight + command guidance (plugin-publish). |
| 320 | [wezoo-wb/dsh-desktop-min](https://github.com/wezoo-wb/dsh-desktop-min) | 0 | 2026-08-19 | 2026-08-19 | A minimal, product-neutral, extension-first desktop shell for DeepSeek Harness. |
| 321 | [whaojie797-design/career-fit-cn](https://github.com/whaojie797-design/career-fit-cn) | 0 | 2026-07-30 | 2026-08-19 | China-aware candidate<->role fit scoring for agents. (assess a profile against a role; five weighted dimensions + China-specific red flags like age_35 / 996 / non_compete.) |
| 322 | [whaojie797-design/diagram-drift](https://github.com/whaojie797-design/diagram-drift) | 0 | 2026-07-30 | 2026-08-19 | Detect drift between a Mermaid architecture diagram and the codebase it describes. (check parses graph/flowchart, scans definitions + import/call, flags missing-in-code / stale-edge / missing-in-diagram.) |
| 323 | [whaojie797-design/Novera-AI-agent](https://github.com/whaojie797-design/Novera-AI-agent) | 0 | 2026-07-28 | 2026-08-19 | 四智能体 AI 编程流水线提示词：需求规格官→编码官→重构官→架构守门官，钢铁笼子质量关卡（覆盖率/圈复杂度/变异得分）+ 失败路由表，让 AI 互相制衡、机器卡终局 \| Four-agent AI coding pipeline prompts (Specifier→Coder→Refactorer→Architect) with steel-cage quality gates, mutation testing and failure routing. |
| 324 | [whaojie797-design/skill-sentry](https://github.com/whaojie797-design/skill-sentry) | 0 | 2026-07-30 | 2026-08-19 | Static, local, explainable pre-install security audit for Agent Skills. Scans SKILL.md/scripts/config for destructive commands, hidden network calls, secret reads, obfuscation, prompt injection, persistence. CLI + 36 fixtures + GitHub Actions. |
| 325 | [whaojie797-design/source-watch](https://github.com/whaojie797-design/source-watch) | 0 | 2026-07-30 | 2026-08-19 | Local, deterministic change-monitoring for the web sources your agent depends on. (init/check a sources.yml; flags content/title/new/gone changes, HIGH on watch keywords.) |
| 326 | [whaojie797-design/video-reverse-engineering](https://github.com/whaojie797-design/video-reverse-engineering) | 0 | 2026-08-05 | 2026-08-19 | Agent Skill: reverse-engineer how a video was made. Extracts real keyframes/subtitles/audio, then produces a shot list, ready-to-paste AI image+video prompts, and a full replication guide (AI and live-action paths). |
| 327 | [whitefirer/dsh-niulai-pet](https://github.com/whitefirer/dsh-niulai-pet) | 0 | 2026-08-18 | 2026-08-19 | 牛来桌宠：agent 任务完成它就蹦出来喊「妈~~妈~~」——dsh 纯客户端桌宠插件（5 皮肤/签名动作/合成叫声） |
| 328 | [WilliamShi666/dsh-multiple-chat-panels](https://github.com/WilliamShi666/dsh-multiple-chat-panels) | 0 | 2026-08-18 | 2026-08-19 | DeepSeek Harness 多对话面板：并排查看并与多个 Agent 会话同时交互。 |
| 329 | [wqy8593521/dsh-model-pro](https://github.com/wqy8593521/dsh-model-pro) | 0 | 2026-08-18 | 2026-08-19 | Model Pro — DSH plugin for llm-pi-ai provider lifecycle management |
| 330 | [Wulabalabo/dsh-sidebar-Explorer-Plus](https://github.com/Wulabalabo/dsh-sidebar-Explorer-Plus) | 0 | 2026-08-18 | 2026-08-19 | 一个 dsh-better-sidebar 的消费插件：在侧边栏新增一个「文件」tab，内置一棵固定在工作区（cwd）内的文件树，提供真正的文件管理能力——上传、移动、删除、重命名、新建文件夹。它补充了 better-sidebar 自带 Explorer 缺失的「写」操作（Explorer 只读） |
| 331 | [wxxb789/dsh-j-space](https://github.com/wxxb789/dsh-j-space) | 0 | 2026-08-18 | 2026-08-19 | Automatic J-Space cognition suite for DeepSeek Harness (dsh): a zero-config dsh-plugin that gives every agent session structured working state, checkpoints, and verify-before-ship discipline. No fine-tune, no tool schema changes. |
| 332 | [wxxb789/dsh-raven-research](https://github.com/wxxb789/dsh-raven-research) | 0 | 2026-08-16 | 2026-08-19 | Source-grounded deep research, writing, and learning plugin for DeepSeek Harness (dsh): steerable checkpoints, mid-run steering, and citations verified against retrieved sources. |
| 333 | [Xiangbingyu/life-distiller](https://github.com/Xiangbingyu/life-distiller) | 0 | 2026-08-19 | 2026-08-19 | 这是一套用来“蒸馏人生”的 Skill 系统。  它会把人生经历整理成一条可回看、可补充、可迭代的本地记忆链，支持访谈构建、记忆重历、角色扮演、蒸馏复盘，以及后续的查看与分享。 |
| 334 | [xiaoyizhuang03-droid/dsh-lmstudio-router](https://github.com/xiaoyizhuang03-droid/dsh-lmstudio-router) | 0 | 2026-08-18 | 2026-08-19 | Local LM Studio model router for the dsh web GUI: routes token-expensive bulk tasks (text work, compaction, session titles) to a local LM Studio model over its OpenAI-compatible /v1 endpoint, auto-launches LM Studio, and fits requests into the model context window. Zero-dependency host plugin. |
| 335 | [xiaoyuink/dsh-image-vision](https://github.com/xiaoyuink/dsh-image-vision) | 0 | 2026-08-15 | 2026-08-19 | 图片识别插件 for DeepSeek Harness：自动判断当前模型识图能力，支持多供应商视觉模型管理与检测 |
| 336 | [xiayuhkust/dsh-pace-popups](https://github.com/xiayuhkust/dsh-pace-popups) | 0 | 2026-08-19 | 2026-08-19 | User-facing pace-control popups for the DeepSeek Harness (dsh): install once, get the set (grasp-probe, crosslens, 记一笔, and a floating hub); switch any off in the bar. |
| 337 | [xxxsirrrr/dsh-deepsleep](https://github.com/xxxsirrrr/dsh-deepsleep) | 0 | 2026-08-19 | 2026-08-19 | 在厕所也可以DSH：DeepSeek Harness 手机端布局插件 + 带密码保护的局域网访问代理 |
| 338 | [y2zyyr/dsh-model-retry-settings](https://github.com/y2zyyr/dsh-model-retry-settings) | 0 | 2026-08-17 | 2026-08-19 | Configure automatic model request retry limits directly from DSH Desktop settings. |
| 339 | [y2zyyr/dsh-restart-button](https://github.com/y2zyyr/dsh-restart-button) | 0 | 2026-08-18 | 2026-08-19 | @y2zyyr/dsh-restart-button — one-click Restart DSH button in Settings → General (DSH Desktop), using the official desktopRuntime.requestRestart() facade. |
| 340 | [Yancey2023/dsh-fold](https://github.com/Yancey2023/dsh-fold) | 0 | 2026-08-18 | 2026-08-19 | Adds clean, flexible folding to keep content compact, organized, and easy to navigate. |
| 341 | [YaoaY/dsh-conversation-accents](https://github.com/YaoaY/dsh-conversation-accents) | 0 | 2026-08-18 | 2026-08-19 | 为 DSH Web 的助手 Markdown、工具调用和 Think 内容提供可自定义的语义配色。Customizable semantic color accents for assistant Markdown, tool calls, and Think blocks in DSH Web. |
| 342 | [YaoaY/dsh-gpt-compat](https://github.com/YaoaY/dsh-gpt-compat) | 0 | 2026-08-18 | 2026-08-19 | DSH 的 GPT/Codex 沙箱提权参数兼容插件 \| Fail-closed GPT/Codex sandbox escalation compatibility for DeepSeek Harness |
| 343 | [young-tim/dsh-profile-lab](https://github.com/young-tim/dsh-profile-lab) | 0 | 2026-08-19 | 2026-08-19 | Reproducible DSH profile and patch experiment matrices with reports and policy gates |
| 344 | [YureWright/dsh-plgstore](https://github.com/YureWright/dsh-plgstore) | 0 | 2026-08-17 | 2026-08-19 | 一款dsh的插件市场，点击链接一键直达： |
| 345 | [ywleeo/dsh-balance](https://github.com/ywleeo/dsh-balance) | 0 | 2026-08-19 | 2026-08-19 | 在 dsh Web 对话底部（token 统计前）显示 DeepSeek 账户余额的精简插件 |
| 346 | [ywleeo/dsh-image-preview](https://github.com/ywleeo/dsh-image-preview) | 0 | 2026-08-18 | 2026-08-19 | 让 DeepSeek Harness (dsh) 对话正文直接显示本地图片的插件：本地路径自动内联为图片 + 可点击的本地地址行 |
| 347 | [ZanderKong/look-here](https://github.com/ZanderKong/look-here) | 0 | 2026-08-19 | 2026-08-19 | Look Here (喏这里): selection-first explanations, memories and annotations for DeepSeek Harness. |
| 348 | [ZelinW1/dsh-cosplay](https://github.com/ZelinW1/dsh-cosplay) | 0 | 2026-08-18 | 2026-08-19 | A cosplay plugin for DeepSeek Harness. |
| 349 | [Zenjibad/dsh-drop-any-file](https://github.com/Zenjibad/dsh-drop-any-file) | 0 | 2026-08-18 | 2026-08-19 | Accept any file type in the DeepSeek Harness (DSH) web chat drag-and-drop: non-image files are saved into the active session's workspace for the agent to read and use. |
| 350 | [Zenjibad/dsh-mcp-toggle](https://github.com/Zenjibad/dsh-mcp-toggle) | 0 | 2026-08-18 | 2026-08-19 | Enable/disable MCP servers directly from DSH Settings: a 'MCP Servers' page that stops/starts each @deepseek-ai/dsh-mcp-client connection live and persists the change across restarts. |
| 351 | [Zenjibad/dsh-plugin-toggle](https://github.com/Zenjibad/dsh-plugin-toggle) | 0 | 2026-08-18 | 2026-08-19 | Enable/disable DSH plugins directly from Settings → Plugins: an additive 'Enable/Disable' tab that stops/starts loader entries live and persists the change across restarts. |
| 352 | [zhifengjiang/dsh-hover-archive](https://github.com/zhifengjiang/dsh-hover-archive) | 0 | 2026-08-18 | 2026-08-19 | Codex-style hover archive for DeepSeek Harness Web: hovering a sidebar session row reveals an Archive icon at the far right; one click archives via the official workspaces.archiveSession API. |
| 353 | [zhinian558/dsh-translator](https://github.com/zhinian558/dsh-translator) | 0 | 2026-08-18 | 2026-08-19 | deepseek-harness页面嵌入的翻译工具 |
| 354 | [zhoupengjie/dsh-motion-manager](https://github.com/zhoupengjie/dsh-motion-manager) | 0 | 2026-08-18 | 2026-08-19 | Configurable anchored popover and settings animations for DeepSeek Harness |
| 355 | [zmh2000829/dsh-memory-graph](https://github.com/zmh2000829/dsh-memory-graph) | 0 | 2026-08-18 | 2026-08-19 | Local-first long-term memory and temporal knowledge graph plugin for DeepSeek Harness |
| 356 | [zoahdev/dsh-disk-audit](https://github.com/zoahdev/dsh-disk-audit) | 0 | 2026-08-18 | 2026-08-19 | Disk-usage audit for DeepSeek Harness (dsh) data directories: total size, per-directory breakdown, largest files, oversized-file warnings (session logs can hit hundreds of MB), cleanup suggestions. Zero runtime deps, read-only. CLI + agent-callable disk_audit tool. |
| 357 | [zoahdev/dsh-quality-score](https://github.com/zoahdev/dsh-quality-score) | 0 | 2026-08-18 | 2026-08-19 | Quality scorecard for DeepSeek Harness (dsh) plugins: 0-100, 6 components, fix suggestions, batch leaderboard. CLI + agent-callable quality_score tool. |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- Aampidy/mcmp-1
- anneheartrecord/dsh-desk-pet
- CypherNaught-0x/dsh-subagent-dynamic-model
- ddggkkcc/dsh-brainwave
- ExploringBB/dsh-plugin-edit-regenerate
- feiyang-dev/DeepSeek-Harness-Desktop
- FURO2170/dsh-ui-manager
- githublogin0101/dsh-api-balance
- Hanice404/dsh-Session-Manage
- HarcoChen/dsh-vsc-integration
- he110Warudo/dsh-desktop
- JinkaiLiu/dsh-autonomy
- Mappedinfo/dsh-tool-vision-read
- MichengAI/deepseek-harness-desktop
- MrMu666/dsh-LAN
- sky-unicorn/dsh-mcp-server-manager
- sky-unicorn/dsh-plugin-market
- sky-unicorn/dsh-referenced-file
- sky-unicorn/dsh-sub-agent
- sliverp/DeepSeek-harness-qqbot
- songoao25/dsh-contract-drafting-agent
- statem-li/webui
- taskschd1145/dsh-windows-notify
- WTStarMark/QAQ
- yyb16yyb-hub/dsh-deepseek-usage
- z953218350/dsh-archive-manager

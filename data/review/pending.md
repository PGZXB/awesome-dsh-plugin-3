# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-17**
- 快照日期 / Snapshot date: **2026-08-17 (UTC)**
- 待审核 / Pending: **9**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **4**

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
| 1 | [zbbsdsb/WAM-Framework](https://github.com/zbbsdsb/WAM-Framework) | 2 | 2026-08-06 | 2026-08-16 | Wait a minute |
| 2 | [wc772/dsh-minimal](https://github.com/wc772/dsh-minimal) | 1 | 2026-08-16 | 2026-08-17 | DSH最小化版本可用 |
| 3 | [30degreesnorthlatitude/-](https://github.com/30degreesnorthlatitude/-) | 0 | 2026-08-15 | 2026-08-16 | 对于命令的描述以及其他地方进行了一些汉化 |
| 4 | [AsILAnn/ds-whale-send-button](https://github.com/AsILAnn/ds-whale-send-button) | 0 | 2026-08-15 | 2026-08-16 | jinyu |
| 5 | [bmai-BH6BHG/dsk.net](https://github.com/bmai-BH6BHG/dsk.net) | 0 | 2026-08-16 | 2026-08-17 | 将 DeepSeek harness 装入 net 框架 |
| 6 | [existyay/Polaris](https://github.com/existyay/Polaris) | 0 | 2026-08-15 | 2026-08-16 | 北极星 |
| 7 | [HQ1995/deepseek-code](https://github.com/HQ1995/deepseek-code) | 0 | 2026-08-15 | 2026-08-17 | The grok-build terminal UI driving the DeepSeek Harness. |
| 8 | [KeepLost/harniverse](https://github.com/KeepLost/harniverse) | 0 | 2026-08-14 | 2026-08-17 | General Pluggable Coding Agent based on DeepSeek-Harness for my personal taste |
| 9 | [uckkk/dsh-visual-hierarchy](https://github.com/uckkk/dsh-visual-hierarchy) | 0 | 2026-08-16 | 2026-08-17 | 视觉层级构建参考 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- fly-fish76/dsh-width-control
- hellosky983/dsh-mc-launcher
- ovdoesw/dsh-xiangqi
- ztl34245881-commits/dsh-task-planner

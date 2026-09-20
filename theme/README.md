# 月地之间 · Moonlit Earth

左下月面与独处的宇航员，右上地球与城市灯火。壁纸为 2400 × 1200 的浅色纸感构图，采用居中焦点和 `ambient` 工作模式。

## 推荐：本地导入包

下载 [Moonlit-Earth-Direct-Import-v1.2.zip](../downloads/Moonlit-Earth-Direct-Import-v1.2.zip)，在 Dream Skin 菜单选择「导入主题 ZIP…」，然后在已保存主题里选择「月地之间 · Moonlit Earth」。无需解压；导入和应用是两个步骤。

源码见 [`local-import/`](local-import/)，只含：

- `background.jpg`：壁纸。
- `theme.json`：保留 `appearance: light`、`art.safeArea: center`、居中焦点和 `taskMode: ambient`。
- `theme.css`：40 字节最小 Safe CSS，仅设置根节点 `opacity: 1`；不改变当前首页与工作页的遮罩关系。

本地导入包不包含引擎代码或自动执行脚本。v1.2 的壁纸和配置沿用已有满意版本；这一轮历史修正主要发生在引擎兼容代码中。

## 网站配置 / Safe CSS 参考（实验性）

[`studio-reference/`](studio-reference/) **不是完整主题包**：

- `theme.json`：省略本地配置的 `art.safeArea: center`。此前网站/正式 manifest 校验不接受这个值；该差异不应回写到当前满意的本地包。
- `theme.css`：独立的 1260 字节可选样式，使用 `data-ds-part` 与注册变量，调整侧栏、页头、输入框和对话框。它没有被打入推荐的本地导入 ZIP。
- 壁纸可使用 `local-import/background.jpg`。网站上传、导出时须以实时校验器为准，并自行完成作者与许可信息。

这里特意没有沿用旧候选 manifest：旧 manifest 的哈希对应 40 字节 CSS，与这份独立样式不同。不要手动把这两者拼成声称已验证的正式包。

尚未宣称已投稿或审核通过，没有社区「一键换肤」链接。网页预览输入区域曾出现外层方角底板；该问题尚未在这份 Safe CSS 中完成修正。

## 引擎兼容源码（高级参考）

[`engine-compat/`](engine-compat/) 保存 Dream Skin 1.5.16 的本地修改快照，不是单独主题 CSS，也不是安装器。制作基线为 macOS Codex 26.831.21537，改动包括：

1. 置顶摘要、底部终端和右侧面板使用透明外壳；设置页使用同色系纸面。
2. 首页项目栏与输入框等宽，避免拼接处暴露直角台阶。
3. 用原生 `data-app-shell-focus-area="right-panel"` 标记匹配右侧面板，改善隐藏后重新打开的透明适配；保留旧按钮识别回退。

这些效果不能完整通过当时的 Safe CSS 部件接口携带，**不会随本地主题 ZIP 自动生效**。源码是完整文件快照，不是通用补丁；如需使用，应先备份对应版本、审查差异并合并。升级可能覆盖修改，不建议直接覆盖不同版本，也不提供一键覆盖脚本。

公开整理时，快照与制作者已安装的修改版引擎逐字节一致；这不代表在后续所有版本中都兼容。旧回归检查使用隔离模拟布局，未上传本机路径脚本或会话截图。

第三方引擎原始 MIT 许可见 [`engine-compat/LICENSE.txt`](engine-compat/LICENSE.txt)。本目录的壁纸、主题配置与可选样式没有因为该许可而自动获得 MIT 授权。

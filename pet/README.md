# 望归 · Lunar

「月地之间 · Moonlit Earth」配套的 Codex 原生小宇航员宠物：穿纸白宇航服，在工作时安静陪伴。

![望归角色设计](Lunar-design.png)

## 先预览

下载或克隆仓库后，用浏览器打开 [preview.html](preview.html)。页面使用随附的本地图集，无外部依赖，可切换九种动作、纸白 / 深空背景和显示尺寸，也可暂停播放。

[逐帧总览](contact-sheet.png) 和 [九组 GIF 预览](previews/) 可用于快速查看动作。仅打开预览页不会安装宠物，也不会改变 Codex 的当前选择。

## 安装到 Codex

使用 [Lunar-Codex-Pet-v1.zip](../downloads/Lunar-Codex-Pet-v1.zip)，或直接使用仓库内的 [package/wanggui-lunar](package/wanggui-lunar/) 目录。原生宠物包只有两个必需文件：

```text
wanggui-lunar/
├── pet.json
└── spritesheet.webp
```

1. 将整个 `wanggui-lunar` 目录复制到 Codex 的本地 `pets` 目录，默认位置为 `~/.codex/pets/wanggui-lunar/`。如果设置了自定义 `CODEX_HOME`，使用其下的 `pets/wanggui-lunar/`。解压 ZIP 时也应让两个文件直接位于该目录内，避免多套一层文件夹。
2. 如果目标位置已有同名宠物，请先备份原目录，再决定是否替换。
3. 在支持该功能的 Codex 版本中，打开「设置 → 宠物」，刷新后手动选择「望归 · Lunar」，再使用 `/pet` 或「显示宠物」显示角色。上述菜单名称基于制作时核对的版本，其他版本可能不同。

本仓库不会自动安装或替你切换当前宠物。它不是 DreamSkin 主题包，不要导入 DreamSkin Studio，也不需要替换 Codex 应用文件。要换回其他角色，在宠物设置中重新选择即可。

## v1 动画

图集为 RGBA WebP，尺寸 1536 × 1872，8 列 × 9 行，每格 192 × 208。共有 57 个有效帧，余下 15 格完全透明；此版本不包含 v2 的十六方向视线。

| 状态 | 帧数 | 动作 |
| --- | ---: | --- |
| `idle` | 6 | 微微呼吸、轻抬头 |
| `running-right` | 8 | 向右的小步月球步伐 |
| `running-left` | 8 | 向左的小步月球步伐 |
| `waving` | 4 | 抬手、挥手、放下 |
| `jumping` | 5 | 蓄力、轻跃、落地、站稳 |
| `failed` | 8 | 低头、肩部下沉 |
| `waiting` | 6 | 侧头、摊手等待回应 |
| `running` | 6 | 操作胸前控制台；是工作状态，不是跑步 |
| `review` | 6 | 查看控制台、抬头确认 |

## 验证范围

制作时对 Codex 26.915.31945 的加载格式做过只读核对。原制作记录中的图集严格校验与九组完整帧序列视觉检查通过；离线预览页的状态切换、缩放、定时、暂停和减少动态效果逻辑有自动化冒烟测试。

这些检查不等同于实机动画播放验证：图片查看器没有直接验证实时播放，也尚未观察 Codex 应用内的播放效果。详情见 [验证说明](../docs/pet-validation.md)。

## 制作资料

- [设计说明](../docs/pet-design.md)：角色、配色与动作安排。
- [完整制作提示词](../docs/pet-prompts.md)：保留原始生成提示词及实际制作差异。
- [源素材](source-strips/)：角色基准图和八组生成动画条带；左行动画由右行序列逐帧镜像派生，不另提供独立生成源图。
- [hatch-pet 校验脚本](../vendor/hatch-pet/scripts/validate_atlas.py) 与 [上游工具许可证](../vendor/hatch-pet/LICENSE.txt)。

视觉素材由 imagegen 生成，图集制作使用 OpenAI hatch-pet 工具。工具的许可证仅说明该工具的许可，不在此推定角色或其他素材的授权。

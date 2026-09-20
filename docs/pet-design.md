# 望归 · Lunar 设计说明

为「月地之间 · Moonlit Earth」纸质月球壁纸制作的 Codex 原生自定义宠物。

## 视觉方向

一个安静、好奇的小宇航员。米白色宇航服、温灰手套与靴子，细旧金色面罩边缘，深地球蓝面罩里保留一小片柔和的蓝色反光。简化的石墨线条与不透明水粉质感只存在于角色身体内部；角色之外完全透明。

造型采用大圆头盔、短四肢、紧凑背包和固定在胸前的小控制台。无标识、文字、旗帜、独立道具或背景。工作状态可以操作胸前控制台，平时保持安静的小幅动作。

壁纸只作为纸感、配色与气氛参考，不把月面或地球背景带进宠物图集。角色基准见 [Lunar-design.png](../pet/Lunar-design.png)，生成用基准图见 [base-pet.png](../pet/source-strips/base-pet.png)。

## 动画安排

| 状态 | 帧数 | 设计 |
| --- | ---: | --- |
| `idle` | 6 | 微微呼吸、轻抬头，保持安静 |
| `running-right` | 8 | 向右的小步月球步伐，左右腿交替 |
| `running-left` | 8 | 向左的小步月球步伐，左右腿交替 |
| `waving` | 4 | 抬手、轻轻挥手、放下 |
| `jumping` | 5 | 下蹲蓄力、轻跃、落下、站稳 |
| `failed` | 8 | 低头与肩部下沉，温和而不夸张 |
| `waiting` | 6 | 侧头、摊开一只手，等待回应 |
| `running` | 6 | 低头操作胸前控制台；这是工作状态而非跑步 |
| `review` | 6 | 查看控制台、抬头确认，动作克制 |

`idle` 的第一帧兼作减少动态效果时的静态形象。各动作维持角色比例和站立基准；跳跃则保留有意的垂直位移。

## 格式与制作方式

采用 v1 图集：1536 × 1872，8 列 × 9 行，每格 192 × 208；57 个有效帧和 15 个完全透明的空格。此版本只提供九组标准状态，不包含 v2 的额外十六方向视线。

角色基准与八组动画源条带由 imagegen 生成；`running-left` 由 `running-right` 的各帧水平镜像派生，保持原有帧序，不是把整条动画反转。因此九个状态不代表九组分别生成的源图。

原提示词模板包含纯 `#FF00FF` 色键背景描述；实际选定的源图已带真实透明通道，制作时保留其透明度。hatch-pet 工具用于帧提取、图集拼装、透明像素与帧布局校验以及预览输出。源图见 [source-strips](../pet/source-strips/)，完整提示词见 [pet-prompts.md](pet-prompts.md)。

上游工具为 [OpenAI hatch-pet](https://github.com/openai/skills/tree/main/skills/.curated/hatch-pet)。本仓库保留用于校验的 [validate_atlas.py](../vendor/hatch-pet/scripts/validate_atlas.py) 及其原始 [LICENSE.txt](../vendor/hatch-pet/LICENSE.txt)，并不声称包含全部上游制作脚本。

## 当前边界

格式和静态逐帧检查通过不等于已经在 Codex 内验证实时播放。兼容性依据制作时对 Codex 26.915.31945 的只读格式核对，不保证所有版本；具体检查与限制见 [验证说明](pet-validation.md)。

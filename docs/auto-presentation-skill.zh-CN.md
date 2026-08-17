# Auto Presentation Skill 发布说明

[English](auto-presentation-skill.en.md)

## v1.0.0

`auto-presentation` 将零散素材、链接、图片、录屏、字幕草稿和已授权音色转换为可审阅、可配音、可正式渲染的动画演示视频。

它不是简单的 PPT 生成器，而是一套带人工确认节点的完整演示生产流程。

## 主要能力

- 盘点用户提供的文档、图片、视频、链接与音色。
- 明确演示目标、听众、时长、视觉风格和交付方式。
- 对素材进行研究、筛选和内容提炼。
- 把内容整理为按时间分配的分幕大纲。
- 使用 Remotion 创建数据驱动的连续动画演示。
- 优先输出静帧、重点场景、分段视频或低清全片。
- 根据场景编号和时间戳进行定点修改。
- 对新音色先生成 TTS 试听，再按场景生成独立音频。
- 使用 ffprobe 获取真实音频时长，自动同步画面、字幕和切换点。
- 人工确认低清版和音色后，才开始正式高清渲染。
- 对最终视频执行黑帧、闪屏、字幕、音轨、切换点和文件完整性检查。

## 标准流程

1. 素材接收与立项。
2. 内容研究与提炼。
3. 分幕大纲与时间分配。
4. 旁白稿和屏幕短文案。
5. 视觉方向确认。
6. Remotion 动画工程制作。
7. 分段或低清版本审阅。
8. TTS 音色试听与确认。
9. 分场景配音和时间轴同步。
10. 正式渲染与质量验收。

## 安装

现已提供覆盖多 Agent 平台的完整安装说明：

- [中文安装指南](installation.zh-CN.md)
- [English installation guide](installation.en.md)

支持 Codex、Claude Code、Gemini CLI、GitHub Copilot，以及采用 `.agents/skills` 通用目录的兼容平台。指南同时说明个人安装、项目级安装、共享工作区、容器与隔离 Agent 环境。
## 使用

```text
使用 $auto-presentation，把这个文件夹中的素材和已授权音色制作成一份动画演示视频。
先整理大纲让我确认，再制作分段低清版；确认后接入 TTS 并正式渲染。
```

也可以只提供材料：

```text
$auto-presentation 按标准流程处理这些素材。
```

技能会自行盘点材料并提出必要假设，但会在大纲、视觉方向、低清成片和新音色试听阶段保留人工确认。

## TTS

- 支持 WAV、M4A、MP3 等 FFmpeg 可读取格式。
- 本地模型通常不需要 API Key。
- 云端模型通常需要对应服务商的 API Key。
- 每个场景独立生成音频，便于局部修改。
- 只允许使用用户本人提供或明确授权的音色。
- Windows 下应尊重用户指定的模型和缓存磁盘位置。

## 默认输出

- Remotion + React/TypeScript
- 1920×1080
- 30 FPS
- H.264 MP4
- 按场景拆分的 TTS 音频
- 基于真实音频时长的字幕和时间轴

## 文件结构

```text
skills/auto-presentation/
├── SKILL.md
├── agents/openai.yaml
└── references/
    ├── workflow.md
    ├── tts-and-timeline.md
    └── quality-gates.md
```

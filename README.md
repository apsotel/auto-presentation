# Auto Presentation

自动演讲演示项目：使用 Remotion 生成动画演示，使用本地 TTS（优先 Qwen3-TTS，兼容 GPT-SoVITS）生成声纹旁白，并根据音频时长自动同步镜头。

## 目标

输入资料、图片与 narration.json 后，生成：

- 1080p MP4 自动演讲视频
- 可复用的 Remotion 动画工程
- 分段旁白音频
- 后续可扩展为 HTML 交互演示

## 推荐环境

- Windows 10/11
- Node.js LTS
- Python 3.11
- FFmpeg
- VS Code
- NVIDIA GPU 时可安装 CUDA/PyTorch 以加速本地 TTS

## 快速开始

```powershell
./scripts/setup.ps1
npm run dev
```

渲染：

```powershell
./scripts/render.ps1
```

## 目录

- `config/`：演讲分镜和旁白配置
- `src/`：Remotion 动画代码
- `public/audio/`：TTS 生成音频
- `public/images/`：演示素材
- `tts/`：TTS 适配器与说明
- `scripts/`：Windows 自动化脚本
- `output/`：最终视频输出

## 第一阶段

先跑通文字 + 动画 + MP4；之后再接入声纹 TTS。
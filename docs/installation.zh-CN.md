# Auto Presentation 安装指南

[English](installation.en.md)

本指南说明如何在 Codex、Claude Code、Gemini CLI、GitHub Copilot 及其他兼容 Agent Skills 的平台中安装 `auto-presentation`。

## 1. 获取仓库

```powershell
git clone --depth 1 https://github.com/apsotel/auto-presentation.git
Set-Location auto-presentation
```

技能源目录是：

```text
skills/auto-presentation/
├── SKILL.md
├── agents/openai.yaml
└── references/
```

安装后必须保证 `SKILL.md` 直接位于目标技能目录内，避免出现 `auto-presentation/auto-presentation/SKILL.md` 的重复嵌套。

## 2. 推荐：共享给多个 Agent

支持 Agent Skills 通用目录的平台，可将技能安装到项目的 `.agents/skills/`。这种方式适合团队仓库、多个 Agent 共用同一工作区，以及隔离的工作树或容器。

Windows PowerShell：

```powershell
New-Item -ItemType Directory -Force -Path ".agents\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".agents\skills\"
```

macOS / Linux：

```bash
mkdir -p .agents/skills
cp -R skills/auto-presentation .agents/skills/
```

最终结构：

```text
your-project/
└── .agents/
    └── skills/
        └── auto-presentation/
            └── SKILL.md
```

GitHub 的 Agent Skills 文档将 `.agents/skills` 作为跨工具共享位置；具体客户端是否自动发现该目录，仍应以该客户端当前版本为准。

## 3. Codex

### 个人安装

Windows PowerShell：

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" "$env:USERPROFILE\.codex\skills\"
```

macOS / Linux：

```bash
mkdir -p ~/.codex/skills
cp -R skills/auto-presentation ~/.codex/skills/
```

安装位置：

```text
~/.codex/skills/auto-presentation/SKILL.md
```

重新打开或重新加载 Codex，然后测试：

```text
使用 $auto-presentation，先盘点这些素材并生成演讲大纲。
```

### 多 Agent / 隔离环境

若多个 Agent 共用同一用户目录，个人安装一次即可。若 Agent 分别运行在容器、远程主机或独立用户下，需要在每个环境安装，或把技能放入项目的共享技能目录并确保各 Agent 能读取。

## 4. Claude Code

Claude Code 支持以下位置：

- 个人：`~/.claude/skills/auto-presentation/SKILL.md`
- 项目：`.claude/skills/auto-presentation/SKILL.md`
- 插件：`<plugin>/skills/auto-presentation/SKILL.md`

项目级安装示例：

```powershell
New-Item -ItemType Directory -Force -Path ".claude\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".claude\skills\"
```

调用方式：

```text
/auto-presentation
```

也可以直接用自然语言要求 Claude 使用该技能。若会话启动时技能目录尚不存在，请重新启动会话或重新加载技能。详见 [Claude Code Skills 官方文档](https://code.claude.com/docs/en/slash-commands)。

使用 Claude Agent SDK 时，还需在 SDK 配置中启用对应的 `setting_sources`，详见 [Claude Agent SDK Skills](https://code.claude.com/docs/en/agent-sdk/skills)。

## 5. Gemini CLI

Gemini CLI 支持：

- 用户：`~/.gemini/skills/auto-presentation/` 或 `~/.agents/skills/auto-presentation/`
- 工作区：`.gemini/skills/auto-presentation/` 或 `.agents/skills/auto-presentation/`

克隆仓库后，可链接技能进行开发和更新：

```bash
gemini skills link ./skills/auto-presentation
```

进入 Gemini CLI 后验证：

```text
/skills reload
/skills list
```

首次在工作区加载技能时，请确认该目录已被信任。详见 [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/using-agent-skills.md)。

## 6. GitHub Copilot

GitHub Copilot 可从以下目录发现技能：

- 项目：`.github/skills/`、`.claude/skills/` 或 `.agents/skills/`
- 个人：`~/.copilot/skills/` 或 `~/.agents/skills/`

推荐项目级共享安装：

```powershell
New-Item -ItemType Directory -Force -Path ".agents\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".agents\skills\"
```

这可用于支持 Agent Skills 的 Copilot 编码 Agent、CLI、代码审查及 IDE Agent 模式。详见 [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)。

## 7. Cursor、Cline、OpenCode、Warp 等

如果平台支持 Agent Skills 开放格式，优先尝试：

```text
.agents/skills/auto-presentation/SKILL.md
```

若平台没有自动发现机制，可在任务提示中明确要求：

```text
请完整读取 skills/auto-presentation/SKILL.md，
并按其中引用的 workflow、TTS 时间轴和质量门禁文档执行。
先交付可人工确认的大纲与低清分段版本，确认后再正式渲染。
```

这是兼容回退方式，不等同于平台原生技能激活。

## 8. 验证安装

检查以下项目：

1. `SKILL.md` 位于正确目录，且没有重复嵌套。
2. Agent 能列出或识别 `auto-presentation`。
3. Agent 能读取 `references/` 下的三份流程文档。
4. Node.js、Remotion、FFmpeg/ffprobe 与所选 TTS 环境在执行机器上可用。
5. 多 Agent 场景中，每个 Agent 都能访问素材、项目文件和渲染依赖。
6. 模型权重、音色文件、API Key 和机密成片没有提交到 Git。

技能包只提供工作流程，不捆绑模型权重、TTS 服务凭据或 Remotion 项目依赖。

## 9. 更新

进入仓库后拉取最新版本，再把技能目录复制到相同目标位置：

```powershell
git pull
Copy-Item -Recurse -Force ".\skills\auto-presentation" "$env:USERPROFILE\.codex\skills\"
```

更新后重新加载对应 Agent。

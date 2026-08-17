# Auto Presentation Installation Guide

[中文](installation.zh-CN.md)

This guide explains how to install `auto-presentation` for Codex, Claude Code, Gemini CLI, GitHub Copilot, and other Agent Skills-compatible platforms.

## 1. Get the repository

```powershell
git clone --depth 1 https://github.com/apsotel/auto-presentation.git
Set-Location auto-presentation
```

The skill source is:

```text
skills/auto-presentation/
├── SKILL.md
├── agents/openai.yaml
└── references/
```

After installation, `SKILL.md` must sit directly inside the target skill folder. Avoid an accidental `auto-presentation/auto-presentation/SKILL.md` nesting level.

## 2. Recommended for multiple agents

For platforms that support the shared Agent Skills location, install the skill in the project's `.agents/skills/` directory. This works well for team repositories, multiple agents using the same workspace, and isolated worktrees or containers.

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path ".agents\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".agents\skills\"
```

macOS / Linux:

```bash
mkdir -p .agents/skills
cp -R skills/auto-presentation .agents/skills/
```

Expected layout:

```text
your-project/
└── .agents/
    └── skills/
        └── auto-presentation/
            └── SKILL.md
```

GitHub's Agent Skills documentation uses `.agents/skills` as a shared cross-tool location. Confirm automatic discovery against the current version of each client.

## 3. Codex

### Personal installation

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" "$env:USERPROFILE\.codex\skills\"
```

macOS / Linux:

```bash
mkdir -p ~/.codex/skills
cp -R skills/auto-presentation ~/.codex/skills/
```

Installed location:

```text
~/.codex/skills/auto-presentation/SKILL.md
```

Restart or reload Codex, then test:

```text
Use $auto-presentation to inventory these materials and draft the presentation outline.
```

### Multiple agents and isolated environments

If agents share the same user home, one personal installation is sufficient. If they run in separate containers, remote hosts, or user accounts, install the skill in each environment or use a project-level shared skills directory accessible to every agent.

## 4. Claude Code

Claude Code supports:

- Personal: `~/.claude/skills/auto-presentation/SKILL.md`
- Project: `.claude/skills/auto-presentation/SKILL.md`
- Plugin: `<plugin>/skills/auto-presentation/SKILL.md`

Project installation example:

```powershell
New-Item -ItemType Directory -Force -Path ".claude\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".claude\skills\"
```

Invoke it with:

```text
/auto-presentation
```

Natural-language invocation also works. If the top-level skills directory did not exist when the session started, restart the session or reload skills. See the [official Claude Code Skills documentation](https://code.claude.com/docs/en/slash-commands).

When using the Claude Agent SDK, enable the corresponding `setting_sources` in the SDK configuration. See [Claude Agent SDK Skills](https://code.claude.com/docs/en/agent-sdk/skills).

## 5. Gemini CLI

Gemini CLI supports:

- User: `~/.gemini/skills/auto-presentation/` or `~/.agents/skills/auto-presentation/`
- Workspace: `.gemini/skills/auto-presentation/` or `.agents/skills/auto-presentation/`

After cloning the repository, link the skill for development and updates:

```bash
gemini skills link ./skills/auto-presentation
```

Verify inside Gemini CLI:

```text
/skills reload
/skills list
```

Trust the workspace before loading a project skill. See [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/using-agent-skills.md).

## 6. GitHub Copilot

GitHub Copilot discovers skills from:

- Project: `.github/skills/`, `.claude/skills/`, or `.agents/skills/`
- Personal: `~/.copilot/skills/` or `~/.agents/skills/`

Recommended shared project installation:

```powershell
New-Item -ItemType Directory -Force -Path ".agents\skills" | Out-Null
Copy-Item -Recurse -Force ".\skills\auto-presentation" ".agents\skills\"
```

This location can serve Agent Skills-aware Copilot coding agents, CLI, code review, and IDE agent modes. See [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills).

## 7. Cursor, Cline, OpenCode, Warp, and others

If the platform supports the open Agent Skills format, try:

```text
.agents/skills/auto-presentation/SKILL.md
```

If the platform does not provide native skill discovery, use this task instruction:

```text
Read skills/auto-presentation/SKILL.md in full and follow its referenced
workflow, TTS timeline, and quality-gate documents. Deliver an outline and
low-resolution sectional draft for human approval before the production render.
```

This is a compatibility fallback, not native skill activation.

## 8. Verify the installation

Confirm that:

1. `SKILL.md` is in the correct folder without duplicate nesting.
2. The agent lists or recognizes `auto-presentation`.
3. The agent can read all three files in `references/`.
4. Node.js, Remotion, FFmpeg/ffprobe, and the selected TTS environment are available on the execution host.
5. Every agent can access the materials, project files, and rendering dependencies.
6. Model weights, voice references, API keys, and confidential renders are not committed to Git.

The skill defines the workflow; it does not bundle model weights, TTS credentials, or Remotion project dependencies.

## 9. Update

Pull the latest repository revision and copy the skill to the same destination:

```powershell
git pull
Copy-Item -Recurse -Force ".\skills\auto-presentation" "$env:USERPROFILE\.codex\skills\"
```

Reload the relevant agent after updating.

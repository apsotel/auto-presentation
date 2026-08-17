# Auto Presentation Skill Release Notes

[中文](auto-presentation-skill.zh-CN.md)

## v1.0.0

`auto-presentation` turns loose documents, links, images, screen recordings, subtitle drafts, and authorized voice references into reviewable, narrated, production-ready animated presentation videos.

It is not a simple slide generator. It defines an end-to-end editorial and audiovisual workflow with explicit human approval gates.

## Highlights

- Inventory documents, images, video, links, and voice references.
- Establish the objective, audience, duration, visual direction, and delivery format.
- Research, filter, and synthesize source material.
- Convert the story into a timed, scene-based outline.
- Build data-driven continuous animation with Remotion.
- Produce stills, selected scenes, sectional videos, or a low-resolution draft first.
- Apply feedback by scene number or timestamp.
- Audition new TTS voices before generating scene narration.
- Generate one audio file per scene for selective regeneration.
- Use ffprobe durations to synchronize visuals, captions, and transitions.
- Start production-quality rendering only after draft and voice approval.
- Verify black frames, flashes, captions, audio, boundaries, and file integrity.

## Standard workflow

1. Material intake and project initiation.
2. Research and content synthesis.
3. Timed scene outline.
4. Spoken narration and concise screen copy.
5. Visual direction approval.
6. Remotion production.
7. Sectional or low-resolution review.
8. TTS voice audition and approval.
9. Per-scene narration and timeline synchronization.
10. Production render and final QA.

## Installation

Copy `skills/auto-presentation` from this repository into the personal Codex skills directory:

```text
~/.codex/skills/auto-presentation
```

Windows example:

```powershell
Copy-Item -Recurse .\skills\auto-presentation $env:USERPROFILE\.codex\skills\auto-presentation
```

Reload Codex after installation.

## Usage

```text
Use $auto-presentation to turn this folder of materials and my authorized
voice references into an animated presentation. Let me approve the outline
and a low-resolution sectional draft before TTS synchronization and the
production render.
```

Or provide only the materials:

```text
Use $auto-presentation to process these materials with the standard workflow.
```

The skill inventories the inputs and makes safe assumptions, while retaining human approval for the outline, visual direction, review draft, and any new voice audition.

## TTS

- Accepts WAV, M4A, MP3, and other FFmpeg-readable formats.
- Local models usually do not need an API key.
- Hosted services generally require the provider's API key.
- Narration is generated per scene for targeted updates.
- Voice cloning is limited to user-supplied or explicitly authorized voices.
- On Windows, model and cache storage must honor the user's selected drive.

## Default output

- Remotion + React/TypeScript
- 1920×1080
- 30 FPS
- H.264 MP4
- Per-scene TTS audio
- Captions and timing derived from measured audio duration

## Package structure

```text
skills/auto-presentation/
├── SKILL.md
├── agents/openai.yaml
└── references/
    ├── workflow.md
    ├── tts-and-timeline.md
    └── quality-gates.md
```

---
name: auto-presentation
description: Build narrated, cinematic presentation videos from loose source materials, URLs, images, recordings, voice references, or an existing outline. Use when Codex should establish a presentation project, research and structure the content, turn it into a scene-based outline and Remotion production, generate or integrate segmented TTS narration, produce low-resolution or sectional review renders, incorporate feedback, and render a verified final MP4 after explicit human approval.
---

# Auto Presentation

Turn incomplete materials into a reviewable animated presentation and, after approval, a production-quality narrated MP4. Treat this as an editorial and audiovisual production workflow, not as a slide-generation shortcut.

## Load the process

Read [references/workflow.md](references/workflow.md) completely before starting every project. Read [references/tts-and-timeline.md](references/tts-and-timeline.md) when narration, voice references, subtitles, or timing are in scope. Read [references/quality-gates.md](references/quality-gates.md) before any review or final render.

## Operating rules

1. Inventory supplied materials before asking for a finished brief.
2. Establish audience, purpose, duration, output, visual direction, evidence needs, and privacy boundaries. State reasonable assumptions.
3. Separate source facts, editorial interpretation, and visual treatment. Verify unstable claims and preserve links.
4. Obtain approval for a scene-based outline before full animation unless direct production was explicitly authorized.
5. Keep one conclusion per scene. Write narration for speech and keep screen text short.
6. Use audio duration as the timing source once TTS exists. Generate one file per scene for selective regeneration.
7. Prefer deterministic demonstrations, diagrams, footage, and transitions over static cards that only swap text.
8. Render stills, selected scenes, or a low-resolution draft first. Do not start the final render until the user confirms the draft.
9. Rerender the smallest safe scope after feedback. Inspect replacement boundaries and reject black frames, broken GOPs, and audio discontinuities.
10. Finish with technical and visual QA. Deliver the path, duration, resolution, codecs, and known limitations.

## Default production contract

- Prefer Remotion + React/TypeScript for cinematic continuous animation.
- Default to 1920×1080, 30 FPS, H.264 MP4.
- Store narrative data in `config/narration.json`.
- Store images and video in `public/images/` and `public/video/`; store audio as `public/audio/scene-XXX.wav`.
- Keep TTS behind an adapter that accepts scene text and writes scene audio.
- Honor user-selected Windows model/cache drives. Never silently download large models to the system drive.
- Never expose API keys or commit private voice references, model weights, or confidential material.
- Clone only a voice supplied or authorized by the user.

## Human approval gates

Pause for approval after the editorial outline, representative visual treatment, low-resolution or sectional draft, and a new TTS voice audition. After draft and voice approval, proceed through synchronization, production rendering, and QA without reconfirming routine implementation details.

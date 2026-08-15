# AGENTS.md

## Project purpose
This repository builds automated narrated presentations with rich animation. The default stack is Remotion + React/TypeScript for visuals, FFmpeg/ffprobe for media inspection, and a pluggable local TTS layer. Qwen3-TTS is the preferred first TTS target; GPT-SoVITS is a fallback.

## User intent
- Not limited to PPTX.
- Prefer visually impressive continuous animation and cinematic transitions.
- Final outputs should primarily be MP4, with optional HTML/web presentation later.
- Narration should be generated from the user's authorized voice reference.
- Keep narration segmented so individual sections can be regenerated without redoing the full presentation.
- Design for Windows first.

## Repository conventions
- Source narrative/scene data lives in `config/narration.json`.
- Generated voice clips live in `public/audio/`.
- User images/video assets live in `public/images/` and `public/video/`.
- Remotion scenes live in `src/scenes/`.
- Reusable visual components live in `src/components/`.
- Final renders go to `output/` and are gitignored.
- Never commit private voice reference audio, model weights, API keys, or generated confidential client material.

## Development priorities
1. Keep the project runnable with `npm install` then `npm run dev`.
2. Keep rendering runnable with `npm run render`.
3. Treat audio duration as the timing source of truth once TTS audio exists.
4. Prefer deterministic, data-driven animations over hard-coded one-off timing.
5. Build reusable animation primitives: title reveals, counters, SVG path drawing, image parallax, section transitions, captions, diagram highlighting.
6. Prefer 1920x1080, 30 fps for the first version.

## TTS integration contract
TTS adapters should accept scene text and write one audio file per scene to `public/audio/scene-XXX.wav`.
They should not require the Remotion project to know the TTS implementation details.

## Safety/privacy
Voice cloning must only use a voice reference supplied or authorized by the user. Do not add code intended to impersonate third parties without authorization.

## Near-term tasks for Codex
- Verify current Remotion APIs before upgrading dependencies.
- Implement ffprobe-based audio duration discovery.
- Add a production-ready Qwen3-TTS adapter once the local environment is known.
- Add subtitle timing derived from narration text.
- Add 2-3 polished visual themes suitable for technical/architectural presentations.

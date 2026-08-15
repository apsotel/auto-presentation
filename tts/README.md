# TTS integration

The Remotion layer is intentionally decoupled from the TTS engine.

## Preferred order

1. Qwen3-TTS local adapter
2. GPT-SoVITS local adapter
3. Cloud TTS adapter if local GPU support is unavailable

## Contract

For each scene in `config/narration.json`, the TTS adapter should write:

`public/audio/<scene-id>.wav`

Example:

- `public/audio/scene-001.wav`
- `public/audio/scene-002.wav`

The next implementation step is to add an ffprobe-based sync script that reads real audio durations and rewrites/augments the scene timing before render.

Do not commit private voice reference recordings or model weights to Git.

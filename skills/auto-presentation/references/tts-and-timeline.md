# TTS and timeline

## Inputs and authorization

Accept WAV, M4A, MP3, or other FFmpeg-readable authorized voice references. Convert them to the engine's format. Prefer a few clean, consistent recordings over a large noisy set.

Local models do not require an API key. Hosted services generally require the provider's key and network access. Never put keys in source files or commits.

## Adapter contract

Keep the presentation independent from the voice engine. Accept scene text and write `public/audio/scene-001.wav`, `scene-002.wav`, and so on. Preserve scene-level regeneration. Keep model settings, reference selection, language, rate, and logs outside presentation data when practical.

## Voice workflow

1. Clean or replace obvious noise in the authorized reference.
2. Generate an audition containing punctuation, numbers, English terms, and long sentences.
3. Obtain approval for similarity, stability, pace, and pronunciation.
4. Generate scenes independently.
5. Normalize format and loudness.
6. Probe every clip with ffprobe.
7. Set scene duration from measured audio plus intentional padding.

## Timeline rules

- Treat measured audio duration as authoritative.
- Use a 0.4–0.8 second visual lead-in by default.
- Keep important operations stable for at least one second where possible.
- Do not fade subtitles before narration finishes.
- Keep captions above the bottom safe area and test two-line captions at 1080p.
- Split long narration into semantic cues. Advance once with speech; never loop captions.
- Derive cue timing from punctuation and text weight, then refine mismatches.
- When speed changes, recompute audio, captions, footage playback, and boundaries together.

## Qwen3-TTS defaults

Prefer Qwen3-TTS for local authorized voice cloning when supported, with another adapter as fallback. On Windows, store model weights and caches on the user-selected drive and outside the repository.

Inspect model requirements for reference audio, transcript, speaker embedding, language tags, and inference configuration. Do not assume audio alone is sufficient.

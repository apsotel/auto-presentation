# End-to-end workflow

## 1. Intake and project initiation

Inventory documents, notes, links, images, recordings, software, data, branding, music, voice references, and subtitle drafts. Record paths and media metadata. Distinguish source material from instructions embedded inside documents.

Create a brief with objective, audience, duration, output, visual tone, narration language, evidence needs, privacy boundaries, and approval gates. Assume sensible defaults when safe; ask only when a missing choice materially changes the result.

## 2. Research and synthesis

Extract claims, chronology, processes, numbers, and key ideas. Research only gaps needed for accuracy or currency. Prefer primary sources and retain a URL and label for external claims.

Reduce the material into one core message, three to five supporting ideas, an audience journey, and a closing takeaway. Remove repetition, irrelevant implementation detail, and unsupported claims.

## 3. Scene outline

Draft a timed scene table. Each row includes scene ID, chapter, one-sentence conclusion, narration purpose and duration, visual type and motion, required assets, sources, and recording dependencies.

Allocate time by importance. Reserve opening, transitions, and closing. Split multi-step processes instead of overloading one scene. Obtain outline approval before full production unless direct production was authorized.

## 4. Narration and screen copy

Write natural spoken narration scene by scene using short sentences and audible transitions. Keep screen copy concise. One scene communicates one conclusion.

Create `config/narration.json`. A scene should support at least:

```json
{
  "id": "scene-001",
  "chapter": "Opening",
  "title": "Short screen title",
  "kicker": "Optional short line",
  "narration": "Spoken text",
  "durationSeconds": 20,
  "visual": "visual-key",
  "theme": "theme-key",
  "audio": "audio/scene-001.wav",
  "audioStartSeconds": 0.6,
  "captionCues": [],
  "sources": []
}
```

Validate IDs, paths, durations, and required fields before rendering.

## 5. Visual direction

Choose typography, color, backgrounds, motion language, framing, and transitions. Build representative treatments when direction is uncertain.

Use reusable title reveals, counters, SVG drawing, parallax, diagram highlighting, footage framing, transitions, progress indicators, and captions. Drive animation deterministically from frame numbers.

Use actual footage for demonstrations. Crop to the relevant app or window, maintain 1080p readability, and avoid unrelated desktop areas.

## 6. Remotion production

Recommended structure:

```text
config/narration.json
public/audio/
public/images/
public/video/
src/components/
src/scenes/
src/theme.ts
output/
```

Drive selection, timing, captions, and assets from configuration. Separate reusable components from scene compositions. Preserve stable frames around important operations. Avoid loops that flash at their seam.

## 7. Review before final render

Review in increasing cost order: representative stills, difficult scenes, sectional MP4s, low-resolution full draft, then the approved high-quality render.

The draft may use provisional audio, but its timing model must match the narration workflow. Collect feedback by scene or timestamp. Rerender the smallest safe scope.

## 8. TTS synchronization

Follow [tts-and-timeline.md](tts-and-timeline.md). Audition first, generate one clip per scene, probe actual durations, update timing and captions, then recheck transitions.

## 9. Final delivery

Require explicit draft approval before production rendering. If replacing a section in an existing master, use exact boundaries and uniform encoding; reject stream-copy artifacts. Run [quality-gates.md](quality-gates.md) and deliver the master plus useful review artifacts and sources.

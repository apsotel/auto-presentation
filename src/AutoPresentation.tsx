import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import narration from '../config/narration.json';

const Scene: React.FC<{title: string; text: string; index: number}> = ({title, text, index}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, fps * 0.6], [50, 0], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: '#090d18', color: 'white', justifyContent: 'center', padding: 120}}>
      <div style={{opacity, transform: `translateY(${y}px)`}}>
        <div style={{fontSize: 28, opacity: 0.55, marginBottom: 20}}>SCENE {String(index + 1).padStart(2, '0')}</div>
        <div style={{fontSize: 86, fontWeight: 700, lineHeight: 1.1}}>{title}</div>
        <div style={{fontSize: 34, lineHeight: 1.6, marginTop: 42, maxWidth: 1400, opacity: 0.82}}>{text}</div>
      </div>
    </AbsoluteFill>
  );
};

export const AutoPresentation: React.FC = () => {
  let from = 0;
  return (
    <AbsoluteFill>
      {narration.scenes.map((scene, index) => {
        const durationInFrames = Math.ceil(scene.durationSeconds * narration.fps);
        const start = from;
        from += durationInFrames;
        return (
          <Sequence key={scene.id} from={start} durationInFrames={durationInFrames}>
            <Scene title={scene.title} text={scene.narration} index={index} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

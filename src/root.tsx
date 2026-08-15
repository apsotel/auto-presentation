import React from 'react';
import {Composition} from 'remotion';
import {AutoPresentation} from './AutoPresentation';
import narration from '../config/narration.json';

const totalFrames = Math.ceil(
  narration.scenes.reduce((sum, scene) => sum + scene.durationSeconds, 0) * narration.fps,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AutoPresentation"
      component={AutoPresentation}
      durationInFrames={totalFrames}
      fps={narration.fps}
      width={narration.width}
      height={narration.height}
    />
  );
};

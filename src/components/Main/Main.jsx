import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { VolumeSlider } from '../VolumeSlider/VolumeSlider';
import {
  PlayWrapper,
  // PlayPicture,
  PlayIcon,
  PauseIcon,
} from './PlayWrapper.styled';

import { MainComponent } from './Main.styled';

export const Main = ({ onPlay, playState, audioRef }) => {
  const isIOS = () => {
    let platform = navigator?.userAgent || navigator?.platform || 'unknown';

    return /iPhone|iPod|iPad/.test(platform);
  };

  const shouldRenderVolumeSlider = isIOS();

  //   console.log(audioRef);

  return (
    <MainComponent>
      <PlayWrapper onClick={onPlay}>
        {playState === true && <PauseIcon />}
        {playState === false && <PlayIcon />}
        <audio
          ref={audioRef}
          src="http://91.219.253.226:8000/borispilfm"
        ></audio>
      </PlayWrapper>
      {!shouldRenderVolumeSlider && (
        <VolumeSlider defaultValue={[50]} audioRef={audioRef} />
      )}
    </MainComponent>
  );
};

Main.propTypes = {
  onPlay: PropTypes.func.isRequired,
  playState: PropTypes.bool.isRequired,
  audioRef: PropTypes.object.isRequired,
};

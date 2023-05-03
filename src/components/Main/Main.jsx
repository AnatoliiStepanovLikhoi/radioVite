import PropTypes from 'prop-types';
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

  //   console.log(audioRef);

  return (
    <MainComponent>
      <PlayWrapper onClick={onPlay}>
        {playState === true && <PauseIcon />}
        {playState === false && <PlayIcon />}
        <audio ref={audioRef} src="https://radio.ukr.radio/ur2-mp3"></audio>
      </PlayWrapper>
      {isIOS && <VolumeSlider defaultValue={[50]} audioRef={audioRef} />}
    </MainComponent>
  );
};

Main.propTypes = {
  onPlay: PropTypes.func.isRequired,
  playState: PropTypes.bool.isRequired,
  audioRef: PropTypes.object.isRequired,
};

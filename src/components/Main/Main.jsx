import PropTypes from 'prop-types';
import { useState } from 'react';
import { VolumeSlider } from '../VolumeSlider/VolumeSlider';
import { PlayWrapper, PlayIcon, PauseIcon } from './PlayWrapper.styled';
import './animation.css';

import { MainComponent } from './Main.styled';

export const Main = ({ onPlay, playState, audioRef }) => {
  const [clicked, setClicked] = useState(false);

  const isIOS = () => {
    let platform = navigator?.userAgent || navigator?.platform || 'unknown';

    return /iPhone|iPod|iPad/.test(platform);
  };

  const shouldRenderVolumeSlider = isIOS();

  const handleClick = () => {
    onPlay();
    setClicked(!clicked);
  };

  return (
    <MainComponent>
      <PlayWrapper onClick={handleClick}>
        {playState ? (
          <PauseIcon className={clicked ? 'rotate-tl' : ''} />
        ) : (
          playState === false && (
            <PlayIcon className={clicked ? '' : 'rotate-tl'} />
          )
        )}
        <audio
          ref={audioRef}
          src="https://borispilfm.zorgvpn.top/borispilfm"
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

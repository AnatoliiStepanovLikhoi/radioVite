// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { VolumeSlider } from '../VolumeSlider/VolumeSlider';
import { PlayWrapper, PlayIcon } from './PlayWrapper.styled';
import './animation.css';

import { MainComponent } from './Main.styled';

export const Main = () => {
  // const [clicked, setClicked] = useState(false);

  // const isIOS = () => {
  //   const userAgent = window.navigator.userAgent;

  //   return /iPhone|iPod|iPad/.test(userAgent);
  // };

  // const shouldRenderVolumeSlider = isIOS();

  // const handleClick = () => {
  //   onPlay();
  //   setClicked(!clicked);
  // };

  return (
    <MainComponent>
      <PlayWrapper
        // onClick={handleClick}
        href="http://p.onlineradiobox.com/ua/borispil/player/?cs=ua.borispil&played=1"
        target="_blank"
        rel="norefer"
      >
        <PlayIcon />
        {/* {playState ? (
          <PauseIcon className={clicked ? 'rotate-tl' : ''} />
        ) : (
          playState === false && (
            <PlayIcon className={clicked ? '' : 'rotate-tl'} />
          )
        )} */}

        {/* <audio
          ref={audioRef}
          src="https://borispilfm.zorgvpn.top/borispilfm"
        ></audio> */}
        {/* <a src="http://p.onlineradiobox.com/ua/borispil/player/?cs=ua.borispil&played=1"></a> */}
      </PlayWrapper>
      {/* {!shouldRenderVolumeSlider && (
        <VolumeSlider defaultValue={[50]} audioRef={audioRef} />
      )} */}
    </MainComponent>
  );
};

// Main.propTypes = {
//   onPlay: PropTypes.func.isRequired,
//   playState: PropTypes.bool.isRequired,
//   audioRef: PropTypes.object.isRequired,
// };

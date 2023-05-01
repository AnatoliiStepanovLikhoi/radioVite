import { useState, useEffect, useRef } from 'react';
import Container from './components/constants/container';
// import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import { BackgroundImageRandom } from './components/BackgroundImage/BackgroundImage.styled';
import { VolumeSlider } from './components/VolumeSlider/VolumeSlider';
import {
  PlayWrapper,
  // PlayPicture,
  PlayIcon,
  PauseIcon,
} from './components/PlayWrapper/PlayWrapper.styled';

function App() {
  const [count, setCount] = useState(1);
  const [play, setPlay] = useState(false);

  const audioRef = useRef(null);

  console.log(audioRef);

  function onPlay() {
    if (play === false) {
      setPlay(true);
      audioRef.current.play();
    } else {
      setPlay(false);
      audioRef.current.pause();
    }
  }

  useEffect(() => {
    const random = Math.floor(Math.random() * 3) + 1;

    console.log(random);

    setCount(random);
  }, []);

  return (
    <>
      <BackgroundImageRandom randomNumber={count}>
        <Container>
          <PlayWrapper onClick={onPlay}>
            {play === true && <PauseIcon />}
            {play === false && <PlayIcon />}
            <audio ref={audioRef} src="https://radio.ukr.radio/ur2-mp3"></audio>
          </PlayWrapper>
          <VolumeSlider defaultValue={[50]} audioRef={audioRef} />
        </Container>
      </BackgroundImageRandom>
    </>
  );
}

export default App;

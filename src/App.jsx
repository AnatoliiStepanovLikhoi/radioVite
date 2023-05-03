import { useState, useEffect, useRef } from 'react';
import Container from './components/constants/container';
// import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import {
  BackgroundImageRandom,
  BlurBackground,
} from './components/BackgroundImage/BackgroundImage.styled';
import { VolumeSlider } from './components/VolumeSlider/VolumeSlider';
import { Navbar } from './components/Navbar/Navbar';
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
    console.log('play');
    if (play === false) {
      setPlay(true);
      audioRef.current.play();
    } else {
      setPlay(false);
      audioRef.current.pause();
    }
  }

  useEffect(() => {
    const random = Math.floor(Math.random() * 2) + 1;

    console.log(random);

    setCount(random);
  }, []);

  return (
    <>
      <BackgroundImageRandom randomNumber={count}>
        <BlurBackground>
          <Container>
            <Navbar />
            <div
              style={{
                gridArea: '2 / 1 / 3 / 2',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <PlayWrapper onClick={onPlay}>
                {play === true && <PauseIcon />}
                {play === false && <PlayIcon />}
                <audio
                  ref={audioRef}
                  src="https://radio.ukr.radio/ur2-mp3"
                ></audio>
              </PlayWrapper>
              <VolumeSlider defaultValue={[50]} audioRef={audioRef} />
            </div>

            <footer
              style={{
                marginTop: 'auto',
                textAlign: 'center',
                color: 'tomato',
                gridArea: '3 / 1 / 4 / 2',
              }}
            >
              <p>©2023 КП «ТелеРадіоСтудія «Бориспіль»»</p>
            </footer>
          </Container>
        </BlurBackground>
      </BackgroundImageRandom>
    </>
  );
}

export default App;

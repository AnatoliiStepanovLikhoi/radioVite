import { useState, useEffect, useRef } from 'react';
import Container from './components/constants/container';

import {
  BackgroundImageRandom,
  BlurBackground,
} from './components/BackgroundImage/BackgroundImage.styled';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(50);
  const [play, setPlay] = useState(false);

  const audioRef = useRef(null);

  // console.log(audioRef);

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
            <Main onPlay={onPlay} playState={play} audioRef={audioRef} />
            <Footer />
          </Container>
        </BlurBackground>
      </BackgroundImageRandom>
    </>
  );
}

export default App;

import {
  useState,
  useEffect,
  // useRef
} from 'react';
import Container from './components/constants/container';

import {
  BackgroundImageRandom,
  BlurBackground,
} from './components/BackgroundImage/BackgroundImage.styled';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  const [count, setCount] = useState(1);
  // const [play, setPlay] = useState(false);

  // const audioRef = useRef(null);

  // function onPlay() {
  //   if (play === false) {
  //     setPlay(true);
  //     audioRef.current.play();
  //   } else {
  //     setPlay(false);
  //     audioRef.current.pause();
  //   }
  // }

  useEffect(() => {
    const random = Math.floor(Math.random() * 2) + 1;

    setCount(random);
  }, []);

  return (
    <>
      <Helmet>
        <title>Boryspil FM 94.9</title>
        <meta
          name="опис"
          content="Новини, музика, розважальні програми на хвилі Бориспіль FM"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <BackgroundImageRandom randomNumber={count}>
        <BlurBackground>
          <Container>
            <Navbar />
            <Main
            // onPlay={onPlay} playState={play} audioRef={audioRef}
            />
            <Footer />
          </Container>
        </BlurBackground>
      </BackgroundImageRandom>
    </>
  );
}

export default App;

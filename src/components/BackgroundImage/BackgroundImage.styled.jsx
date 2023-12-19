import styled from 'styled-components';

// prettier-ignore
export const BackgroundImageRandom = styled.div`
  background-image: url('./bg-${props => props.randomNumber}.webp');


  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
  /* width: 100%; */

  /* min-height: 600px; */

  /* min-height: 100dvh; */
  /* position: relative; */

  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const BlurBackground = styled.div`
  backdrop-filter: blur(2px);
  /* height: 100vh; */
  /* width: 100%; */
`;

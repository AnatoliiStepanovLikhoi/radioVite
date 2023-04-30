import styled from 'styled-components';

// prettier-ignore
export const BackgroundImageRandom = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/assets/bg-${props => props.randomNumber}.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

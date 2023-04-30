import styled from 'styled-components';

// prettier-ignore
export const BackgroundImageRandom = styled.div`
  background-image: url('../../src/assets/bg-${props => props.randomNumber}.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

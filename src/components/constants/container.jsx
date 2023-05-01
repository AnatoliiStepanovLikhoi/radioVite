import styled from 'styled-components';
import { device, size } from './deviceType';

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobile} {
    width: ${size.mobile};
    padding: 0 16px;
  }
  @media ${device.tablet} {
    width: ${size.tablet};
    padding: 0 32px;
  }
  @media ${device.desktop} {
    width: ${size.desktop};
    padding: 0 100px;
  }
`;

export default Container;

import styled from 'styled-components';
import { device, size } from './deviceType';

const Container = styled.div`
  min-height: 100svh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px; */

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

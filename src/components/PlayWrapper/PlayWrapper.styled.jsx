import styled from 'styled-components';
import { GiOldMicrophone, GiPauseButton } from 'react-icons/gi';
import { device } from '../constants/deviceType';

export const PlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 300px; */
  height: 300px;
  margin-bottom: 50px;
  cursor: pointer;
  /* margin-top: 50%;пше  */

  @media ${device.tablet} {
    height: 400px;
  }
  @media ${device.desktop} {
    height: 500px;
  }
`;

export const PlayPicture = styled.picture`
  width: 100%;
`;

export const PlayIcon = styled(GiOldMicrophone)`
  width: 200px;
  height: 200px;
  fill: white;

  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.desktop} {
    width: 400px;
    height: 400px;
  }

  /* &:hover {
    fill: tomato;
  } */
`;

export const PauseIcon = styled(GiPauseButton)`
  width: 170px;
  height: 170px;
  fill: white;

  @media ${device.tablet} {
    width: 270px;
    height: 270px;
  }
  @media ${device.desktop} {
    width: 370px;
    height: 370px;
  }

  /* &:hover {
    fill: tomato;
  } */
`;

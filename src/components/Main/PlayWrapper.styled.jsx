import styled from 'styled-components';
// import { GiOldMicrophone, GiPauseButton } from 'react-icons/gi';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaPauseCircle } from 'react-icons/fa';

import { device } from '../constants/deviceType';

export const PlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: 200px;
  cursor: pointer;

  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.desktop} {
    height: 400px;
  }
`;

export const PlayPicture = styled.picture`
  width: 100%;
`;

export const PlayIcon = styled(BsPlayCircleFill)`
  width: 170px;
  height: 170px;
  fill: #f0f0f0;
  z-index: 5;

  @media ${device.tablet} {
    width: 270px;
    height: 270px;
  }
  @media ${device.desktop} {
    width: 370px;
    height: 370px;
  }

  &:hover {
    fill: #d9d9d9;
  }
`;

export const PauseIcon = styled(FaPauseCircle)`
  width: 180px;
  height: 180px;
  fill: #f0f0f0;
  z-index: 5;

  @media ${device.tablet} {
    width: 280px;
    height: 280px;
  }
  @media ${device.desktop} {
    width: 380px;
    height: 380px;
  }

  &:hover {
    fill: #d9d9d9;
  }
`;

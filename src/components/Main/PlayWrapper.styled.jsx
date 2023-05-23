import styled from 'styled-components';
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
  /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */

  @media ${device.tablet} {
    width: 270px;
    height: 270px;
  }
  @media ${device.desktop} {
    width: 370px;
    height: 370px;
  }

  &.flip-horizontal-bottom {
    -webkit-animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  }

  &:hover {
    fill: #d9d9d9;
    /* fill: tomato;
    border-radius: 50%;
    border: none;
    box-shadow: 16px 16px 77px #f5f5f5, -16px -16px 77px #ffffff; */
  }
`;

export const PauseIcon = styled(FaPauseCircle)`
  width: 180px;
  height: 180px;
  fill: #f0f0f0;
  z-index: 5;
  /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */

  @media ${device.tablet} {
    width: 280px;
    height: 280px;
  }
  @media ${device.desktop} {
    width: 380px;
    height: 380px;
  }

  &.flip-horizontal-bottom {
    -webkit-animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  }

  &:hover {
    fill: #d9d9d9;
  }
`;

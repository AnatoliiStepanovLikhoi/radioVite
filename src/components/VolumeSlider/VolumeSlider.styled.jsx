import styled from 'styled-components';
import { device } from '../constants/deviceType';
import { ImVolumeIncrease, ImVolumeDecrease } from 'react-icons/im';

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VolumeIconUP = styled(ImVolumeIncrease)`
  fill: white;
  width: 36px;
  height: 36px;

  @media ${device.tablet} {
    width: 48px;
    height: 48px;
  }
`;

export const VolumeIconDown = styled(ImVolumeDecrease)`
  fill: white;
  width: 36px;
  height: 36px;

  @media ${device.tablet} {
    width: 48px;
    height: 48px;
  }
`;

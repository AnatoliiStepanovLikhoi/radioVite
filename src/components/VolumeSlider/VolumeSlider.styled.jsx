import styled from 'styled-components';

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
  /* padding: 4px 16px; */
`;

export const VolumeIconDown = styled(ImVolumeDecrease)`
  fill: white;
  width: 36px;
  height: 36px;
  /* padding: 0px 16px; */
`;

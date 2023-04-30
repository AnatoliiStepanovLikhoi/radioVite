import styled from "styled-components";
import { GiOldMicrophone, GiPauseButton } from "react-icons/gi";

export const PlayWrapper = styled.div`
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 40vh;

  /* max-width: 200px; */
`;

export const PlayPicture = styled.picture`
  width: 100%;
`;

export const PlayIcon = styled(GiOldMicrophone)`
  width: 200px;
  height: 200px;
  fill: white;
`;

export const PauseIcon = styled(GiPauseButton)`
  width: 170px;
  height: 170px;
  fill: white;
`;

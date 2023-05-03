import styled from 'styled-components';
import { device } from '../constants/deviceType';

export const SideMenu = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(47, 47, 55);
  background: linear-gradient(
    90deg,
    rgba(47, 47, 55, 1) 0%,
    rgba(67, 67, 84, 1) 50%,
    rgba(105, 114, 116, 1) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //!comment to do one line
  text-align: center;

  @media ${device.tablet} {
    width: 69%;
  }
  @media ${device.desktop} {
    width: 50%;
  }
`;

export const SideMenuText = styled.a`
  font-size: 16px;
  font-weight: 500;

  color: white;

  margin-bottom: 15px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    font-size: 26px;
  }
  @media ${device.desktop} {
    font-size: 34px;
    margin-bottom: 20px;
  }
`;

export const SideMenuAccent = styled.span`
  //!comment to do one line
  display: block;
  margin-bottom: 5px;

  font-weight: 600;
  color: tomato;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../constants/deviceType';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 10px;
`;

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 5em;
  padding: 1em;
  /* border: 1px solid gray; */
  /* backdrop-filter: 8px; */

  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    height: 6em;
    padding: 1.5em;
  }
  @media ${device.desktop} {
    height: 9em;
    padding: 3em;
  }
`;

export const BurgerMenu = styled.div`
  height: 100%;
  width: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  cursor: pointer;
  /* background-color: black; */
`;

export const BurgerBar = styled.div`
  width: 3em;
  height: 0.5em;
  background-color: tomato;
  border-radius: 0.5em;
  z-index: 15;

  transform: rotate(0), translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;

  @media ${device.tablet} {
    width: 4em;
    height: 0.5em;
  }

  &.rotate {
    transform: rotate(45deg) translate(0.75em, 1.25em);
    transition: ease-out 0.5s;
  }

  &.scale {
    transform: scale(0.1);
    transition: ease-out 0.5s;
  }

  &.hide {
    transform: rotate(135deg) translate(-0.5em, 1em);
    transition: ease-out 0.5s;
  }
`;

// export const BurgerBarFirst = styled.div`
//   transform: rotate(45deg), translate(0.75em, 1.25em);
//   transition: ease-out 0/5s;
// `;

// export const BurgerBarSecond = styled.div`
//   transform: scale(0.1);
//   transition: ease-out 0/5s;
// `;

// export const BurgerBarthird = styled.div`
//   transform: rotate(135deg), translate(0.5em, 1em);
//   transition: ease-out 0/5s;
// `;

export const LogoLink = styled(NavLink)``;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const LogoIcon = styled.img`
  width: 250px;

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.desktop} {
    width: 350px;
  }
`;

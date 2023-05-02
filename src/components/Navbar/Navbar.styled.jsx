import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
`;

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 5em;
  padding: 1em;
  border: 1px solid gray;
  /* backdrop-filter: 8px; */

  display: flex;
  justify-content: space-between;
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
  width: 4em;
  height: 0.5em;
  background-color: tomato;
  border-radius: 0.5em;
  z-index: 15;

  transform: rotate(0), translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;

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

export const SideMenu = styled.div`
  width: 50%;
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
`;

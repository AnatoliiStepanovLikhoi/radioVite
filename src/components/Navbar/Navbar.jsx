import { useState } from 'react';
import {
  NavbarContainer,
  BurgerMenu,
  // SideMenu,
  NavbarWrapper,
  BurgerBar,
  LogoWrapper,
  // LogoLink,
  LogoIcon,
  //   BurgerBarFirst,
} from './Navbar.styled';

import { SideBar } from './SideMenu';

export const Navbar = () => {
  // const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  // const [menuIsHidden, setMenuIsHidden] = useState(true);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const toggleMenu = () => {
    // if (!menuIsClicked) {
    //   setBurgerIsOpen(!burgerIsOpen);
    //   setMenuIsHidden(!menuIsHidden);
    // }

    setMenuIsClicked(!menuIsClicked);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        {/* <LogoLink to="/" aria-label="logo button"> */}
        <LogoWrapper>
          <LogoIcon src="./logoBoryspilFM.png" />
        </LogoWrapper>
        {/* </LogoLink> */}
        <BurgerMenu onClick={toggleMenu}>
          <BurgerBar className={menuIsClicked ? 'rotate' : ''} />
          <BurgerBar className={menuIsClicked ? 'scale' : ''} />
          <BurgerBar className={menuIsClicked ? 'hide' : ''} />
        </BurgerMenu>
      </NavbarWrapper>

      {menuIsClicked && <SideBar />}
    </NavbarContainer>
  );
};

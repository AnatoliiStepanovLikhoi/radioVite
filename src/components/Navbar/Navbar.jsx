import { useState } from 'react';
import {
  NavbarContainer,
  BurgerMenu,
  NavbarWrapper,
  BurgerBar,
  LogoWrapper,
  LogoIcon,
} from './Navbar.styled';

import { SideBar } from './SideMenu';

export const Navbar = () => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const toggleMenu = () => {
    setMenuIsClicked(!menuIsClicked);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LogoWrapper>
          <LogoIcon src="./logoBoryspilFM.png" alt="Boryspil FM Logo" />
        </LogoWrapper>
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

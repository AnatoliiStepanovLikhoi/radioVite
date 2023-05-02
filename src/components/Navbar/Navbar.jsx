import { useState } from 'react';
import {
  NavbarContainer,
  BurgerMenu,
  SideMenu,
  NavbarWrapper,
  BurgerBar,
  //   BurgerBarFirst,
} from './Navbar.styled';

export const Navbar = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [menuIsHidden, setMenuIsHidden] = useState(true);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const toggleMenu = () => {
    if (!menuIsClicked) {
      setBurgerIsOpen(!burgerIsOpen);
      setMenuIsHidden(!menuIsHidden);
    }

    setMenuIsClicked(!menuIsClicked);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <div>Logo</div>
        <BurgerMenu onClick={toggleMenu}>
          <BurgerBar className={menuIsClicked ? 'rotate' : ''} />
          <BurgerBar className={menuIsClicked ? 'scale' : ''} />
          <BurgerBar className={menuIsClicked ? 'hide' : ''} />
        </BurgerMenu>
      </NavbarWrapper>

      {menuIsClicked && <SideMenu />}
    </NavbarContainer>
  );
};

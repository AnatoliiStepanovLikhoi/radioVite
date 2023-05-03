import { SideMenu, SideMenuText, SideMenuAccent } from './SideMenu.styled';

export const SideBar = () => {
  return (
    <SideMenu>
      <SideMenuText
        href="https://goo.gl/maps/iSQqUGKXwvg6mkoU9"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="address"
      >
        <SideMenuAccent>Адреса:</SideMenuAccent> м. Бориспіль, вул. Київський
        Шлях, 33
      </SideMenuText>
      <SideMenuText href="mailto:boryspiltv@ukr.net" aria-label="email">
        <SideMenuAccent>Електронна пошта:</SideMenuAccent> boryspiltv@ukr.net
      </SideMenuText>
      <SideMenuText
        href="tel:+380459554404"
        rel="noopener noreferrer"
        aria-label="phone number"
      >
        <SideMenuAccent>Телефон:</SideMenuAccent> +38 (04595) 5-44-04
      </SideMenuText>
    </SideMenu>
  );
};

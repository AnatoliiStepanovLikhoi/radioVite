import { FooterComponent, FooterText } from './Footer.styled';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  return (
    <FooterComponent>
      <SocialLinks />
      <FooterText>©2023 КП «ТелеРадіоСтудія «Бориспіль»</FooterText>
    </FooterComponent>
  );
};

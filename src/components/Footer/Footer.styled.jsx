import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { device } from '../constants/deviceType';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

export const FooterComponent = styled.footer`
  text-align: center;
  color: tomato;
  grid-area: 3 / 1 / 4 / 2;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const SocialItem = styled.li`
  width: 80px;
  z-index: 9;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white;

  /* padding-bottom: 30px; */
  letter-spacing: 0.06em;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const LinkStyled = styled(Link)`
  color: tomato;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`;

export const InstaIcon = styled(BsInstagram)`
  width: 50px;
  height: 50px;
`;

export const YoutubeIcon = styled(AiOutlineYoutube)`
  width: 80px;
  height: 70px;
`;

export const FacebookIcon = styled(AiOutlineFacebook)`
  width: 60px;
  height: 60px;
`;

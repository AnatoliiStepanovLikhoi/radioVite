import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { device } from '../constants/deviceType';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

export const FooterComponent = styled.footer`
  /* margin-top: auto; */
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

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`;

export const InstaIcon = styled(BsInstagram)`
  /* fill: tomato; */
  width: 50px;
  height: 50px;
`;

export const YoutubeIcon = styled(AiOutlineYoutube)`
  /* fill: tomato; */
  width: 80px;
  height: 70px;
`;

export const FacebookIcon = styled(AiOutlineFacebook)`
  /* fill: tomato; */
  width: 60px;
  height: 60px;
`;
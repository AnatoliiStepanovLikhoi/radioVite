import {
  SocialList,
  SocialItem,
  InstaIcon,
  LinkStyled,
  YoutubeIcon,
  FacebookIcon,
} from './Footer.styled';

export const SocialLinks = () => {
  console.log(YoutubeIcon);
  console.log(InstaIcon);

  return (
    <SocialList>
      <SocialItem>
        <LinkStyled
          to="https://www.instagram.com/boryspilfm/"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <InstaIcon />
        </LinkStyled>
      </SocialItem>
      <SocialItem>
        <LinkStyled
          to="https://youtube.com/@TRS_Boryspil"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <YoutubeIcon />
        </LinkStyled>
      </SocialItem>
      <SocialItem>
        <LinkStyled
          to="https://www.facebook.com/FMBoryspil/"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FacebookIcon />
        </LinkStyled>
      </SocialItem>
    </SocialList>
  );
};

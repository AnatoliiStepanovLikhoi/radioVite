// import Container from "components/constants/Container/Container.styled";

// import { HeroBackground, SectionRelative, HeroContainer } from "./Main.styled";

// import HeroTitle from "./Hero/HeroTitle";
// import HeroImage from "./Hero/HeroImage";
// import MainCategories from "./MainCategories/MainCategories";
// import OtherCategoriesBtn from "./OtherCategories/OtherCategoriesBtn";
import { children } from "react";
import { BackgroundImageRandom } from "./BackgroundImage.styled";

const BackgroundImage = () => {
  return (
    <>
      <BackgroundImageRandom>{children}</BackgroundImageRandom>
    </>
  );
};

export default BackgroundImage;

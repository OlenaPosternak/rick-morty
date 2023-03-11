import header from '../img/header.png';
import { HeaderSection, HeroImg } from './Header.styled';
export const Header = () => {
  return (
    <HeaderSection>
      <HeroImg src={header} alt="Rick & Morty" />
    </HeaderSection>
  );
};

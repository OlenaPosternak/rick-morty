import styled from 'styled-components';

export const HeaderSection = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 92px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    margin-top: 86px;
    margin-bottom: 16px;
  }
`;

export const HeroImg = styled.img`
  width: 321px;
  height: 104px;
  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 200px;
  }
`;

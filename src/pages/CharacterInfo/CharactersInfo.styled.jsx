import styled from 'styled-components';
import { ReactComponent as ArrowBack } from '../../img/arrow_back_24px.svg';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 360px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 210px;
    padding-right: 210px;
  }

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
  margin-bottom: 78px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

export const BackIcon = styled(ArrowBack)`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  margin-right: 12px;
`;

export const BackText = styled.h3`
  font-size: 18px;
  font-weight: 700;
  font-family: Karla;
  line-height: 1.17;
`;

export const CharacterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 35px;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 148px;
  margin-bottom: 34px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const Name = styled.p`
  font-size: 32px;
  line-height: 1.17;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const InfoTitle = styled.h6`
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.15px;

  color: rgba(142, 142, 147, 1);

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const InfoSection = styled.div`
  width: 312px;
  height: 64px;
  padding: 9px 16px 12px 16px;

  @media screen and (min-width: 1440px) {
    width: 413px;
    height: 64px;
  }
`;

export const Border = styled.div`
  width: 298px;
  height: 1px;
  background-color: rgba(33, 33, 33, 0.08);

  @media screen and (min-width: 1440px) {
    width: 395px;
  }
`;

export const CharacterTitle = styled.h3`
  color: rgba(8, 31, 50, 1);

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15;
`;
export const CharacterDetails = styled.p`
  color: rgba(110, 121, 140, 1);

  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25;
  margin-bottom: 11px;
`;

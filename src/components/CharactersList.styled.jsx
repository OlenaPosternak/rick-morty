import styled from 'styled-components';

export const Image = styled.img`
  width: 312px;
  height: 232px;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    gap: 19px;
    width: 1020px;
  }
`;

export const ListItem = styled.li`
  margin-top: 28px;
  margin-bottom: 4px;
  width: 312px;
  min-height: 308px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 240px;
  }
`;

export const CharactersInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px 12px 16px;
`;

export const CharactersName = styled.p`
  color: rgba(0, 0, 0, 0.87);

  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 1.5;
`;

export const CharactersSpecies = styled.p`
  color: rgba(0, 0, 0, 0.6);

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 1.5;
`;

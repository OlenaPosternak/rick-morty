import styled from 'styled-components';

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

export const GoogleBtn = styled.button`
  margin-top: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: #fff;
  border: 1px solid rgba(146, 232, 159, 1);
  border-radius: 10px;
  width: 200px;
  height: 50px;
  font-size: 20px;

  &:hover,
  &:focus-visible {
    background-color: #4aa557;
    border: 1px solid #4aa557;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid green;
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
  input {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

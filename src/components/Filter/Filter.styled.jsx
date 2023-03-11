import styled from 'styled-components';
import { ReactComponent as Search } from '../../img/SearchIcon.svg';

export const FilterSection = styled.div`
  position: relative;
  text-align: center;
`;
export const Input = styled.input`
  cursor: pointer;

  font-family: Roboto;
  padding: 16px;
  padding-left: 48px;
  width: 312px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);

  outline: none;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 1440px) {
    width: 1020px;
    height: 56px;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 16px;
  top: 16px;

  width: 24px;
  height: 24px;
`;

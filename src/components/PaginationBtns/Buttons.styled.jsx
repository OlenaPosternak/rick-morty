import styled from 'styled-components';

export const BtnsSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Button = styled.button`
  outline: none;
  background-color: rgba(146, 232, 159, 1);
  border: 1px solid rgba(146, 232, 159, 1);
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: 20px;

  &:hover,
  &:focus-visible {
    background-color: #4aa557;
    border: 1px solid #4aa557;
  }
`;

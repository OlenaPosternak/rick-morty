import styled from 'styled-components';

export const UserSection= styled.div`
    margin-top: 20px;
   
`
export const GoogleBtn = styled.button`
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

export const UserName = styled.p`
    margin-bottom: 10px;
`
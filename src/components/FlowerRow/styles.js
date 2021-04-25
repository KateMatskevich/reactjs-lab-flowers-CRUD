import styled from 'styled-components';

export const Div = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #e83236;
  color: #fff;
  
  :nth-child(2n+1){
    background-color: #fff;
    color: #e83236;
    border: 1px solid #e83236;
  }
`;

export const Input = styled.input`
  width: 80px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #ececec;
  border-radius: 5px;
  
  ::placeholder{
    color: #000;
  }
`;

export const InputButton = styled.input`
  padding: 5px;
  border: 1px solid #e83236;
  margin: 5px;
  :hover{
    cursor: pointer;
    background: #fff;
  }
`;

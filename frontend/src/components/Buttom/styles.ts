import styled from "styled-components";



export const Container = styled.div`
  height: 38px;
  width: 38px;
  background: rgba(255, 107, 114, 0.1);
  border: 1px solid #ff6b72;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`

export const ButtonImage = styled.img`
  width: 22px;
  
  &:hover {
    opacity: 0.5;
    transition: all ease 0.4s;
  }
`
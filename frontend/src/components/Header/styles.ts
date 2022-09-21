import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, #606462 0%, #253542 100%);
  height: 25vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`
  
export const LogoImage = styled.img`
  width: 235px;
  margin-top: 15px;
`
    
export const Title = styled.h1`
  margin-top: 15px;
  font-size: 24px;
`
  
export const Link = styled.p`
  font-size: 14px;
  font-weight: 300;

  a {
    color: red;
    font-style: italic;
    font-size: 16px;

    &:hover {
      color: violet;
      transition: all ease 0.3s;
    }
  }

`

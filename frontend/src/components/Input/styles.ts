import styled from "styled-components";




export const InputContainer = styled.div`
  width: 30%;
  height: 46px;
  background-color: transparent ;
  border: 2px solid #384459;
  border-radius: 10px;
  color: #9aaabe;
  padding: 0 20px;
  font-size: 18px;
  margin-top: 20px;

  input {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    background-color: transparent ;
    border: 0;
    width: 100%;
    height: 100%;
    margin: 0 30px;
    outline: none;
  
    

    @media(min-width: 280px)and (max-width: 820px) {
      font-size: 0.87rem;
      align-items: center;
      text-align: center;
    }
  }

   @media(min-width: 280px)and (max-width: 820px) {
      height: 40px;
    }

`
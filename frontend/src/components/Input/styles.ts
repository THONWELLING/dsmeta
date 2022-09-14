import styled from "styled-components";




export const InputContainer = styled.div`
  width: 30%;
  height: 46px;
  background-color: #1b2531;
  border: 1px solid #384459;
  color: #9aaabe;
  padding: 0 20px;
  font-size: 18px;
  margin-top: 20px;

  input {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    background: transparent;
    border: 0;
    width: 100%;
    margin: 0 30px;
    

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
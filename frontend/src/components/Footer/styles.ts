import styled from "styled-components"


export const FooterContainer = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  color: #ffff;
  line-height: 25px;
  font-style: italic;
  text-shadow: 1px 1px 2px #DCDCDC;
  font-weight: 300;
  background: linear-gradient(180deg, #102347 0%, #181818 100%);
  justify-content: space-between;
  align-items: center;
`
export const FooterInfo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Media = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    width: 4rem;
    height: 4rem;
    margin-top: 5px;
    font-size: 30px;
    background-color: rgba(14, 14, 14, 0.1);
    border: 1px solid rgba(14, 14, 14, 0.3);
    color: #4B0082;
    margin-right: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: none;
      animation: spin 2s linear infinite;

      @keyframes spin { 
        100% { -webkit-transform: rotateZ(360deg); 
          transform: rotateZ(360deg);
        }
      }
    }
  }
`
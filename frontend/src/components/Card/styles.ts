import styled from "styled-components";


export const Container = styled.div<{
  width: string
  height: string
  }>`
  width: 90%;
  height: ${(props) => props.height};
  background-color: #141414;
  opacity: 0.7;
  border-radius: 10px;
  padding: 30px 10px;

`

export const Subtitle = styled.h2`
  color: #676fff;
  font-size: 24px;
  margin-bottom: 25px;
` 
import styled from "styled-components";


export const Container = styled.div<{
  width: string
  height: string
  }>`
  width: ${(props) => props.width}
  height: ${(props) => props.height}
  background-color: #283142;
  border-radius: 10px;
  padding: 30px 10px;

`

export const Subtitle = styled.h2`
  color: #676fff;
  font-size: 24px;
  margin-bottom: 20px;
` 
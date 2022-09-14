import styled from "styled-components";


export const DsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

export const DsHead = styled.thead`
  height: 55px;
  font-size: 16px;
  color: #e9e9e9;
  font-weight: 700;
`

export const DsBody = styled.tbody`
  font-size: 14px;
  font-weight: 400;
  color: #cfcfcf;
  text-align: center;

  tr {
    height: 74px;
    border-top: 1px solid #5f6e82;

    &:hover {
      background-color: #384459;
    }
  }
`


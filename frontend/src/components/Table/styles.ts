import styled from "styled-components";


export const DsTable = styled.table`
  margin-top: 20px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

export const DsHead = styled.thead`
  height: 3rem;
  font-size: 16px;
  color: #e9e9e9;
  font-weight: 700;
`

export const DsBody = styled.tbody`
  font-size: 1rem;
  font-weight: 400;
  color: #cfcfcf;
  text-align: center;

  tr {
    height: 3.2rem;
    border-top: 2px solid #5f6e82;

    &:hover {
      background-color: rgba(169, 169, 169, 0.5);
      transition: all ease 0.4s;
    }
  }
`
export const DsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
`


import * as C from './styles'

import Button from "../Buttom"


const DsTable = () => {
  return (
    <>
      <C.DsTable>
        <C.DsHead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </C.DsHead>
        <C.DsBody>
          <tr>
             <td className="show992">01</td>
              <td className="show576">20/09/2022</td>
              <td>Anakin Skywalker</td>
              <td className="show992">40</td>
              <td className="show992">40</td>
              <td>R$ 55300.00</td>
              <td>
                <C.DsButtonContainer>
                  <Button />
                </C.DsButtonContainer>
              </td>
          </tr>
        </C.DsBody>
      </C.DsTable>
    </>
  )
}

export default DsTable
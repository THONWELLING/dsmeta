import { useState, useEffect } from "react";
import * as C from "./styles";

import axios from "axios";

import Button from "../Buttom";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

const DsTable = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/sales`).then((response) => {
      setSales(response.data.content);
    });
  }, []);
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
          {sales.map((item) => {
            return (
              <tr key={item.id}>
                <td className="show992">{item.id}</td>
                <td className="show576">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td>{item.sellerName}</td>
                <td className="show992">{item.visited}</td>
                <td className="show992">{item.deals}</td>
                <td>R$ {item.amount.toFixed(2)}</td>
                <td>
                  <C.DsButtonContainer>
                    <Button />
                  </C.DsButtonContainer>
                </td>
              </tr>
            );
          })}
        </C.DsBody>
      </C.DsTable>
    </>
  );
};

export default DsTable;

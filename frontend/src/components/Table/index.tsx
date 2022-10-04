import { useState, useEffect } from "react";
import axios from "axios";

import * as C from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Buttom";
import { Sale } from "../../models/sale";
import Input from "../Input";
import { BASE_URL } from "../../utils/request";

const DsTable = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [minDate, maxDate]);

  return (
    <>
      <DatePicker
        selected={minDate}
        onChange={(date: Date) => {
          setMinDate(date);
        }}
        dateFormat="dd/MM/yyy"
        customInput={<Input />}
      />
      <DatePicker
        selected={maxDate}
        onChange={(date: Date) => {
          setMaxDate(date);
        }}
        dateFormat="dd/MM/yyy"
        customInput={<Input />}
      />
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
                    <Button saleId={item.id} />
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

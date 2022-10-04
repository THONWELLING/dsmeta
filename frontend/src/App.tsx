import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from "./components/Header";
import SalesCard from "./components/Card";
import MainContent from "./components/Content";
import Footer from "./components/Footer";
import Input from "./components/Input";
import DsTable from "./components/Table";

const App = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  return (
    <>
      <Header />
      <MainContent>
        <SalesCard width="100%" height="100%">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => {}}
            dateFormat="dd/MM/yyy"
            customInput={<Input />}
          />
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {}}
            dateFormat="dd/MM/yyy"
            customInput={<Input />}
          />

          <DsTable />
        </SalesCard>
      </MainContent>
      <Footer />
    </>
  );
};

export default App;

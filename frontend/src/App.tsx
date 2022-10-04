import Header from "./components/Header";
import SalesCard from "./components/Card";
import MainContent from "./components/Content";
import Footer from "./components/Footer";

import DsTable from "./components/Table";

const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <SalesCard width="100%" height="100%">
          <DsTable />
        </SalesCard>
      </MainContent>
      <Footer />
    </>
  );
};

export default App;

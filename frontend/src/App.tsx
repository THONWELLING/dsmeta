import Header from "./components/Header"
import SalesCard from "./components/Card"
import MainContent from "./components/Content"
import Footer from "./components/Footer"
import Input from "./components/Input"
import DsTable from "./components/Table"


const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <SalesCard width="100%" height="90%">
          <Input />
          <Input />
          <DsTable />
        </SalesCard>
      </MainContent>
        <Footer />
    </>
  )
}

export default App

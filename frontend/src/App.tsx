import Header from "./components/Header"
// import Button from "./components/Buttom"
import SalesCard from "./components/Card"
import MainContent from "./components/Content"
import Footer from "./components/Footer"
import Input from "./components/Input"
// import DsTable from "./components/Table"


const App = () => {
  return (
    <>
      <Header />
      <MainContent>
         <SalesCard width="100%">
          <Input />
          <Input />
      </SalesCard>
        {/* <DsTable /> */}
      </MainContent>
      <Footer />
    </>
  )
}

export default App

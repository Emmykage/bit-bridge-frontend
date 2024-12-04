import Header from "../../compnents/header/Header"
import ExxlusiveDeals from "./components/deals/ExclusiveDeals"
import HighlightInfo from "./components/highlight/Highlight"

const Home = () => {
  return (

    <div className=" m-auto">
        <Header/>
        <HighlightInfo/>     

        <ExxlusiveDeals/>

      
       
      
    </div>
  )
}

export default Home
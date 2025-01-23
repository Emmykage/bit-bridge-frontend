import ClassicBtn from "../../compnents/button/ClassicButton"
import Header from "../../compnents/header/Header"
import ExxlusiveDeals from "./components/deals/ExclusiveDeals"
import HighlightInfo from "./components/highlight/Highlight"
import tradeHero from "../../assets/images/banners/trade-dashboard.jpg"

const Home = () => {
  return (

    <div className=" m-auto">
        <Header/>
        <section className="lg:h-[500px] p-4 w-full bg-gray-900">
          <div className="max-w-app-layout grid sm:grid-cols-2 m-auto w-full ">
            <div className="p-5">
              <h2 className="lg:text-5xl text-3xl text-white font-bold">
              Get Awesome trading experience
              </h2>
              <p className="lg:text-3xl text-2xl text-gray-300  font-semibold">Buy and Sell Gift Card, Benefit from fast and Secured crypto transaction</p>
              <ClassicBtn className={"text-lg h-14 text-alt font-semibold"}> Get Started</ClassicBtn>
            </div>
            <div className="flex-1  bg--200">
              <div className="h-[400px] bg-red-300 border-gray-700 overflow-hidden border rounded-xl">
              <img src={tradeHero} alt="tradebanner" className="w-full h-full"/>

              </div>
            </div>
          </div>
        </section>
        <HighlightInfo/>     

        <ExxlusiveDeals/>

      
       
      
    </div>
  )
}

export default Home
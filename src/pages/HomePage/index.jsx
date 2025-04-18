import { useNavigate } from "react-router-dom"
import ClassicBtn from "../../compnents/button/ClassicButton"
import Header from "../../compnents/header/Header"
import ExxlusiveDeals from "./components/deals/ExclusiveDeals"
import HighlightInfo from "./components/highlight/Highlight"

import "./style.scss"
import PopularCards from "./components/popular-card/PopularCards"
const Home = () => {
  const navigate = useNavigate()

  return (

    <div className="-mt-40 md:-mt-40">
        <Header/>
          <section className="h-screen lg:h-[800px] p-4 w-full hero-header">
            <div className="max-w-app-layout  items-center h-full grid sm:grid-cols-2 m-auto w-full">
              <div className="p-5 mt-10 bg-gray-900/40 rounded-lg">
                <h2 className="lg:text-5xl text-3xl text-white font-bold">Get Awesome experience paying your bills </h2>
                <p className="lg:text-3xl text-2xl text-gray-300 leading-10  my-6 font-semibold">Top up your mobile data  and pay utility bills</p>
                <ClassicBtn onclick={()=>navigate("/login")} className={"text-lg h-14 text-alt font-semibold"}> Get Started</ClassicBtn>
              </div>
            </div>
          </section>
        <HighlightInfo/>    
        <PopularCards/>   

        <ExxlusiveDeals/>    
      
    </div>
  )
}

export default Home
import { pickLogo } from "../../utils/ImagePicer"
import serviceProviderData from "../../data/serviceProviderData.json"
import Header from "../../compnents/header/Header"
import { useNavigate } from "react-router-dom"
import {StarOutlined} from "@ant-design/icons"
import HeroBanner from "../../compnents/hero/Hero"

const UtilityServices = () => {
    const navigate = useNavigate()

  return (
    <div>
        
        <Header/>
      <HeroBanner text={"Pay Utility bills with Bitcoin and other cryptocurrencies from anywhere in the world"}/>

<section className="py-10">

<div className="grid gap-3 grid-cols-3 max-w-7xl m-auto">


{serviceProviderData.map(({id, provider, provision})  => (

  <div key={id} onClick={()=> {navigate(`/phone-top-up/${provider}`)} }>

    <div  className="h-52">
      <img src={pickLogo(provider)} alt="" className="w-full h-full" />

    </div>
    <div className="flex justify-between px-2">
      <div>
        <p className="text-lg font-medium">{provision}</p>
        <p className="text-base font-medium text-gray-600">5 NGN - 5000NGN</p>
      </div>
      <div className="flex gap-3">
        <span className="font-semibold">4.7</span>
        <span><StarOutlined /></span>
      </div>
    </div>
  </div>
      ))}



</div>
</section>
    </div>
  )
}

export default UtilityServices
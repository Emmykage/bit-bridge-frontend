import Header from "../../compnents/header/Header"
import HeroBanner from "../../compnents/hero/Hero"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"
import { useDispatch, useSelector } from "react-redux"
import utilityData from "../../data/utilityData.json"
import UtilityCard from "../../compnents/product-card/UtilityCard"
const UtilityServices = () => {
  const dispatch = useDispatch()
  const {services} =  useSelector(state => state.product)
  useEffect(()=> {
    dispatch(getProducts())
  },[])


  const utility = [...services, ...utilityData]
  console.log(utility)

  return (
    <div>
        
        <Header/>
      <HeroBanner text={"Pay Utility bills with Bitcoin and other cryptocurrencies from anywhere in the world"}/>

      <section className="py-10">

      <div className="grid bg-gray-50 gap-x-3 gap-y-5 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4">


      {utility.map(({id, value, provider,image, provision})  => (

        <UtilityCard key={id} id={id} linkTo={`utility-services`} value={value} provider={provider} image={image} provision={provision} />

      ))}



</div>
</section>
    </div>
  )
}

export default UtilityServices
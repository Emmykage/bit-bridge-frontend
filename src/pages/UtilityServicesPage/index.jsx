import utilityService from "../../data/utilityData.json"
import Header from "../../compnents/header/Header"
import HeroBanner from "../../compnents/hero/Hero"
import ServiceCard from "../../compnents/product-card/ServiceCard"

const UtilityServices = () => {

  return (
    <div>
        
        <Header/>
      <HeroBanner text={"Pay Utility bills with Bitcoin and other cryptocurrencies from anywhere in the world"}/>

      <section className="py-10">

      <div className="grid gap-3 grid-cols-3 max-w-7xl m-auto">


      {utilityService.map(({id, value, provider,image, provision})  => (

        <ServiceCard key={id} linkTo={`utility-services`} value={value} provider={provider} image={image} provision={provision} />

      ))}



</div>
</section>
    </div>
  )
}

export default UtilityServices
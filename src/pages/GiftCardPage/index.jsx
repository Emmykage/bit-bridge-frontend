import serviceProviderData from "../../data/giftCardData.json"
import Header from "../../compnents/header/Header"

import GiftCard from "../../compnents/product-card/GiftCard"
import scrollToTop from "../../utils/scrollToTop"

const GiftCardPAge = () => {
  scrollToTop()

  return (
    <div>        
      <Header/>
      
      <section className="py-10 px-4">
        <div className=" max-w-7xl m-auto">
        <h3 className="text-lg font-medium">Cash Back!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">


          {serviceProviderData.slice(0, 4).map(({id, provider, provision, image, value})  => (
          <GiftCard key={id} provider={provider} provision={provision} image={image} value={value}/>
          ))}



          </div>
        </div>
       
      </section>
      <section className="py-10 px-4">

        <div className="max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold">All gift cards</h2>
          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-3 ">


          {serviceProviderData.map(({id, provider, provision, image, value})  => (
          <GiftCard key={id} provider={provider} provision={provision} image={image} value={value}/>
          ))}



          </div>
        </div>

     
      </section>     
     
    </div>
  )
}

export default GiftCardPAge
import serviceProviderData from "../../data/giftCardData.json"
import Header from "../../compnents/header/Header"

import GiftCard from "../../compnents/product-card/GiftCard"

const GiftCardPAge = () => {

  return (
    <div>        
      <Header/>
      <div className='h-72 bg-gray-700 flex justify-center items-center'>
        <h2 className="text-4xl max-w-5xl font-semibold text-center text-white">
          Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world
          </h2>
      </div>
      <section className="py-10">
        <div className=" max-w-7xl m-auto">
        <h3 className="text-lg font-medium">Cash Back!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-4">


          {serviceProviderData.slice(0, 4).map(({id, provider, provision, image, value})  => (
          <GiftCard key={id} provider={provider} provision={provision} image={image} value={value}/>
          ))}



          </div>
        </div>
       
      </section>
      <section className="py-10">

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
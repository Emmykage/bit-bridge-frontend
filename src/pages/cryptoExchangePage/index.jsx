import serviceProviderData from "../../data/giftCardData.json"
import Header from "../../compnents/header/Header"

import GiftCard from "../../compnents/product-card/GiftCard"
import sellCrypto from "../../assets/images/banners/original-size.webp"
const CryptoExchangePage = () => {

  return (
    <div>        
      <Header/>
      <section>
        <div className="max-w-7xl m-auto border gap-4 p-4 rounded-2xl grid grid-cols-2">
          <div>
            <h2 className="text-5xl  font-bold text-gray-700">
            Sell  your crypto with Ease

            </h2>
            <p className="my-4 text-lg font-medium text-gray-600 text-lef">
            Crypto conversion made easy - conver your crypto to cash in one simple step Pay with crypto and stay connected while traveling!
            </p>
          </div>
          <div>
              <div>
                <img src={sellCrypto} alt="" className="w-full h-full" />
              </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 px-4">
        <div className=" max-w-7xl m-auto">
        <h3 className="text-lg font-medium">Cash Back!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-4">


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

export default CryptoExchangePage
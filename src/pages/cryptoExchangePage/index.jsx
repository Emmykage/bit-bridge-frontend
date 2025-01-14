// import serviceProviderData from "../../data/giftCardData.json"
import Header from "../../compnents/header/Header"

import GiftCard from "../../compnents/product-card/GiftCard"
import sellCrypto from "../../assets/images/banners/original-size.webp"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"
import { getProvisions } from "../../redux/actions/provision"
const CryptoExchangePage = () => {
  const {giftcards} = useSelector(state => state.provision)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getProvisions())
  },[])

  return (
    <div>        
      <Header/>
      <section>
        <div className="max-w-7xl m-auto border gap-4 p-4 rounded-2xl grid md:grid-cols-2">
          <div>
            <h2 className="text-5xl  font-bold text-gray-700">
            Sell your crypto with Ease

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
        <h3 className="text-lg font-medium">Top Features!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-20 lg:grid-cols-4">


          {giftcards.slice(0, 4).map(({id, product, name, value})  => (
          <GiftCard key={id} id={id} provider={product.provider} provision={name} value={value}/>
          ))}



          </div>
        </div>
       
      </section>
      <section className="py-10 px-4">

        <div className="max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold">All gift cards</h2>
          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-2 lg:grid-cols-3 ">


          {giftcards.map(({id, product, name, image, value})  => (
          <GiftCard key={id} id={id} provider={product?.provider} provision={name} image={image} value={value}/>
          ))}



          </div>
        </div>

     
      </section>     
     
    </div>
  )
}

export default CryptoExchangePage
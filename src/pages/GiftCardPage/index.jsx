import Header from "../../compnents/header/Header"
import GiftCard from "../../compnents/product-card/GiftCard"
import scrollToTop from "../../hooks/scrollToTop"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"
import { getProvisions } from "../../redux/actions/provision"

const GiftCardPAge = () => {
  const dispatch = useDispatch()
  const {giftcards} =  useSelector(state => state.provision)
  useEffect(()=>{
    dispatch(getProvisions())
  },[])


  console.log(giftcards)

  scrollToTop()

  return (
    <div>        
      <Header/>
      
      <section className="py-10 px-4">
        <div className=" max-w-7xl m-auto">
        <h3 className="text-lg font-medium">Top Features!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-5 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4">


          {giftcards.slice(0, 4).map(({id, product, name, image, value})  => (
          <GiftCard key={id} id={id} provider={product?.provider} provision={name} image={image} value={value}/>
          ))}



          </div>
        </div>
       
      </section>
      <section className="py-10 px-4">

        <div className="max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold">All gift cards</h2>
          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-2 md:grid-cols-3 ">


          {giftcards.map(({id, product, currency, name, image, min_value, max_value})  => (
          <GiftCard key={id} id={id} provider={product?.provider} currency={currency} provision={name} image={image} min_value={min_value} max_value={max_value}/>
          ))}



          </div>
        </div>

     
      </section>     
     
    </div>
  )
}

export default GiftCardPAge
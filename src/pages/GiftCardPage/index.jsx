import Header from "../../compnents/header/Header"
import GiftCard from "../../compnents/product-card/GiftCard"
import scrollToTop from "../../utils/scrollToTop"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"

const GiftCardPAge = () => {
  const dispatch = useDispatch()
  const {giftcards, mobileProviders} =  useSelector(state => state.product)
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  scrollToTop()

  console.log(mobileProviders, "hehhhhh")

  return (
    <div>        
      <Header/>
      
      <section className="py-10 px-4">
        <div className=" max-w-7xl m-auto">
        <h3 className="text-lg font-medium">Cash Back!</h3>

          <div className="grid bg-gray-50 gap-x-3 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">


          {giftcards.slice(0, 4).map(({id, provider, provision, image, value})  => (
          <GiftCard key={id} provider={provider} provision={provision} image={image} value={value}/>
          ))}



          </div>
        </div>
       
      </section>
      <section className="py-10 px-4">

        <div className="max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold">All gift cards</h2>
          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-3 ">


          {mobileProviders.map(({id, provider, provision, image, value})  => (
          <GiftCard key={id} provider={provider} provision={provision} image={image} value={value}/>
          ))}



          </div>
        </div>

     
      </section>     
     
    </div>
  )
}

export default GiftCardPAge
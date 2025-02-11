import Header from "../../compnents/header/Header"
import GiftCard from "../../compnents/product-card/GiftCard"
import scrollToTop from "../../hooks/scrollToTop"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProvisions } from "../../redux/actions/provision"
import LoadingComp from "../../compnents/loader/LoadingComp"

const GiftCardPAge = () => {
  const dispatch = useDispatch()
  const {giftcards, loading} =  useSelector(state => state.provision)
  useEffect(()=>{
    dispatch(getProvisions())
  },[])

  scrollToTop()

  return (
    <div>        
      <Header/>
      
      <section className="py-10 px-4 mt-36">
        <div className=" max-w-7xl px-4 py-10 shadow rounded-lg bg-white m-auto">

        <div className="">
        <h3 className="text-lg font-medium text-gray-800">Top Features!</h3>


        {loading ? 
         <LoadingComp/> : 
          <div className="grid bg-gray-50 gap-x-3 gap-y-5 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4">


          {giftcards.slice(0, 4).map(({id, product, name, image, value})  => (
          <GiftCard key={id} id={id} provider={product?.provider} provision={name} image={image} value={value}/>
          ))
        }

          </div>

          
          }



        </div>

        <div className="max-w-7xl py-10 m-auto">
          <h2 className="text-2xl font-semibold">All gift cards</h2>
          <div className="grid bg-gray-50 gap-x-3 gap-y-20 grid-cols-2 md:grid-cols-3 ">


          {giftcards.map(({id, product, currency, name, image, min_value, max_value})  => (
          <GiftCard key={id} id={id} provider={product?.provider} currency={currency} provision={name} image={image} min_value={min_value} max_value={max_value}/>
          ))}



          </div>
        </div>
        </div>

     
      </section>     
     
    </div>
  )
}

export default GiftCardPAge
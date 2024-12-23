
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"
const PhoneTopUp = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {mobileProviders} = useSelector(state => state.product)
  useEffect(()=> {
    dispatch(getProducts())
  },[])
  return (
    <div>
      <Header/>

        
        <div className='h-72 bg-gray-700 flex justify-center items-center'>
         <h2 className="text-4xl max-w-5xl font-semibold text-center text-white">
           Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world
           </h2>
        </div>

        <section className="py-10 px-4">

          <div className="grid gap-4 gap-y-7 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">


            {mobileProviders.map(({id, provider, provision})  => (

              <ProductCard key={id} id={id} provider={provider} provision={provision}/>

                
             ))}



            </div>
        </section>

    </div>
  )
}

export default PhoneTopUp
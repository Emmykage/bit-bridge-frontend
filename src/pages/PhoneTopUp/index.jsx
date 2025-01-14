
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/product"
import { getProvisions } from "../../redux/actions/provision"
const PhoneTopUp = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {mobileProviders} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  console.log(mobileProviders)
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


            {mobileProviders.map(({id, product, name, min_value, max_value})  => (

              <ProductCard key={id} id={id} min_value={min_value} max_value={max_value} provider={product?.provider} provision={name}/>

                
             ))}



            </div>
        </section>

    </div>
  )
}

export default PhoneTopUp
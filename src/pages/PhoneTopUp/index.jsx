
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProvisions } from "../../redux/actions/provision"
const PhoneTopUp = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {mobileProviders, dataBundles, airtime} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  console.log(mobileProviders)
  return (
    <div>
      <Header/>

        
        <div className='h-72 bg-gray-900 flex justify-center items-center'>
         <h2 className="text-4xl max-w-5xl font-semibold text-center text-white">
           Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world
           </h2>
        </div>

        <section className="py-10 px-4 ">

          <div className="max-w-7xl m-auto p-4 bg-white">
            <h3 className="font-medium text-xl">Data Bundle</h3>

          <div className="grid bg-white py-4 rounded-lg gap-4 gap-y-7 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">


            {dataBundles.map(({id, product, name, min_value, currency, max_value})  => (

              <ProductCard key={id} id={id} min_value={min_value} currency={currency} max_value={max_value} provider={product?.provider} provision={name}/>

                
             ))}



            </div>
            
          </div>
        </section>
        <section className="py-10 px-4">

          <div className="max-w-7xl m-auto bg-white p-4">
            <h3 className="font-medium text-xl">Airtime Recharge</h3>

          <div className="grid bg-white py-4 rounded-lg gap-4 gap-y-7 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">


            {airtime.map(({id, product, name, min_value, currency, max_value})  => (

              <ProductCard key={id} id={id} min_value={min_value} currency={currency} max_value={max_value} provider={product?.provider} provision={name}/>

                
             ))}



            </div>
            </div>

        </section>
    </div>
  )
}

export default PhoneTopUp
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import powerDistributions from "../../data/powerDistributions.json"

import { getProvisions } from "../../redux/actions/provision"
import ElectricCard from "../../compnents/product-card/ElectricCard"
import Banner from "../../compnents/banner/Banner"

const BuyPower = () => {
    const dispatch = useDispatch()
    const {services,mobileProviders} =  useSelector(state => state.product)
    console.log(services)


    useEffect(()=> {
        dispatch(getProvisions())
    },[])
 
        
            
  return (
    <div>
        <Header/>
        <section className="px-4">
            <Banner/>
       
        </section>


        <section className="py-10 px-4 bg-white my-10">

            <div className="max-w-7xl m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {powerDistributions.map(({id, description,name, image}) => (
                   <ElectricCard key={id} id={id} description={description} name={name} image={image} />
                ))}


            </div>
        </section>

        <section className="px-4 bg-gray-200 py-10">

            <div className="max-w-7xl m-auto bg-red-40">
            <h2 className="text-2xl my-4">More Products on BitBridge</h2>
            <div className="grid sm:grid-cols-4 gap-3">
                {mobileProviders.map(({id, provider, currency, name, max_value, min_value}) => (
                    <ProductCard key={id} id={id} provider={provider} currency={currency} max_value={max_value} min_value={ min_value} provision={name} />
                ))}

            </div>
            </div>

        </section>
    
    </div>
  )
}

export default BuyPower
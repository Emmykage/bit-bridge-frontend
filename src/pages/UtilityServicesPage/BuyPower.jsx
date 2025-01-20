import { useNavigate, useParams } from "react-router-dom"
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import CartButton from "../../compnents/button/CartButton"
import { ExclamationOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART } from "../../redux/app"
import FormInput from "../../compnents/formInput/FormInput"
import { useEffect, useState } from "react"
import { converter } from "../../api/currencyConverter"
import powerDistributions from "../../data/powerDistributions.json"
import utilityData from "../../data/utilityData.json"
import { splitString } from "../../utils"
import FormSelect from "../../compnents/formSelect/FormSelect"
import { getProvisions } from "../../redux/actions/provision"
import ElectricCard from "../../compnents/product-card/ElectricCard"

const BuyPower = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const [value, setValue] = useState(0)
    const {services,mobileProviders} =  useSelector(state => state.product)
    const [btcValue, setBtcValue] = useState()
    const {user} = useSelector(state => state.auth)
    console.log(services)

    const selectedProvider = [...services, ...utilityData]?.find(item => item.id == id)

    const serviceImage =  splitString(selectedProvider?.provider)
    console.log(selectedProvider, mobileProviders)

    useEffect(()=> {
        dispatch(getProvisions())
    },[])
 

               const handleCart = () => {
                if(!value ){
                    console.error("Value is required and cannot be empty.");

                    return
                }

                dispatch(ADD_TO_CART({
                    id: selectedProvider.id, 
                    provision: selectedProvider.provision,
                    provider: selectedProvider.provider,
                    image: selectedProvider.provider,
                    value: value
                })
            )
                

               }

               console.log(value)
               useEffect(() => {
                const fetchBtcValue = async () => {
                    try {
                        const calcbtcValue = await converter({ fromCurr: "ngn", amount: value, toCurr: "btc" });
                        setBtcValue(calcbtcValue);

                    } catch (error) {
                        console.error("Error fetching BTC value:", error.message);
                    }
                };
            
                fetchBtcValue();
            }, [value])
            
  return (
    <div>
        <Header/>
        <section className="px-4">
            <div className='h-72 bg-gray-200 flex justify-center items-center'>
         <h2 className="text-4xl max-w-5xl font-semibold text-center text-gray-900">
           Top up prepaid  and post paid Utility bill with Bitcoin and other cryptocurrencies from anywhere in the world
           </h2>
        </div>
        </section>


        <section className="py-10 px-4 bg-white my-10">

            <div className="max-w-7xl m-auto grid md:grid-cols-3 gap-10">
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
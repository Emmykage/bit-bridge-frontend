import { useParams } from "react-router-dom"
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import CartButton from "../../compnents/button/CartButton"
import { ExclamationOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART } from "../../redux/app"
import FormInput from "../../compnents/formInput/FormInput"
import { useEffect, useState } from "react"
import { converter } from "../../api/currencyConverter"
import utilityData from "../../data/utilityData.json"
import { splitString } from "../../utils"
import FormSelect from "../../compnents/formSelect/FormSelect"
import { getProvisions } from "../../redux/actions/provision"

const UtilityView = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [value, setValue] = useState(0)
    const {services,mobileProviders} =  useSelector(state => state.provision)
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
                console.log(value)
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
                        const calcValue = await converter({ fromCurr: "ngn", amount: value, toCurr: "btc" });
                        setBtcValue(calcValue);

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

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl m-auto py-10">
            <div className="p-10 bg-gray-200 flex justify-center items-center h-96">
                <img src={`/images/providers/${serviceImage}.webp`} alt="provider image"/>

            </div>
            <div>

                <div className="text-sm my-2 text-gray-600 font-medium">
                    <p>Utility & Services &gt; {selectedProvider?.provider}</p>
                </div>

                <h3 className="text-2xl font-medium">{selectedProvider?.provision}</h3>
                
                <div className="notice border rounded-xl my-2 p-2 px-3">
                    <p className="text-sm text-gray-700">
                    {selectedProvider?.info}    
                    </p>
                </div>
                <p className="my-3">
                    {selectedProvider?.header_info}   
                 </p>


                <div>

                    <div>
                        <FormSelect />
                    </div>
                    <h3 className="text-xl font-semibold">Enter Amount </h3>

                <div className="flex flex-col gap-0">

                        <FormInput type="nubmer"
                        value={value}
                        onChange={(input)=> {setValue(input)}}
                        placeholder={"Enter Value"}
                        className={""}/>


                        <div className="flex-1 text-sm mt-2 from-gray-800">
                            Estimated price {btcValue?.calc}BTC
                        </div> 



                    </div>
                   {!user &&  <p className="text-red-600">Sign in to use wallet token</p>}
                    </div>

                <div>

                    <div className="my-3">
                        <CartButton onClick={() => handleCart(selectedProvider)}>Add To Cart</CartButton>
                    </div>
                  

                </div>
                <div className="bg-gray-600 flex items-center gap-3 rounded-lg text-white p-4">
                    <span className="border rounded-full flex justify-center shrink-0">
                    <ExclamationOutlined />

                    </span>
                    <p className="text-sm font-medium">We are currently out of stock on this product</p>
                </div>
                <div>
                    <h3 className="text-2xl my-6 font-medium"> Description  </h3>


                        <div dangerouslySetInnerHTML={{__html: selectedProvider?.description}} />

                     </div>
            </div>
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

export default UtilityView
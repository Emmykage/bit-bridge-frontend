import { Outlet, useParams } from "react-router-dom"
import Header from "../../../compnents/header/Header"
import ProductCard from "../../../compnents/product-card/ProductCard"

import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART } from "../../../redux/app"
import FormInput from "../../../compnents/formInput/FormInput"
import { useEffect, useState } from "react"
import { converter } from "../../../api/currencyConverter"
import powerDistributions from "../../../data/powerDistributions.json"
import utilityData from "../../../data/utilityData.json"
import { splitString } from "../../../utils"
import FormSelect from "../../../compnents/formSelect/FormSelect"
import { getProvisions } from "../../../redux/actions/provision"
import { Button, Form } from "antd"
import DiscoverBtn from "../../../compnents/button/DiscoverBtn"
import ClickButton from "../../../compnents/button/Button"
import ClassicBtn from "../../../compnents/button/ClassicButton"
import PropTypes from "prop-types"
import ElectricCard from "../../../compnents/product-card/ElectricCard"

const ViewBuyPower = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [value, setValue] = useState(0)
    const [formValues, setFormValues] = useState(0)
    const [step, setStep] = useState(1)
    const {services,mobileProviders} =  useSelector(state => state.product)
    const [btcValue, setBtcValue] = useState()
    const {user} = useSelector(state => state.auth)

    // const selectSlide = (step) => {
    //     switch (step) {
    //         case 0:
    //             return  <PowerForm handleSubmit={handleForm}/>      
    //         case 1:
    //             return  <PurchaseDetails handleSubmit={handleForm}/>        
    //         default:
    //             break;
    //     }
    // }
 
    const selectedProvider =powerDistributions?.find(item => item.id == id)


    useEffect(()=> {
        dispatch(getProvisions())
    },[])
 
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
        <section className="px-4 py-10">

            <div className="max-w-7xl bg-white m-auto py-10 px-4 md:px-10">

                <div className="flex md:flex-row flex-col  gap-3">
                    <img src={selectedProvider?.image}  alt="" />
                    <div>

                        <div>
                            <p className="text-3xl text-gray-800 my-4 font-semibold ">{selectedProvider?.name}</p>
                            <p className="text-lg text-gray-700">{selectedProvider?.description}</p>
                        </div>

                        <div className="my-4">
                            <p className="text-base text-gray-600 my-0 ">{selectedProvider?.name}</p>
                            <p className="text-base text-gray-600">{selectedProvider?.description}</p>
                        </div>
                    </div>



                </div>
                {/* {selectSlide(step)} */}
                <Outlet context={[id, selectedProvider?.serviceID]}/>

            </div>
        </section>


        <section className="py-10 px-4 my-10 bg-white">

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



export default ViewBuyPower
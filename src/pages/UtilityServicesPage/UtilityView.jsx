import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
import CartButton from "../../compnents/button/CartButton"
import { ExclamationOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { SET_LOADING } from "../../redux/app"
import FormInput from "../../compnents/formInput/FormInput"
import { useEffect, useRef, useState } from "react"
import { converter } from "../../api/currencyConverter"
import { splitString } from "../../utils"
import { getProvisions } from "../../redux/actions/provision"
import selectCurrencyOptions from "../../utils/selectCurrencyOption"
import PlainSelect from "../../compnents/formSelect/plainSelect"
import { createPurchaseOrder, getPriceList } from "../../redux/actions/purchasePower"
import { toast } from "react-toastify"
import { message } from "antd"

const UtilityView = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const sectionRef = useRef(null)
    const {id} = useParams()
    const [value, setValue] = useState({
        billersCode: "",
        tariff_class: "",
        amount: ""

    })
    const {utilities, giftcards} =  useSelector(state => state.provision)
    const [btcValue, setBtcValue] = useState()
    const { priceList } = useSelector(state => state.billPurchase)


    const navigate = useNavigate()

    const selectedProvider = [...utilities]?.find(item => item.id == id)

    const serviceImage =  splitString(selectedProvider?.product?.provider)

    
    useEffect(()=> {
        dispatch(getProvisions())
    },[])


    useEffect(() => {
        if(location.hash === "#details"){
            sectionRef.current.scrollIntoView({behavior: "smooth" })

        }
    },[location])


     useEffect(()=> {
            if(selectedProvider){
              const provider =  splitString(selectedProvider?.product?.provider)
    
                dispatch(getPriceList({service_type: selectedProvider?.service_type, provider: provider}))
    
            }
        },[selectedProvider])


        const handleSubmit = () => {

            SET_LOADING(true)
    
            if(value.billersCode.trim() != "" && value.tariff_class.trim() !== ""){
                const data = {
                    ...value,
                     biller: selectedProvider?.product?.provider, 
                     service_type: selectedProvider?.service_type}

                     console.log(data)
            dispatch(createPurchaseOrder(data)).
                then(result => {
                    if(createPurchaseOrder.fulfilled.match(result)){
                        const data = result.payload.data
            
                        SET_LOADING(false)
                        navigate(`/utility-services/${id}/payment-details?transaction_id=${data.id}#details`)
                    }
                    else{
                        SET_LOADING(false) 
                        const data = result.payload.message
                        toast(data, {type: "error"})
                        // setMessage(data)
                        // setErr(true)
            
            
                    }
                })
    
        }else{
            message.error("form can not be blank")
        }
    
    
    
        }
 

            //    const handleCart = () => {
            //     console.log(value)
            //     if(!value ){
            //         console.error("Value is required and cannot be empty.");

            //         return
            //     }

            //     dispatch(ADD_TO_CART({
            //         id: selectedProvider.id, 
            //         provision: selectedProvider.provision,
            //         provider: selectedProvider.provider,
            //         image: selectedProvider.provider,
            //         value: value
            //     })
            // )
                

            //    }

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
            }, [])
            
            console.log(value)
  return (
    <div>
    <Header/>
    <section className="px-4">

    <div className="grid lg:grid-cols-2 gap-10 max-w-6xl m-auto py-10 ">
        <div className="p-10 bg-gray-200 flex justify-center items-center h-96">
            <img src={`/images/providers/${serviceImage}.webp`} alt="provider image"/>

        </div>
        <div>

            <div className="text-sm my-2 text-gray-600 font-medium">
                <p className="capitalize">Mobile Top Up &gt; {selectedProvider?.product?.provider}</p>
            </div>

            <h3 className="text-2xl font-medium">{selectedProvider?.name}</h3>
            
            <div className="notice border rounded-xl my-2 font-medium">
                <p className="text-base text-gray-700">
                {selectedProvider?.product?.info}    
                </p>
            </div>
            <p className="my-3">
                {selectedProvider?.product?.header_info}   
             </p>

             {selectedProvider?.service_type == "VTU" ?
                <div>
                <h3 className="text-xl font-semibold">Enter Amount </h3>

            <div className="flex flex-col gap-0">
                <FormInput type="nubmer"
                    // value={value}
                    onChange={(input)=> {

                        setValue({...value,
                        billersCode: input})}}
                    placeholder={"Enter Value"}
                    options={selectCurrencyOptions(selectedProvider?.currency)}
                    className={"whiteBg"}
                    />

                    <div className="flex-1 text-sm mt-2 from-gray-800">
                        Estimated price {btcValue?.calc}BTC
                    </div> 



                </div>
                </div>
                :
                <div>
                   <h3 className="text-xl font-semibold">Meter Code </h3>

                    <div className="flex flex-col gap-0">
                    <FormInput type="text"
                        value={value.billersCode}
                        onChange={(input)=> {
                            setValue({
                                ...value, 
                                billersCode: input.target.value
                            })
                        }}
                        placeholder={"Enter Value"}
                        className={"whiteBg"}
                        />

                </div>
                    <h3 className="text-xl font-semibold">Select Plan bundle </h3>

                    <div className="flex flex-col gap-0">
                        <PlainSelect
                            // value={value}
                            onChange={(val)=> {

                                const newAmount = priceList.find(item => item.value === val)
                                setValue({...value,
                                tariff_class: val,
                                amount: newAmount.amount

                            })
                            }}
                            placeholder={"Enter Value"}
                            options={priceList}
                            className={""}
                            />

                            <div className="flex-1 text-sm mt-2 from-gray-800">
                                Estimated price {btcValue?.calc}BTC
                            </div> 
                    </div>
                </div>
                 }
         

            <div>

                <div className="my-3">
                    <CartButton onClick={handleSubmit}>Buy Data</CartButton>
                </div>
                
                {/* <div className="my-4">
                    <label htmlFor="phone_no my-2">Number to Top-Up</label>
                    <input className="p-4 block border w-full rounded" placeholder="0801230456 7890"/>
                </div> */}

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

    <section id="details" ref={sectionRef} className="bg-white ">

        <div className="m-auto max-w-7xl shadow border px-4">
            <Outlet context={[id]}/>
        </div>

    </section>

    <section className="px-4 bg-gray-200 py-10">

        <div className="max-w-7xl m-auto bg-red-40">
        <h2 className="text-2xl my-4">More Products on BitBridge</h2>
        <div className="grid sm:grid-cols-4 gap-3">
            {giftcards.map(({id, product ,min_value, max_value, name, currency }) => (
                <ProductCard key={id} id={id} min_value={min_value} currency={currency} max_value={max_value} provider={product.provider} provision={name} />
            ))}

        </div>
        </div>

    </section>
    <section className="px-4 py-20">
        <h2 className="text-3xl font-semibold">How gift card work</h2>
        <div>
            
        </div>
    </section>
</div>
  )
}

export default UtilityView
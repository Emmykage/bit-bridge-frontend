import React from 'react'
import CartButton from '../button/CartButton'
import { ExclamationOutlined } from '@ant-design/icons'
import FormInput from '../formInput/FormInput'

const ProvisionDetails = ({selectedProvider}) => {
  return (
    <section className="px-4">

    <div className="grid lg:grid-cols-2 gap-10 max-w-6xl m-auto py-10 ">
        <div className="p-10 bg-gray-200 flex justify-center items-center h-96">
            <img src={`/images/providers/${serviceImage}.webp`} alt="provider image"/>

        </div>
        <div>

            <div className="text-sm my-2 text-gray-600 font-medium">
                <p className="capitalize">Mobile Top Up &gt; {selectedProvider?.product?.provider}</p>
            </div>

            <h3 className="text-2xl font-medium p-">{selectedProvider?.name}</h3>
            
            <div className="notice border rounded-xl my-2 p-3 font-medium">
                <p className="text-base text-gray-700">
                {selectedProvider?.product?.info}    
                </p>
            </div>
            <p className="my-3  p-3">
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
                        name={"biller"}
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

                <div>
                     
                <div className="my-0">

                    <FormInput
                        // value={}
                        onChange={(input) => {
                            setValue({
                                ...value,
                                email: input.target.value
                            })
                        }}
                    type="text" name="email" className="block w-full rounded" placeholder="Enter Email Address"/>
                </div>
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
                    <CartButton onClick={handleSubmit}>Subscribe</CartButton>
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
  )
}

export default ProvisionDetails

import { useEffect, useState } from 'react'
import NavButton from '../../../compnents/button/NavButton'
import { converter } from '../../../api/currencyConverter'
import AppModal from '../../../compnents/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../../../redux/actions/transaction'
import AddFund from '../../../compnents/addFund/AddFund'
import { createOrder } from '../../../redux/actions/order'
import { getProducts } from '../../../redux/actions/product'
const Bitcoin = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { crypto}  = useSelector(state => state.product)
    const coinType = "bitcoin"
    const address = "sdasffdfddggfh"

    const dispatch = useDispatch()
   
    // const normFile = (e) => {
  
    //   if (Array.isArray(e)) {
    //     return e;
    //   }
    //   return e?.fileList || [];
    // };

    const [currencyConversion, setCurrencyConversion] = useState()
    useEffect(()=> {

        ( async () => {
            const conversion =  await converter({toCurr: "ngn"})
            console.log(conversion)


            setCurrencyConversion(conversion)
        }

        )()

 

    },[])

    useEffect(()=> {
        dispatch(getProducts())
    },[])



        const handleSubmit = (values) => {
            const raw = {
                ...values,
                order_type: "sell",
                order_items_attributes: [
                    {
                        product_id: crypto?.id,
                        amount: values.amount,
                        provision_id: selectedProvider?.id
                    }
                ]
                
            }
            console.log(raw)
        
            dispatch (createOrder({
                ...values,
                order_type: "sell",
                order_items_attributes: [
                    {
                        product_id: crypto?.id,
                        amount: values.amount,
                        provision_id: selectedProvider?.id
                    }
                ]
                
            }))
            .then(result => {
                if(createTransaction.fulfilled.match(result)){
                    setIsModalOpen(false)
                }
            })
    
        }
        const selectedProvider = crypto?.provisions?.find(item => item.currency == "btc" )

    
  return (
    <>
    
    <div className='text-white min-h-96 p-4 sm:p-6 lg:p-10'>
        <h2 className='text- font-medium text-2xl text-center'>Sell Bitcoin</h2>
        <div>
            <p className='text-gray-400 my-8'>Transfer your BITCOIN to the address below to sell.</p>
            <div className='flex justify-between my-6 max-w-xl m-auto'>
                <div>
                    <p className='text-gray-400 text-sm'>NGN/USD</p>
                    <p className='text-lg font-semibold'>{currencyConversion?.calc}</p>
                </div>
                <div>
                    <p className='text-gray-400 text-sm'>NGN/Bitcoin</p>
                    <p className='text-lg font-semibold'>{currencyConversion?.naira}</p>
                </div>

                <div>
                    <p className='text-gray-400 text-sm'>USD/Bitcoin</p>
                    <p className='text-lg font-semibold'>{currencyConversion?.usd}</p>
                </div>



            </div>
            <div className='text-center'>
            <p className='my-8'>Payment Address</p>
            <p className='my-8'> Address</p>
                
                <NavButton onClick={() => setIsModalOpen(prev => !prev)}>Send Payment Proof </NavButton>
            </div>

            <div>
                <p> Note: </p>
                <ul className='list-disc list-inside max-w-md'>
                    <li>Send only BITCOIN to this address. Sending any other coin or token to this address may result in the loss of your deposit.</li>
                    <li>Your Deposit will automatically be credited to your account after 3 confirmations on the blockchain.                        </li> 
                </ul>
            </div>
        </div>
        
    </div>

    <AppModal isModalOpen={isModalOpen} handleCancel={()=> {setIsModalOpen(false)}}>
        <AddFund coin_type={coinType} handleSubmit={handleSubmit} address={address}/>
    </AppModal>
    </>
  )
}

export default Bitcoin
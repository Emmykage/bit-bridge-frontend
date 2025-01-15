
import { useEffect, useState } from 'react'
import NavButton from '../../../compnents/button/NavButton'
import { converter } from '../../../api/currencyConverter'

const Bitcoin = () => {
    const [currencyConversion, setCurrencyConversion] = useState()
    console.log("first")
    useEffect(()=> {

        ( async () => {
            const conversion =  await converter({toCurr: "ngn"})
            console.log(conversion)


            setCurrencyConversion(conversion)
        }

        )()

 

    },[])
  return (
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
                <NavButton>Generate Address </NavButton>
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
  )
}

export default Bitcoin
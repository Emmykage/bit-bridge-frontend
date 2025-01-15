import { useEffect, useState } from 'react'
import NavButton from '../../../compnents/button/NavButton'
import { converter } from '../../../api/currencyConverter'

const Dogecoin = () => {
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
    <div className='p-4 text-white min-h-96 sm:p-6 lg:p-10'>
    <h2 className='text- font-medium text-2xl text-center'>Sell Dogecoin</h2>
    <div>
        <p className='text-gray-400 my-8'>Transfer your BITCOIN to the address below to sell.</p>
        <div className='flex justify-between my-6 max-w-xl m-auto'>
            <div>
                <p className='text-gray-400 text-sm'>NGN/USD</p>
                <p className='text-lg font-semibold'>{currencyConversion?.calc}</p>
            </div>
            <div>
                <p className='text-gray-400 text-sm'>NGN/USD</p>
                <p className='text-lg font-semibold'>{currencyConversion?.calc}</p>
            </div>

            <div>
                <p className='text-gray-400 text-sm'>NGN/USD</p>
                <p className='text-lg font-semibold'>{currencyConversion?.calc}</p>
            </div>



        </div>
        <div className='text-center'>
            <p className='my-8'>Payment Address</p>
            <NavButton>Generate Address </NavButton>
        </div>
    </div>
    
</div>  )
}

export default Dogecoin
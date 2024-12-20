import { DeleteTwoTone } from '@ant-design/icons'
import Header from '../../compnents/header/Header'

const PaymentMenthod = () => {
  return (

    <div className='m-auto'>
     <Header/>
    
    <div className='py-2 my-10 max-w-7xl  shadow-sm p-2 m-auto'>
        <div className='grid grid-cols-checkout gap-20 '>
            <div className='bg-white p-4'>
                <h3 className='text-2xl mb-10 font-semibold'>order summary</h3>
          

            <div className='flex gap-4'>
                <div className='w-24 shrink-0 h-24 border rounded'>
                    <img src="#" alt="" />
                </div>
                <div>
                    <p className='text-base font-semibold'>Kinguin Games Store EUR International</p>
                    <p>€50.00 value</p>
                </div>
                <div className='flex-1'>
                    <div className='flex gap-4'>
                    <p>6</p>
                    <span>
                    <DeleteTwoTone />
                    </span>

                    </div>
                </div>
            </div>
            <div className='flex justify-between my-5 border-t py-5'>
                <span className='text-base font-semibold text-gray-600 '>
                    Total
                </span>
                <span>
                    25000
                </span>
            </div>
            
        </div>

        <div className=' p-4'>
        <div className='p-4 bg-white font-medium'>
            <h4 className='text-3xl my-2'>  select payment method  </h4>
            <h3>Account Balance</h3>
            <div>
                <p className='text-2xl font-bold text-green-950'>NGN</p>
               <p> NGN 500000</p> 
               <p>Not Enough balance</p>
            </div>

            <div className='py-6'>
                <button className='max-w-md text-center text-white py-2 w-full rounded-3xl bg-primary block m-auto' type='button'>Proceed</button>
            </div>



            </div>

        </div>
        </div>

    </div>
    </div>

  )
}

export default PaymentMenthod
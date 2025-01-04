import { DeleteTwoTone } from '@ant-design/icons'
import Header from '../../compnents/header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../redux/actions/order'
import { toast } from 'react-toastify'
import { nairaFormat } from '../../utils/nairaFormat'
import { useEffect } from 'react'
import { DELETE_CART } from '../../redux/app'
import { getWallet } from '../../redux/actions/wallet'

const PaymentMenthod = () => {
    const dispatch = useDispatch()
    const {totalAmount, cartItems} = useSelector(state => state.app)
    const {wallet} = useSelector(state => state.wallet)
    useEffect(() => {
        // dispatch(GET_CART())
        dispatch(getWallet())
    }, [])
    const refineCart = cartItems.map(item => (
        {
            quantity: 1,
            amount: item.value,
            product_id: item.id,
            // provision: null 

        }
    ))

    console.log(wallet?.balance)

    const handlePayment = () => {
        dispatch(createOrder({
        
                order_type: "buy",
                total_amount: totalAmount,
                order_items_attributes: refineCart
            }

        )).then(result => {

  
            if(createOrder.fulfilled.match(result)) {
                toast(result.message,{type: "success"})
            }else{
                toast(result?.message,{type: "error"})

            }
        }
        )
    }

    console.log(totalAmount, cartItems)

  return (

    <div className='m-auto '>
     <Header/>
    
    <div className='py-2 px-4 my-10 max-w-7xl  shadow-sm p-2 m-auto'>
        <div className='grid md:grid-cols-checkout gap-20 '>
            <div className='bg-white p-4'>
                <h3 className='text-2xl mb-10 font-semibold'>order summary</h3>
          
                {cartItems.map(item => (
                        <div key={item?.id} className='flex my-3 gap-4'>
                        <div className='w-16 h-16 md:w-24 shrink-0 md:h-24 border rounded'>
                            <img src={item.image} alt={item.provider} />
                        </div>
                        <div className='flex-1'>
                        <p className='text-base font-semibold'>{item?.provider}</p>
                        <p className='text-base font-semibold'>{item?.provision}</p>
                        <p className='font-medium text-gray-700'>{nairaFormat(item?.value)}</p>
                        </div>
                        <div className=''>
                            <div className='flex gap-4'>
                            <p>{item?.quantity ?? 1}</p>
                            <span onClick={() => dispatch(DELETE_CART(item?.id))}>
                            <DeleteTwoTone />
                            </span>

                            </div>
                        </div>
                    </div>
                ))}
        
            <div className='flex justify-between my-5 border-t py-5'>
                <span className='text-base font-semibold text-gray-900 '>
                    Total
                </span>
                <span className='font-semibold text-lg'>
                    {nairaFormat(totalAmount)}
                </span>
            </div>
            
        </div>

        <div className=' p-4'>
        <div className='p-4 bg-white font-medium'>
            <h4 className='text-xl font-semibold md:text-3xl my-2 '>  select payment method  </h4>
            <h3>Account Balance: </h3>
            <div>
                <p className='text-2xl font-bold text-green-950'>NGN</p>
               <p> {nairaFormat(0)}</p> 
               {totalAmount > wallet?.balance }
               <p className='opacity-40'>Not Enough balance</p>
            </div>

            <div className='py-6'>
                <button onClick={handlePayment} className='max-w-md text-center text-white py-2 w-full rounded-3xl bg-primary block m-auto' type='button'>Proceed</button>
            </div>



            </div>

        </div>
        </div>

    </div>
    </div>

  )
}

export default PaymentMenthod
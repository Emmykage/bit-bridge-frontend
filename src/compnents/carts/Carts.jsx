import PropTypes from 'prop-types'
import CartButton from '../button/CartButton'
import { useNavigate } from 'react-router-dom'

const Carts = ({items}) => {
    const navigate = useNavigate()
  return (
    <div className='bg-red- h-full justify-between flex flex-col'>
        <div>

        {items.map(({id,name, amount, quantity, image }) => (
            <div key={id} className='flex my-6 py-4 bg-yellow- border-b '>
                <div className='w-28 h-28  border rounded'>
                    <img src={image} alt="" className='w-full h-full'/>

                </div>
                <div className='px-3'>
                <p className='text-xl'> {name}</p>
                <p className='text-lg font-semibold'> NGN{amount}.00</p>
                <p className='font-bold text-gray-600'>{quantity}</p>

                </div>
                

            </div>
        ))}
    </div>


        <div className='border-t pt-7'>
        <CartButton 
        onClick={()=> navigate("/checkout/payment-method") }>
            To Checkout
        </CartButton>
        </div>
    
    </div>
  )
}
Carts.propTypes ={
items: PropTypes.array
}

export default Carts
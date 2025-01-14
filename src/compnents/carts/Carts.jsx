import PropTypes from 'prop-types'
import CartButton from '../button/CartButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'
import { DELETE_CART } from '../../redux/app'
import { splitString } from '../../utils'

const Carts = ({items}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(items)
  
  return (
    <div className='bg-red- h-full justify-between flex flex-col'>
        <div className='bg-red-'>

        {items.map(({id,provider, provision, value }) => (
            <div key={id} className='flex  my-6 py-4 bg-yellow px-2 border-b '>
                <div className='w-28 h-28  border rounded'>
                    <img src={`/images/providers/${splitString(provider)}.webp`} alt="" className='w-full h-full'/>

                </div>
                <div className='px-3 flex-1'>
                <p className='text-xl font-semibold uppercase '> {provider}</p>
                <p className='text-lg font-semibold text-gray-600'> {provision}</p>
                <p className='text-lg font-semibold'> NGN{value}.00</p>
                {/* <p className='font-bold text-gray-600'>{quantity}</p> */}

                </div>
                <div className=''>
                    <span onClick={
                        () => dispatch(DELETE_CART(id))
                    }>
                    <DeleteOutlined />
                    </span>
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
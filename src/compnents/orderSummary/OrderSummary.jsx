import { DeleteTwoTone } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { nairaFormat } from '../../utils/nairaFormat'
import { DELETE_CART } from '../../redux/app'
import { splitString } from '../../utils'
import PropTypes from 'prop-types'

const OrderSummary = ({cartItems, totalAmount}) => {
    const dispatch = useDispatch()

  return (
    <div className='bg-white p-4'>
    <h3 className='text-2xl mb-10 font-semibold'>order summary</h3>

    {cartItems?.map(item => (
            <div key={item?.id} className='flex my-3 gap-4'>
            <div className='w-16 h-16 md:w-24 shrink-0 md:h-24 border rounded'>
                <img src={`/images/providers/${splitString(item.provider)}.webp`} alt={item.provider} />
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
)
}

OrderSummary.proptypes = {
    cartItems: PropTypes.array,
    totalAmount: PropTypes.number
}

export default OrderSummary
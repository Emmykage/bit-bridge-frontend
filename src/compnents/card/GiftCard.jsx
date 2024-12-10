import NavButton from '../button/NavButton'
import PropTypes from 'prop-types'

const GiftCard = ({image, title}) => {
  return (
    <div className='border border-gray-100/20 rounded p-4'>
        <img src={image} alt="gift card one" className='borde rounded-lg'/>

        <div className='text-center'>
            <h5 className='text-lg font-semibold text-white my-5'>{title}</h5>
            <NavButton className='text-gray-200'> Buy gift card</NavButton>
        </div>
    </div>
  )
}

GiftCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    
}

export default GiftCard
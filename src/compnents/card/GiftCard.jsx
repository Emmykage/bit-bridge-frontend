import React from 'react'
import NavButton from '../button/NavButton'

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

export default GiftCard
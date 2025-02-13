import React from 'react'
import { splitString } from '../../utils'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const SimpleCard = ({provider }) => {
  const navigate = useNavigate()

    const selectedItem = splitString(provider)

  return (
    <div onClick={()=> navigate("/gift-cards")} className='border-gray-600/50 hover:shadow-xl transition-all duration-300 ease-out shadow-lg border  cursor-pointer rounded-lg overflow-hidden'>
         <img src={`/images/providers/${selectedItem}.webp`} className='h-full object-cover' alt={provider} />

      </div>
  )
}

SimpleCard.propTypes = {
    provider: PropTypes.string
}

export default SimpleCard
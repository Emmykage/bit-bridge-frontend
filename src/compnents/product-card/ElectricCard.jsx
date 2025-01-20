import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

const ElectricCard = ({id, description,name, image}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/buy-power/${id}/payment-form`)} key={id} className="cursor-pointer border p-5 rounded-lg flex gap-4">
    <img src={image} className="w-16 h-16" alt="name" />
    <div>
        <p>{name}</p>
        <p>{description}</p>

    </div>
</div>  )
}

ElectricCard.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
}

export default ElectricCard
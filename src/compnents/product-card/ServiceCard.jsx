
import {StarOutlined} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
const ServiceCard = ({id, provider, provision, image, value, linkTo }) => {
    const navigate = useNavigate()

  return (
    <div key={id} onClick={()=> {navigate(`/${linkTo}/${provider}`)} }>

    <div  className="h-52">
      <img src={image} alt="" className="w-full h-full" />

    </div>
    <div className="flex justify-between px-2">
      <div>
        <p className="text-lg font-medium">{provision}</p>
        <p className="text-base font-medium text-gray-600">{value}</p>
      </div>
      <div className="flex gap-3">
        <span className="font-semibold">4.7</span>
        <span><StarOutlined /></span>
      </div>
    </div>
  </div>
  )
}

ServiceCard.propTypes = {
    id: PropTypes.string,
    provider: PropTypes.string,
    provision: PropTypes.string,
    image: PropTypes.string,
    value: PropTypes.string,
    linkTo: PropTypes.string,
    
}

export default ServiceCard
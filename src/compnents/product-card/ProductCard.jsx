
import {StarOutlined} from "@ant-design/icons"
import { pickLogo } from '../../utils/ImagePicer'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
const ProductCard = ({id, provider, provision }) => {
    const navigate = useNavigate()

  return (
    <div key={id} onClick={()=> {navigate(`/phone-top-up/${provider}`)} }>

    <div  className="h-52">
      <img src={pickLogo(provider)} alt="" className="w-full h-full" />

    </div>
    <div className="flex justify-between px-2">
      <div>
        <p className="text-lg font-medium">{provision}</p>
        <p className="text-base font-medium text-gray-600">5 NGN - 5000NGN</p>
      </div>
      <div className="flex gap-3">
        <span className="font-semibold">4.7</span>
        <span><StarOutlined /></span>
      </div>
    </div>
  </div>
  )
}

ProductCard.propTypes = {
    id: PropTypes.string,
    provider: PropTypes.string,
    provision: PropTypes.string,
    
}

export default ProductCard
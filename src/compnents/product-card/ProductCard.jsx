
import {StarOutlined} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { nairaFormat } from "../../utils/nairaFormat"
import { splitString } from "../../utils"
const ProductCard = ({id, min_value, currency, max_value, provider, provision }) => {
    const navigate = useNavigate()

    console.log("first",max_value, min_value, currency)
    const imagePic = splitString(provider)

  return (
    <div key={id} onClick={()=> {navigate(`/phone-top-up/${id}`)} } className="border rounded pb-2 bg-white overflow-hidden">

    <div  className="h-52">
      <img src={`/images/providers/${imagePic}.webp`} alt="" className="w-full object-contain  h-full" />

    </div>
    <div className="flex justify-between px-2">
      <div>
      <p className="text-lg font-medium">{provision}</p>

      {/* <p className="text-base font-medium text-gray-600">{nairaFormat(min_value, currency) +  " - " + nairaFormat(max_value, currency)}</p> */}
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
    min_value: PropTypes.string,
    max_value: PropTypes.string,
    currency: PropTypes.string,
    
}

export default ProductCard
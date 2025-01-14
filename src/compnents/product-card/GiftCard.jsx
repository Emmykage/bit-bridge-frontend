import { useNavigate } from 'react-router-dom'
import {StarOutlined} from "@ant-design/icons"
import PropTypes from 'prop-types'
import { splitString } from '../../utils'

const GiftCard = ({id, provider, provision, value, feature, rate }) => {

    const giftcardImage = splitString(provider)
    const navigate = useNavigate()

  return (
        <div className='relative border rounded shadow hover:shadow-none overflow-hidden'  key={id} onClick={()=> {navigate(`/gift-cards/${id}`)} }>

            {feature && 

                <span className='bg-gray-800 ml-3  text-gray-200 rounded-3xl py-1 px-3 absolute top-5 left-0'>Feature</span>

            }
            <div  className="h-52">
            <img src={`/images/providers/${giftcardImage}.webp`} alt="" className="w-full h-full" />

            </div>
            <div className="flex justify-between px-2">
            <div>
            <p className="text-lg font-medium capitalize">{provider}</p>
            <p className="text-lg font-medium">{provision}</p>
            <p className="text-base font-medium text-gray-600">{value}</p>
            </div>
            <div className="flex gap-3">
                <span className="font-semibold">{rate ?? 4.7}</span>
                <span><StarOutlined /></span>
            </div>
            </div>
        </div>
  )
}

GiftCard.propTypes = {
    id: PropTypes.string,
    provider: PropTypes.string,
    provision: PropTypes.string,
    image: PropTypes.string,
    value: PropTypes.string,
    feature: PropTypes.bool
    
}


export default GiftCard
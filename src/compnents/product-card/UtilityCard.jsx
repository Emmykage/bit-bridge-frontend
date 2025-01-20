import { useNavigate } from 'react-router-dom'
import {StarOutlined} from "@ant-design/icons"
import PropTypes from 'prop-types'
import { splitString } from '../../utils'
import { nairaFormat } from '../../utils/nairaFormat'

const UtilityCard = ({id, provider, provision, currency, min_value, max_value, feature, rate }) => {

    const giftcardImage = splitString(provider)
    const navigate = useNavigate()

  return (
        <div className='relative border rounded shadow hover:shadow-none overflow-hidden'  key={id} onClick={()=> {navigate(`/utility-services/${id}`)} }>

            {feature && 

                <span className='bg-gray-800 ml-3  text-gray-200 rounded-3xl py-1 px-3 absolute top-5 left-0'>Feature</span>

            }
            <div  className="h-52">
            <img src={`/images/providers/${giftcardImage}.jpg`} alt="" className="w-full h-full" />

            </div>
            <div className="px-2">
                <div className='justify-between flex'>
                <p className="text-lg font-medium capitalize">{provider}</p>
                <div className="flex gap-3">
                    <span className="font-semibold">{rate ?? 4.7}</span>
                    <span><StarOutlined /></span>
                </div>

                </div>
                
                <div className='flex items-center w-full justify-between'>

                <p className="text-lg font-medium text-gray-500 capitalize">{provision}</p>
                {min_value && 
                    <p className="text-base font-medium text-gray-600">{`${nairaFormat(min_value, currency)} - ${nairaFormat(max_value, currency)}`}</p>
                }
                </div>
          
            </div>
        </div>
  )
}

UtilityCard.propTypes = {
    id: PropTypes.string,
    provider: PropTypes.string,
    provision: PropTypes.string,
    image: PropTypes.string,
    min_value: PropTypes.string,
    max_value: PropTypes.string,
    feature: PropTypes.bool,
    currency: PropTypes.string,
    rate: PropTypes.string
    
}


export default UtilityCard
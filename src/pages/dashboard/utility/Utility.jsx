import { useNavigate } from 'react-router-dom'
import UtilityCard from '../../../compnents/card/UtilityCard'

const Utility = () => {
    const navigate = useNavigate()
  return (

    <div className='px-4'>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>

            <div>
                <UtilityCard
                onClick={()=> {navigate("/dashboard/utilities/buy-power")}}
                provider={"power"}
                title={"Electric Bills"}
                btnText={"Select Provider"}
                    
                />
            </div>
            
            <div>
                <UtilityCard
                onClick={()=> {navigate("/dashboard/utilities/cable")}}
                provider={"cable"}
                title={"Cable Bills"}
                btnText={"Subscribe to Tv"}
                    
                />
            </div>
        </div>

    </div>
  )
}

export default Utility
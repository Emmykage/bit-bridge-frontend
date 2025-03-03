import { useDispatch, useSelector } from 'react-redux'
import PowerComponent from '../../../../compnents/powerComponents/PowerComponent'
import ElectricCard from '../../../../compnents/product-card/ElectricCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProvisions } from '../../../../redux/actions/provision'
import ProductCard from '../../../../compnents/product-card/ProductCard'

const CableUtilities = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {utilities} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  return (
    <div>
         <section className="py-10 px-4 my-10 bg-black">

<div className="max-w-7xl text-white m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {utilities.map(({id, description,name,  image}) => (
       <ProductCard 
       link={`/dashboard/utilities/cable/${id}/cableform`}
        key={id} id={id} 
        description={description} 
        provider={name}

        name={name} 
        isDetails={false}
        image={image} />
    ))}


</div>
</section> 
    </div>
  )
}

export default CableUtilities
import { useDispatch, useSelector } from 'react-redux'
import PowerComponent from '../../../../compnents/powerComponents/PowerComponent'
import ElectricCard from '../../../../compnents/product-card/ElectricCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProvisions } from '../../../../redux/actions/provision'
import ProductCard from '../../../../compnents/product-card/ProductCard'
import LoadingComp from '../../../../compnents/loader/LoadingComp'

const MobileTopUps = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {airtime, dataBundles, loading} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  return (
    <div>
         <section className="py-10 px-4 my-10 bg-black text-white">


<div>
  <h3 className='my-10'>
  Mobile Top Ups

  </h3>

  {loading ? <LoadingComp className={"bg-gray-900"}/> :

    <div className="max-w-7xl text-white m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {airtime.map(({id, description,name,  image}) => (
          <ProductCard 
          link={`/dashboard/utilities/mobile-top-up/${id}/mobileform`}
            key={id} id={id} 
            description={description} 
            provider={name}

            name={name} 
            isDetails={false}
            image={image} />
        ))}


    </div>

      }
</div>
<div>
  <h3 className='my-10'>
  Data Bundle

  </h3>
  {loading ? <LoadingComp className={"bg-gray-900"}/> :
<div className="max-w-7xl text-white m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {dataBundles.map(({id, description,name,  image}) => (
       <ProductCard 
       link={`/dashboard/utilities/mobile-top-up/${id}/mobileform`}
        key={id} id={id} 
        description={description} 
        provider={name}

        name={name} 
        isDetails={false}
        image={image} />
    ))}


</div>

  }
</div>

</section> 
    </div>
  )
}

export default MobileTopUps
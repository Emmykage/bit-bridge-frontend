import Header from "../../compnents/header/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import UtilityCard from "../../compnents/product-card/UtilityCard"
import img from "../../assets/images/banners/buy-power.jpg"
import { getProvisions } from "../../redux/actions/provision"
import { useNavigate } from "react-router-dom"

const UtilityServices = () => {
  const dispatch = useDispatch()
  const {utilities} =  useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  const navigate = useNavigate()

  // const utility = [...services] 

  console.log(utilities)

  return (
    <div>
        
        <Header/>
          <section className="py-10">
                <div className="max-w-7xl m-auto border gap-4 p-4 rounded-2xl grid md:grid-cols-2">
                  <div>
                    <h2 onClick={() => navigate("/buy-power")} className="text-5xl hover:text-blue-900 cursor-pointer font-bold text-gray-700 leading-tight">
                    Buy Power with your Crypto wallet with Ease
        
                    </h2>
                    <p className="my-4 text-lg font-medium text-gray-600 text-lef">
                    Crypto conversion made easy - conver your crypto to cash in one simple step Pay with crypto and stay connected while traveling!
                    </p>
                  </div>
                  <div>
                      <div className="h-96">
                        <img src={img} alt="" className="w-full h-full rounded-lg" />
                      </div>
                  </div>
                </div>
              </section>
                    
              <section className="py-10 px-4">

                <div className="grid max-w-7xl m-auto bg-gray-50 gap-x-3 gap-y-5 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-3">



                      {utilities.length > 0 ?  utilities.map(({id, value, provider,image, provision})  => (

                        <UtilityCard key={id} id={id} linkTo={`utility-services`} image={image} value={value} provider={provider}  provision={provision} />

                      ) ) : 
                      <div className="py-5"> 
                        <h3 className="text-2xl text-center font-semibold">No Utitilities Found </h3>
                        
                      </div>}



                </div>
              </section>
    </div>
  )
}

export default UtilityServices
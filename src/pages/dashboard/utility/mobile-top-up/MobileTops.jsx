import { useDispatch, useSelector } from 'react-redux'
import PowerComponent from '../../../../compnents/powerComponents/PowerComponent'
import ElectricCard from '../../../../compnents/product-card/ElectricCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProvisions } from '../../../../redux/actions/provision'
import ProductCard from '../../../../compnents/product-card/ProductCard'
import LoadingComp from '../../../../compnents/loader/LoadingComp'
import MobileTopUpViewComponents from '../../components/MobileTopUpViewComponent'

const MobileTopUps = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {airtime, dataBundles, loading} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  return (
    <MobileTopUpViewComponents/>
  )
}

export default MobileTopUps
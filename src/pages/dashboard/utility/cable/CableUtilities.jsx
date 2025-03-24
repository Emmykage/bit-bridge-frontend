import { useDispatch, useSelector } from 'react-redux'
import PowerComponent from '../../../../compnents/powerComponents/PowerComponent'
import ElectricCard from '../../../../compnents/product-card/ElectricCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProvisions } from '../../../../redux/actions/provision'
import ProductCard from '../../../../compnents/product-card/ProductCard'
import CableTvComponents from '../../components/CableTVCOmpoent'

const CableUtilities = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {utilities} = useSelector(state => state.provision)
  useEffect(()=> {
    dispatch(getProvisions())
  },[])
  return (
    <CableTvComponents/>
  )
}

export default CableUtilities
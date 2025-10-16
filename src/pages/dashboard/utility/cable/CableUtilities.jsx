import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProvisions } from '../../../../redux/actions/provision'
import CableTvComponents from '../../components/CableTVCOmpoent'

const CableUtilities = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProvisions())
  }, [])
  return <CableTvComponents />
}

export default CableUtilities

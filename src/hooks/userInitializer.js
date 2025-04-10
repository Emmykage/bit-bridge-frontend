import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../redux/actions/auth';



export const useInitializeData = () => {
    const {  user, logged } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(userProfile());
    }, []);
  
  };

export default useInitializeData
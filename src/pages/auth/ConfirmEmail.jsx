
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userConfirmation, userLogin } from '../../redux/actions/auth';
import { SET_LOADING } from '../../redux/app';
import { useEffect } from 'react';
  
  const ConfirmEmail = () => {
    const dispatch = useDispatch()
   
    const [query] = useSearchParams()
    const {user} = useSelector(state => state.auth)

    const token = query.get("confirmation_token")

    const navigate = useNavigate()
    useEffect(()=> {
      if(token){
        window.location.href = `https://bitbridgeglobal-fa54ecb89f7d.herokuapp.com/confirmation?confirmation_token=${token}`

      }
      // dispatch(userConfirmation(token)).then(result => {
      //   if(userConfirmation.fulfilled.match(result)){
      //     dispatch(SET_LOADING(false))
      //     // navigate("/dashboard/home")
      //   }else{
      //     dispatch(SET_LOADING(false))
      //     // navigate("/auth/signin")
      //   }
      // })
    


    }, [])



    
    console.log(user, token)
    
    return (
      <div className='h-screen bg-gray-900 w-full flex flex-col justify-center items-center gap-4'>
        <h2 className='text-3xl text-center text-purple-200 50 font-semibold'>Confirm Email</h2>
        {user?.confirmed_at ? <p className='text-white text-lg'>Email has been confirmed</p> : <p className='text-white text-lg'>Email Confirmation has been sent to {user?.email} </p>}
        <div>
          <img src="/images/email.png" alt="" className='h-60 m-auto' />

        </div>
        {/* {user?.confirmed_at && storedToken} */}
        <button className='bg-purple-950 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-all duration-300'
        disabled={user?.confirmed_at !== null}
        onClick={() => {
          navigate("/dashboard/home")
        }}
        >
          Continue to Dashboard 
        </button>
        <p className='text-gray-500 text-sm'>If you have not received a confirmation email, please check your spam folder or <NavLink to="/send-confirmation" className='text-purple-200 font-semibold'>resend confirmation</NavLink>.</p>
        
     
      </div>
    );
  }

  // };
  
 


export default ConfirmEmail
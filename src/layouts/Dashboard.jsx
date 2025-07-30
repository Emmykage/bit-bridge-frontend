import { HomeOutlined, LoginOutlined, MenuUnfoldOutlined, WalletOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { userLogout, userProfile } from '../redux/actions/auth';
import DropDown from '../compnents/dropDown/DropDown';
import logo from "../assets/logos/logo-mod.png"
import { LuUtilityPole } from 'react-icons/lu';
import { getWallet } from '../redux/actions/wallet';
import DrawerModal from '../compnents/drawer/Drawer';
import { SET_LOADING } from '../redux/app';
import LoaderPage from '../compnents/loader/LoaderPage';
import AppModal from '../compnents/modal/Modal';
import { Button, Form } from 'antd';
import FormInput from '../compnents/formInput/FormInput';
import { createAccount } from '../redux/actions/account';

const DashboardLayout = () => {

    const dispatch = useDispatch()
    const sideNavRef = useRef(null)
    const menuRef = useRef(null)
    // const {wallet} = useSelector(state => state.wallet)
    const {user, loading} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const normal = "flex justify-center items-center flex-col"
    const active = "flex text-alt justify-center items-center flex-col"
    const [showMenu, seTShowMenu] = useState(false)
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const location = useLocation()
 

    useEffect(()=> {
        if(user && !user.account){
            setOpenAlert(true)
        }
    },[user])
    // useEffect(()=> {
    //    if(!loading && !user){

    //     return <Navigate to="/login" state={{from: location }} replace/>
    //     // navigate('/login')
    //    }

    // },[user, loading])


    console.log(user, openAlert, "user in dashboard layout")

  
    const closeNav = (e) => {
        if(sideNavRef.current && !sideNavRef.current.contains(e.target) && !menuRef.current.contains(e.target)){

            seTShowMenu(false)
        }

    }


    useEffect(()=> {
        document.addEventListener("mousedown", closeNav)


        return () => {
            document.removeEventListener("mousedown", closeNav)
        }

    

    },[closeNav, sideNavRef])

        

    useEffect(()=>{
        dispatch(getWallet())
    }, [])

   


    if(loading) {
        return <><LoaderPage/></>;
    }

      
    if(!loading && !user){
        return <Navigate to="/login" state={{from: location }} replace/>
    }   

        const handleSubmit = (values) => {
            dispatch(SET_LOADING(true))
            dispatch(createAccount({account: values})).unwrap().then(()=> {
                dispatch(userProfile());
                dispatch(SET_LOADING(false))
                 setOpenAlert(false)

                setOpen(false)}
            ).catch((error) => {
                dispatch(SET_LOADING(false))
                console.error("Error creating account:", error);
            })
            
        }


    

  return (
    <div className='relative bg-gray-00 h-screen bg-black/90'>
        <div className='max-w-[1500px] m-auto flex flex-col overflow-hidden h-screen'>

        <header className='flex justify-between items-center bg-black gap-4 rounded md:py-10 py-5 px-7  top-0'>
            <span ref={menuRef} className='lg:hidden'  onClick={()=> {
                setOpen(prev => !prev)}}>
            <MenuUnfoldOutlined className='text-alt text-2xl' />
            </span>
            <NavLink className={"text-3xl text-white flex1"}>
                <img src={logo} alt='logo' className='h-10 md:14 w- object-cover border' />
            </NavLink>
        <div className='md:flex flex- w-full max-w-3xl  items-center justify-between hidden w-ful  bg-back text-gray-200  '>
            <ul className='flex gap-9'>
                <li><NavLink to={"/dashboard/home"} className={({isActive})=>  isActive ? active : normal}><HomeOutlined className='text-2xl' /> Home</NavLink></li>
                <li><NavLink to={"/dashboard/wallet"} className={({isActive})=>  isActive ? active : normal}><WalletOutlined className='text-2xl' /><span>Wallet</span></NavLink></li>
                {/* <li><NavLink to={"/dashboard/gift-cards"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Gift Card</NavLink></li> */}
                <li><NavLink to={"/dashboard/utilities"} className={({isActive})=>  isActive ? active : normal}><LuUtilityPole className='text-2xl'/> Utility</NavLink></li>
                <li><NavLink to={"/dashboard/transactions/orders"} className={({isActive})=>  isActive ? active : normal}><SignalCellularAltIcon className='text-6xl' />Transaction</NavLink></li>
                {/* <li><NavLink to={"/dashboard/crypto-sell/bitcoin"} className={({isActive})=>  isActive ? active : normal}><DollarOutlined className='text-2xl text-nowrap' /> Crypto Sell</NavLink></li> */}

            </ul>
            
            <DropDown/>
        </div>

        <div className='flex gap-4 '>
        
        </div>
        </header>
        <div className=' flex overflow-hidden mt-0 h-full flex-1 w-full  md:px-10'>

            <div className='relative bg-red-50'>

                <DrawerModal open={open} onClose={() => {setOpen(false)}}  >




            {/* <aside ref={sideNavRef} className={`${showMenu ? "w-max px-1.5" : "w-0 px-0"} shrink-0 sticky h-full top-0 left-0 overflow-hidden transition-all duration-200 ease-linear bg-zinc-800 md:hidden py-10 text-gray-300`}> */}
            <ul className='flex flex-col gap-9'>
                <li onClick={() => setOpen(false)}><NavLink to={"/dashboard/home"} className={({isActive})=>  isActive ? active : normal}><HomeOutlined className='text-2xl' /> Home</NavLink></li>
                <li onClick={() => setOpen(false)}><NavLink to={"/dashboard/wallet"} className={({isActive})=>  isActive ? active : normal}><WalletOutlined className='text-2xl' /><span>Wallet</span></NavLink></li>
                {/* <li><NavLink to={"/dashboard/gift-cards"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Gift Card</NavLink></li> */}
                <li onClick={() => setOpen(false)}><NavLink to={"/dashboard/utilities"} className={({isActive})=>  isActive ? active : normal}><LuUtilityPole className='text-2xl'/> Utility</NavLink></li>
                <li><NavLink to={"/dashboard/transactions/orders"} className={({isActive})=>  isActive ? active : normal}><SignalCellularAltIcon className='text-6xl' />Transaction</NavLink></li>
                {/* <li><NavLink to={"/dashboard/crypto-sell/bitcoin"} className={({isActive})=>  isActive ? active : normal}><DollarOutlined className='text-2xl' /> Crypto Sale </NavLink></li> */}
                <li ><NavLink onClick={() => 
                                    dispatch(userLogout()).then(result => {
                                        dispatch(SET_LOADING(true))

                                        if(userLogout.fulfilled.match(result)){
                                            dispatch(SET_LOADING(false))
                                            setOpen(false)
                                        }else{
                                            dispatch(SET_LOADING(false))

                                        }
                                    })} to={"/"} className={({isActive})=>  isActive ? active : normal}><LoginOutlined className='text-2xl' /> Log Out</NavLink></li>

            </ul>

            {/* </aside> */}

            </DrawerModal>

            </div>

             <div className='md:mt-10 mt-4  w-full flex-1 overflow-y-auto '>
            <Outlet/>

            </div>
        </div>     
      
    </div>

    <AppModal
    title={"Create Account Number"}
    handleCancel={() => setOpenAlert(false)}
    isModalOpen={openAlert}>
        <Form
        layout='vertical'
        initialValues={{
            bvn: "",
            currency: "ngn",
            vendor: "monniepoint",
            account_name: ""

        }} 
          onFinish={(values) =>{
            handleSubmit({...values,
            currency: "ngn",
            vendor: "moniepoint",
            })
      }}
      >
          <FormInput required={true} className="add-fund" name="bvn" type='text' label={`BVN`}/>
          
             <Form.Item label={null}>       
    
                <Button className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
                    Generate Account
                </Button>
            </Form.Item>


        </Form>

    </AppModal>
    </div>

  )
}
DashboardLayout.propTypes = {
    children: PropTypes.node
}

export default DashboardLayout
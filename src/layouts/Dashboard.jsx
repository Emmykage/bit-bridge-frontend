import { DollarOutlined, GiftOutlined, HomeOutlined, LoginOutlined, MenuUnfoldOutlined, WalletOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWallet } from '../redux/actions/wallet';
import { userLogout } from '../redux/actions/auth';
import DropDown from '../compnents/dropDown/DropDown';
import logo from "../assets/logos/logo-mod.png"
import { LuUtilityPole } from 'react-icons/lu';

const DashboardLayout = () => {

    const dispatch = useDispatch()
    // const {wallet} = useSelector(state => state.wallet)
    const {user, loading} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const normal = "flex justify-center items-center flex-col"
    const active = "flex text-alt justify-center items-center flex-col"
    const [showMenu, seTShowMenu] = useState(false)
    useEffect(()=>{
        dispatch(getWallet())
    }, [])

    useEffect(()=> {
       if(!loading && !user){
        navigate('/login')
       }
    },[user, loading])

  return (
    <div className='relative bg-gray-00 min-h-screen bg-black/90'>
        <div className='max-w-[1500px] m-auto'>

        <header className='flex justify-between items-center bg-black gap-4 rounded py-10 px-7  top-0'>
            <span className='lg:hidden ' onClick={()=> seTShowMenu(prev => !prev)}>
            <MenuUnfoldOutlined className='text-alt text-2xl' />
            </span>
            <NavLink className={"text-3xl text-white flex1"}>
                <img src={logo} alt='logo' className='h-14 w- object-cover border' />
            </NavLink>
        <div className='md:flex flex- w-full max-w-3xl  items-center justify-between hidden w-ful  bg-back text-gray-200  '>
            <ul className='flex gap-9'>
                <li><NavLink to={"/dashboard/home"} className={({isActive})=>  isActive ? active : normal}><HomeOutlined className='text-2xl' /> Home</NavLink></li>
                <li><NavLink to={"/dashboard/wallet"} className={({isActive})=>  isActive ? active : normal}><WalletOutlined className='text-2xl' /><span>Wallet</span></NavLink></li>
                <li><NavLink to={"/dashboard/gift-cards"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Gift Card</NavLink></li>
                <li><NavLink to={"/dashboard/utilities"} className={({isActive})=>  isActive ? active : normal}><LuUtilityPole className='text-2xl'/> Utility</NavLink></li>
                <li><NavLink to={"/dashboard/transactions/orders"} className={({isActive})=>  isActive ? active : normal}><SignalCellularAltIcon className='text-6xl' />Transaction</NavLink></li>
                <li><NavLink to={"/dashboard/crypto-sell/bitcoin"} className={({isActive})=>  isActive ? active : normal}><DollarOutlined className='text-2xl text-nowrap' /> Crypto Sell</NavLink></li>

            </ul>
            
            <DropDown/>
        </div>

        <div className='flex gap-4 '>
        
        </div>
        </header>
        <div className='min-h-96 flex overflow-hidden'>
            <aside className={`${showMenu ? "w-max px-3" : "w-0 px-0"} shrink-0 overflow-hidden transition-all duration-200 ease-linear bg-zinc-800 md:hidden py-10 text-gray-300`}>
            <ul className='flex flex-col gap-9'>
                <li><NavLink to={"/dashboard/home"} className={({isActive})=>  isActive ? active : normal}><HomeOutlined className='text-2xl' /> Home</NavLink></li>
                <li><NavLink to={"/dashboard/wallet"} className={({isActive})=>  isActive ? active : normal}><WalletOutlined className='text-2xl' /><span>Wallet</span></NavLink></li>
                <li><NavLink to={"/dashboard/gift-cards"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Gift Card</NavLink></li>
                <li><NavLink to={"/dashboard/utility"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Utilities</NavLink></li>
                <li><NavLink to={"/dashboard/transactions/orders"} className={({isActive})=>  isActive ? active : normal}><SignalCellularAltIcon className='text-6xl' />Transaction</NavLink></li>
                <li><NavLink to={"/dashboard/crypto-sell/bitcoin"} className={({isActive})=>  isActive ? active : normal}><DollarOutlined className='text-2xl' /> Crypto Sell</NavLink></li>
                <li><NavLink onClick={() => 
                                    dispatch(userLogout())} to={"/"} className={({isActive})=>  isActive ? active : normal}><LoginOutlined className='text-2xl' /> Log Out</NavLink></li>

            </ul>

            </aside>
            <div className='mt-10  w-full flex-1'>
            <Outlet/>

            </div>
        </div>     
      
    </div>
    </div>

  )
}
DashboardLayout.propTypes = {
    children: PropTypes.node
}

export default DashboardLayout
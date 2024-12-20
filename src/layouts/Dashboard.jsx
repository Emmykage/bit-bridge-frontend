import { DollarOutlined, GiftOutlined, HomeOutlined, WalletOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWallet } from '../redux/actions/wallet';
const DashboardLayout = () => {

    const dispatch = useDispatch()
    const {wallet} = useSelector(state => state.wallet)
    const normal = "flex justify-center items-center flex-col"
    const active = "flex text-alt justify-center items-center flex-col"

    useEffect(()=>{
        dispatch(getWallet())
    }, [])


    console.log(wallet)
  return (
    <div className='relative bg-gray-00 min-h-screen bg-black/90'>
        <div className='max-w-[1500px] m-auto'>

        <header className='flex justify-between bg-black rounded py-10 px-7  top-0'>
            <NavLink className={"text-3xl text-white"}>
                BitBridge
            </NavLink>
        <div className=' w-ful bg-back text-gray-200  '>
            <ul className='flex gap-9'>
                <li><NavLink to={"/dashboard/home"} className={({isActive})=>  isActive ? active : normal}><HomeOutlined className='text-2xl' /> Home</NavLink></li>
                <li><NavLink to={"/dashboard/wallet"} className={({isActive})=>  isActive ? active : normal}><WalletOutlined className='text-2xl' /><span>Wallet</span></NavLink></li>
                <li><NavLink to={"/dashboard/gift-cards"} className={({isActive})=>  isActive ? active : normal}><GiftOutlined className='text-2xl'/> Gift Card</NavLink></li>
                <li><NavLink to={"/dashboard/transactions/orders"} className={({isActive})=>  isActive ? active : normal}><SignalCellularAltIcon className='text-6xl' />Transaction</NavLink></li>
                <li><NavLink to={"/dashboard/crypto-sell"} className={({isActive})=>  isActive ? active : normal}><DollarOutlined className='text-2xl' /> Crypto Sell</NavLink></li>

            </ul>
            

        </div>

        <div className='flex gap-4 '>
            {/* <NavLink className={"text-nowrap"}>
                Withdraw now
            </NavLink>
            <span>
                User
            </span> */}
        </div>
        </header>
        <div className=' my-10 min-h-96'>
            <Outlet/>
        </div>     
        <div className='h-10 w-full bg-black'>
            {/* hhshd */}

        </div>
    </div>
    </div>

  )
}
DashboardLayout.propTypes = {
    children: PropTypes.node
}

export default DashboardLayout
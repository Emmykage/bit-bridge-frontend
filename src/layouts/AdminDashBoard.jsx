import { BellOutlined,  InboxOutlined, MenuOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWallet } from '../redux/actions/wallet';
import img from "../assets/images/user_img.jpg"
import "./styles.scss"
import LoaderPage from '../compnents/loader/LoaderPage';
import { SiMoneygram } from 'react-icons/si';
import { MdMiscellaneousServices, MdProductionQuantityLimits } from 'react-icons/md';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoPricetagOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
const AdminDashboardLayout = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const {user, loading } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getWallet());
    }, [dispatch]);


    useEffect(() => {
        if (user && !user.admin) {
            toast("No Authorization", {type: "error"})
            navigate("/");
        }
    }, [user, navigate]);

    if(loading){
        return(
            <LoaderPage/>
        )
    }

  return (
    <div className='admin relative flex h-screen'>
        <aside className={`${toggleNav ? "w-72" : "w-0 md:w-28"} h-full overflow-hidden px-0 transition-all ease-linear duration-150 shrink-0`}>
            <div className='flex items-center py-7 bg-blue-800/60'>
                <img src={img} alt="" className='w-28 h-28 rounded-full'/>
                <div className='text-white text-center flex-1'>
                    <p className='text-2xl font-semibold'>John David</p>
                    <p className='text-green-600'>Online</p>
                </div>
            </div>

            
            <ul className='text-white font-semibold mt-10 px-1'>
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/dashboard"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-2 justify-center items-center`}> 
                <LuLayoutDashboard  className='text-2xl'/>
                <span>
                Dashboard
                </span>

                 </NavLink>       </li>
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/purchases"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 justify-center items-center`}>
                <MdProductionQuantityLimits className='text-2xl' />
                Purchases </NavLink>       </li>
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/products"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 justify-center items-center`}> 
                <IoPricetagOutline className='text-2xl'/>
                 Products </NavLink>       </li>
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/services"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 justify-center items-center`}> 
                <MdMiscellaneousServices className='text-2xl'/>
                Services </NavLink>       </li> 
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/transactions"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 justify-center items-center`}> 
                <SiMoneygram className='text-2xl'/>
                Deposits </NavLink>       </li> 
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/users"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 justify-center items-center`}> 

                <UsergroupAddOutlined className='text-2xl'/>
                <span>Users</span>
                
                 </NavLink>       </li> 
                </ul>

        </aside>
        <div className='relative  w-full m-0'>


        <header className='flex z-50 bg-white absolute shadow px-3 top-0 left-0 w-full justify-between rounded py-10 md:px-7 '>
            <span
            onClick={()=> {setToggleNav(prev => !prev)}} className='bg-alt flex justify-center items-center w-10 h-10'>
            <MenuOutlined />
            </span>
            <NavLink className={"text-3xl text-gray-900 font-bold"}>
                BitBridge
            </NavLink>
            <div className=' w-ful  text-gray-200 justify-between  '>
                <ul className='flex gap-9'>
                    <li><NavLink to={"#"} className={"text-gray-900"}> <BellOutlined /></NavLink></li>
                    <li><NavLink to={"#"} className={"text-gray-900"}><InboxOutlined /></NavLink></li>
                
                </ul>
                

            </div>

        </header>
        <div className=' bg-gray-200 overflow-y-scroll pt-40 min-h-96 justify-between h-full px-10'>
            <Outlet/>
        </div>     
        
    </div>
    </div>

  )
}

// AdminDashboardLayout.propTypes = {
//     children: PropTypes.node
// }

export default AdminDashboardLayout
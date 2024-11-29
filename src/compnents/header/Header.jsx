import { NavLink } from 'react-router-dom'
import SearchField from '../serachField/SearchField'
import Nav from '../nav/Nav'
import { MenuUnfoldOutlined } from '@ant-design/icons';

import logo from "../../assets/logos/logo-mod.png"
import { Button } from 'antd';
const Header = () => {
  return (
    <header className=' py-4 bg-white px-3'>
      <div className='max-w-app-layout m-auto '>


        <div className='flex gap-3 flex-wrap justify-between items-center'>

        <Button className='md:hidden ' shape="circle" icon={<MenuUnfoldOutlined />} />
        
          <NavLink className={"text-3xl font-semibold"}>
            <img src={logo} alt='logo' className='h-14 w- object-cover border' />

          </NavLink>
          <SearchField className={"w-full max-w-md bg-green-400 flex-"}/>

          <div className='flex'>
            <NavLink className={"font-semibold"}>Login</NavLink>
          </div>

         
        </div>
        <div className='max-w-7x m-auto bg-green-'>
           <Nav/>
        </div>
        </div>


    </header>
  )
}

export default Header
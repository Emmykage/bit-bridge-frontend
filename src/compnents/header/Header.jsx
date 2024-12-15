import { NavLink } from 'react-router-dom'
import SearchField from '../serachField/SearchField'
import Nav from '../nav/Nav'
import { MenuUnfoldOutlined, QuestionCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import logo from "../../assets/logos/logo-mod.png"
import { Button } from 'antd';
import { useState } from 'react';
const Header = () => {
  const [toggleNav, setToggle] = useState(false)

  return (
    <header className=' py-4 bg-white px-0 relative'>
      <div className='max-w-app-layout m-auto px-4 '>


        <div className='flex gap-3 flex-wrap justify-between items-center'>

        <Button onClick={() => setToggle(prev => !prev)} className='md:hidden ' shape="circle" icon={<MenuUnfoldOutlined />} />
        
          <NavLink className={"text-3xl font-semibold"}>
            <img src={logo} alt='logo' className='h-14 w- object-cover border' />

          </NavLink>
          <SearchField className={"w-full max-w-md flex-"}/>

          <div className='flex items-center gap-4'>
            <NavLink to={"/"} className={"font-semibold hover:bg-gray-800 hover:text-gray-200  border flex gap-3 py-2 px-4 rounded-3xl"}>
              <QuestionCircleOutlined />
              Help
            </NavLink>

            <NavLink className={"#"}>
              <ShoppingCartOutlined />
            </NavLink>


              <NavLink to={"/login"} className={"font-semibold"}>Login</NavLink>
              <NavLink to={"/dashboard/home"}>Account</NavLink>
          </div>

         
        </div>
        <div className='max-w-7x m-auto'>
           <Nav open={toggleNav} setToggle={setToggle}/>
        </div>
        </div>


    </header>
  )
}

export default Header
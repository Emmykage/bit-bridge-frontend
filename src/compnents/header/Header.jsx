import { NavLink } from 'react-router-dom'
import SearchField from '../serachField/SearchField'
import Nav from '../nav/Nav'
import { MenuUnfoldOutlined, QuestionCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import logo from "../../assets/logos/logo-mod.png"
import { Badge, Button, Form } from 'antd';
import { useEffect, useState } from 'react';
import DrawerModal from '../drawer/Drawer';
import Carts from '../carts/Carts';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART, SET_LOADING } from '../../redux/app';
import { userLogin, userLogout } from '../../redux/actions/auth';
import FormInput from '../formInput/FormInput';
import ClassicBtn from '../button/ClassicButton';
import { toast } from 'react-toastify';
const Header = () => {
  const [toggleNav, setToggle] = useState(false)
  const {cartItems} = useSelector(state => state.app)
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(GET_CART())
  },[])

  return (
    <>
    

    <DrawerModal open={open} onClose={()=> {setOpen(!open)}}>
      <Carts items={cartItems} />
    </DrawerModal>
    
    <header className=' pt-4 bg-white px-0 relative shadow'>
      <div className='max-w-app-layout m-auto px-4 '>


        <div className='flex gap-3 flex-wrap justify-between items-center'>

        <Button onClick={() => setToggle(prev => !prev)} className='md:hidden ' shape="circle" icon={<MenuUnfoldOutlined />} />
        
          <NavLink className={"text-3xl font-semibold"}>
            <img src={logo} alt='logo' className='h-14 w- object-cover border' />

          </NavLink>
          <SearchField className={"w-full max-w-md flex-"}/>

          <div className='flex items-center gap-4 md:justify-end justify-between w-full'>
            <NavLink to={"/"} className={"font-semibold hover:bg-gray-800 hover:text-gray-200  border flex gap-3 py-2 px-4 rounded-3xl"}>
              <QuestionCircleOutlined />
              Help
            </NavLink>
            <Badge count={cartItems.length} showZero>
                    <Button onClick={() => setOpen(true)} type="default" shape="circle" icon={<ShoppingCartOutlined />} size="middle" />
          </Badge>
              {user ? 
                  <NavLink onClick={() => 
                    dispatch(userLogout())}
                  to={"/"} className={"font-semibold"}>Log Out</NavLink>
                  :
                  // <NavLink to={"/login"} className={"font-semibold"}>Login</NavLink>
                  <div className='relative z-10 '>
                      <button onClick={() => setShowLogin(prev => !prev)} to={"/login"} className={"font-semibold"}>Login</button>
                      <div className={`${showLogin ? "block" : "hidden"} absolute  py-4 w-60 group-hover:block right-0`}>
                        <div className='p-2 z-50 bg-gradient-to-b from-gray-800 to-gray-900 -gray-900 rounded'>

                        <Form
                        initialValues={{
                          email: "",
                          password: ""
                        }}
                        onFinish={(values)=> {
                          dispatch(SET_LOADING(true))

                          dispatch(userLogin({user: values})).then(result =>
                          {
                            if(userLogin.fulfilled.match(result)){
                              dispatch(SET_LOADING(false))
                              setShowLogin(false)

                               }
                            else  if(userLogin.rejected.match(result)){
                              dispatch(SET_LOADING(false) )
                              toast(result.payload.message, {type: "error"})
                
                            }
                          }
                
                      
                          )                        }}>
                        <FormInput name={"email"} placeholder={"Email"}/>
                        <FormInput name={"password"} placeholder={"**********"}/>
                        <ClassicBtn htmlType={"submit"} className={"w-full"}>Sign In</ClassicBtn>
                        </Form>
                        <NavLink to={"/signup"} className='text-alt block text-center'>Sign up</NavLink>
                      </div>
                      </div>



                  </div>

              }
                {user &&   <NavLink to={"/dashboard/home"}>Account</NavLink>}
                {/* <NavLink to={"/dashboard/home"}>Account</NavLink> */}

          </div>

         
        </div>
        <div className='max-w-7x m-auto'>
           <Nav open={toggleNav} setToggle={setToggle}/>
        </div>
        </div>


    </header>

    </>

  )
}

export default Header
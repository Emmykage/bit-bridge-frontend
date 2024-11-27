import React from 'react'
import { NavLink } from 'react-router-dom'
import TopContent from './topContent'

const Header = () => {
  return (
    <header className='px-4 py-4'>
        {/* <TopContent/> */}
        <div className='max-w-7xl m-auto'>
        <div>
            <NavLink to={"/"} className={"text-3xl font-medium"}>
            BitbridgeGlobal
            </NavLink>
        </div>
        <div className='my-5'>
            <ul className='flex gap-5'>
                <li className='text-base font-medium'>
                <NavLink> Gift Cards</NavLink>
                </li>
                <li>
                <NavLink>eSIMs </NavLink>
                </li>
                <NavLink>Gaming </NavLink>
                <li>
                <NavLink>Travel </NavLink>

                </li>
            </ul>
        </div>
        </div>


    </header>
  )
}

export default Header
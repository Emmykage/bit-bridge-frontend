import { NavLink } from "react-router-dom"
import "./nav.scss"

const Nav = () => {
  return (
<div className='my-5 '>
                <ul className='md:flex hidden gap-5 text-lg font-semibold'>
                    <li className=' font-medium'>
                    <NavLink> Gift Cards</NavLink>
                    </li>
                    <li>
                    <NavLink>Phone Top Up </NavLink>
                    </li>
                    <NavLink>Crypto Exchange </NavLink>
                    <li>
                    <NavLink>Utility & Services </NavLink>

                    </li>
                </ul>
            </div>
  )
}

export default Nav
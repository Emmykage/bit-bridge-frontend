import { Button } from 'antd'
import "./button-style.scss"
import PropTypes from 'prop-types'

const NavButton = ({
    children, 
    onclick,
    className}
    
) => {
  return (
    <Button
        onclick={onclick}
        
    className={`${className} button font-medium h-10 text-black bg-alt border-none` } classNames={"hello"} shape="round" >
    {children}
  </Button>
  )
}

NavButton.propTypes = {
    children: PropTypes.node,
    onclick: PropTypes.func,
    className: PropTypes.string
}
export default NavButton
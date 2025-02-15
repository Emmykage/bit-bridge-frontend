import { Button } from 'antd'
import "./button-style.scss"
import PropTypes from 'prop-types'

const NavButton = ({
    children, 
    onClick,
    className}
    
) => {
  return (
    <Button
    
        onClick={onClick}
        
    className={`${className} button font-medium h-10 text-black bg-alt border-none` } classNames={"hello"} shape="round" >
    {children}
  </Button>
  )
}

NavButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default NavButton
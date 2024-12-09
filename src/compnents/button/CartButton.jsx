import {  ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CartButton = ({text}) => {
    const [size] = useState("large")
  return (
    <div>
            <Button className='py-5 max-w-lg w-full text-white bg-primary hover:bg-primary/80' shape="round" icon={<ShoppingCartOutlined />} size={size}>
            Download {text}
          </Button>
    </div>
  )
}


CartButton.propTypes = {
    text: PropTypes.string
}

export default CartButton
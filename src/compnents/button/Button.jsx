import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './button-style.scss'
const AppButton = ({ className, children, type, icon, btnType, size = 'large', onClick }) => {
  return (
    <Button
      //  type="primary"
      className={`bg-alt ${btnType} ${className} border px-6 border-alt text-black hover:bg-alt border-non button`}
      shape="default"
      icon={icon ? <ArrowRightOutlined /> : null}
      onClick={onClick}
      size={size}
      htmlType={type}
    >
      {children}
    </Button>
  )
}

AppButton.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be provided
  size: PropTypes.oneOf(['small', 'middle', 'large']), // Allowable values
  onClick: PropTypes.func, // Optional callback function
}

// ClickButton.defaultProps = {
//   size: "large",
//   onClick: () => {}, // Default is a no-op
// };
export default AppButton

import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ClickButton = ({children, size="large", onClick}) => {

  return (
    <Button
     type="primary" 
     shape="round" 
     icon={<ArrowRightOutlined />} 
     onClick={onClick}
     size={size}>

      {children}

      </Button>
)
}

  ClickButton.propTypes = {
    children: PropTypes.node.isRequired, // `children` must be provided
    size: PropTypes.oneOf(["small", "middle", "large"]), // Allowable values
    onClick: PropTypes.func, // Optional callback function
  };

  // ClickButton.defaultProps = {
  //   size: "large",
  //   onClick: () => {}, // Default is a no-op
  // };
export default ClickButton
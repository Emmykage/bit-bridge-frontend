import { Form, Input, InputNumber } from 'antd';
import "./styles.scss"
import PropTypes from 'prop-types';
const FormInput = ({

    placeholder,
    onChange,
    name, 
    className="", 
    value,
    type="text", 
    disabled,
    required=false,
    label}) => {
  
  return (
  <>
  
      <Form.Item
      className={`formInput ${className}`}
      name={name}
      // normalize={(value) => typeof value === "string" ? value?.trim() : value}

      rules={[
        {
          required: required,
          message: `Please input ${label}!`,
        },
      ]}
       label={label}
       type={type}>
       { type== "text" ?  <Input disabled={disabled} name={name} style={{width: "100%"}} value={value} onChange={onChange} className={`w-full bg-red-800 p-2.5 `} placeholder={placeholder} /> :
        type ==="password" ? <Input.Password placeholder={placeholder} className='' /> : 
         <InputNumber value={value} placeholder={placeholder} onChange={onChange} className={` w-full font-medium`} /> }
      </Form.Item>

      </>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string, 
  className: PropTypes.string, 
  value: PropTypes.string,
  type: PropTypes.string, 
  disabled: PropTypes.bool,
  required: PropTypes.string,
  label: PropTypes.string
}
export default FormInput;
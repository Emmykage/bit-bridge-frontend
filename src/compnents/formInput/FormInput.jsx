import { Button, Form, Input, InputNumber } from 'antd';
import "./styles.scss"
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
      className={`formInput`}
      name={name}
      rules={[
        {
          required: required,
          message: `Please input ${label}!`,
        },
      ]}
       label={label}
       type={type}>
       { type== "text" ?  <Input disabled={disabled} style={{width: "100%"}} value={value} onChange={onChange} className={`${className} w-full p-2.5 `} placeholder={placeholder} /> :
        type ==="password" ? <Input.Password placeholder={placeholder} className='py-2.5 ' /> : 
         <InputNumber value={value} placeholder={placeholder} onChange={onChange} className={`${className} w-full font-medium p-2.5`} /> }
      </Form.Item>

      </>
  );
};
export default FormInput;
import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const FormInput = ({
    placeholder,
    name, 
    className, 
    layout, 
    type="text", 
    label}) => {
  
  return (
  <>
  
      <Form.Item
      className={className}
      name={name}
      rules={[
        {
          required: true,
          message: `Please input ${label}!`,
        },
      ]}
       label={label}
       type={type}>
       { type== "text" ?  <Input placeholder={placeholder} /> :  <InputNumber placeholder={placeholder} /> }
        {/* <Input placeholder={placeholder} /> */}
      </Form.Item>
     
      {/* <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item> */}
      </>
  );
};
export default FormInput;
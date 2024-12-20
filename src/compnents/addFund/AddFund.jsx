import { Button, Form } from 'antd'
import  { useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
const AddFund = ({
    handleSubmit
}) => {
    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };


  return (
    <Form
      layout={formLayout}
      onFinish={(values) =>{
            handleSubmit(values)
      }}
      form={form}
      initialValues={{
        amount: "",
      }}
      
    //   onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormInput className="add-fund" name="amount" type='number' label={"Amount(USDT value)"}/>

        <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>

    </Form>
  )
}

export default AddFund
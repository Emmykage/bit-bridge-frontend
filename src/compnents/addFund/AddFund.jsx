import { Button, Form, message, Upload } from 'antd'
import  { useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
import FormSelect from '../formSelect/FormSelect';
import paymentDetails from '../../data/walletAddres.json'
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
const AddFund = ({
  handleSubmit
}) => {
    const [form] = Form.useForm();
  const [formLayout] = useState('vertical');
 
  const normFile = (e) => {

    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList || [];
  };
  return (
    <Form
      layout={formLayout}
      onFinish={(values) =>{
        // const uploadedFile = values.proof?.[0]?.originFileObj;
  
        // console.log(values)
            handleSubmit(values)

      }}
      form={form}
      initialValues={{
        amount: "",
        address: "",
        proof: null
      }}
      style={{
        color: "white",
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormInput className="add-fund" name="amount" type='number' label={"Amount(USDT value)"}/>
        <FormSelect className="add-fund" name="address"  label={"Address"} options={paymentDetails}/>

        <Form.Item 
        label="payment receipt" 
        valuePropName="fileList" 
        className='text-white add-fund' 
        name="proof" 

        getValueFromEvent={normFile}
        >
          <Upload 
            // name="proof" 

          beforeUpload={(file)=> {
            const isImage = file.type.startsWith("image/")
            if(!isImage){
              message.error("You can only upload image files!");

            }
            
            return false}
          }          
          maxCount={1}
    
          listType="picture-card"
          >
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined className='text-white' />
              <div
                style={{
                  marginTop: 8,
                  color: "white"
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label={null}>

        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>

    </Form>
  )
}

AddFund.propTypes = {
  handleSubmit: PropTypes.func
}
export default AddFund
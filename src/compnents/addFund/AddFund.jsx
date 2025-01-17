import { Button, Form, message, Upload } from 'antd'
import  { useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
// import paymentDetails from '../../data/walletAddres.json'
import coinType from '../../data/coinType.json'
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import FormSelect from '../formSelect/FormSelect';
const AddFund = ({
  address,
  handleSubmit,
  disableAddress= true,
  coin_type
}) => {
    const [form] = Form.useForm();
  const [formLayout] = useState('vertical');
 
  console.log(disableAddress)
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
            handleSubmit(values)

      }}
      form={form}
      initialValues={{
        amount: "",
        address: !disableAddress ? "" : address ,
        proof: null,
        coin_type: coin_type
        }}
      style={{
        color: "white",
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormInput className="add-fund" name="amount" type='number' label={"Amount(USDT value)"}/>
        <FormInput className="add-fund" name="address"  label={"Address"} disabled={disableAddress} />
        <FormSelect className="add-fund" name="coin_type"  label={"Type"} disabled={true} options={coinType}/>

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
  handleSubmit: PropTypes.func,
  address: PropTypes.func,
  coin_type: PropTypes.func,
  disableAddress: PropTypes.bool
}
export default AddFund
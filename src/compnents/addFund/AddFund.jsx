import { Button, Form, message, Upload } from 'antd'
import  { useEffect, useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
// import paymentDetails from '../../data/walletAddres.json'
import coinType from '../../data/coinType.json'
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import FormSelect from '../formSelect/FormSelect';
import PaymentOptions from '../paymentOptions/PaymentOptions';
import { PaystackButton } from 'react-paystack';
import { useSelector } from 'react-redux';
import { publicKey } from '../../redux/baseUrl';
const AddFund = ({
  address,
  handleSubmit,
  disableAddress= true,
  coin_type="bank",
  transaction_type="deposit"

}) => {

  const {user} = useSelector(state => state.auth)
    const [form] = Form.useForm();
  const [formLayout] = useState('vertical');

  const amount = Form.useWatch("amount", form);


  
  console.log(amount)
    
  const componentProps = {
    email:  user?.email,
    amount: amount * 100,   
    publicKey:  publicKey,
  
    text: 'Pay With Card',
    onSuccess: () => {
      form.submit()
        },
    // onClose: () => alert('Are you sure'),
  }; 
 
  // console.log(disableAddress)
  const normFile = (e) => {

    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList || [];
  };


  
  return (
    <>
    <Form
    className='add-fund'
      layout={formLayout}
      onFinish={(values) =>{
            handleSubmit(values)
      }}
      form={form}
      initialValues={{
        amount: "",
        transaction_type: transaction_type,
        address: !disableAddress ? "" : address ,
        proof: null,
        bank: "",
        coin_type: coin_type,
        currency: "ngn"
        }}
      style={{
        color: "white",
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormInput className="add-fund" name="amount" type='number' label={`Amount(${coin_type} value)`}/>
        <FormInput className="add-fund" name="address" type='text' label={"Account Number"} disabled={disableAddress} />
       {transaction_type=== "withdrawal"  &&  <FormInput className="add-fund" name="bank" type='text' label={"Bank"} disabled={disableAddress} />}
        <FormSelect className="add-fund" name="coin_type"  label={"Type"} disabled={true} options={coinType}/>

        {/* <Form.Item 
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
        </Form.Item> */}
        <Form.Item label={null}>


        {/* <button
  
  className="border-alt m-auto block max-w-sm w-full h-20 bg-primary text-white rounded-lg  border px-4 py-2 shadow-md font-medium text-xl"
  > Withdraw Fund</button> :  */}

        {transaction_type === "withdrawal" &&  <Button className="border-alt m-auto block max-w-sm w-full h-20 bg-primary text-white rounded-lg  border px-4 py-2 shadow-md font-medium text-xl" type="primary" htmlType="submit">
            Withdraw Fund
        </Button> }

     
      </Form.Item>

    </Form>

<div className="w-full">
  {transaction_type === "deposit" && 
  <PaystackButton 
  htmlType="button"
  className="border-alt m-auto block max-w-sm w-full h-20 bg-primary text-white rounded-lg  border px-4 py-2 shadow-md font-medium text-xl" {...componentProps}/> }
</div>
</>
  )
}

AddFund.propTypes = {
  handleSubmit: PropTypes.func,
  transaction_type: PropTypes.string,
  address: PropTypes.func,
  coin_type: PropTypes.func,
  disableAddress: PropTypes.bool
}
export default AddFund
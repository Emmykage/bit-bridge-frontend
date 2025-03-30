import { Button, Form } from 'antd'
import  { useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
// import paymentDetails from '../../data/walletAddres.json'
import coinType from '../../data/coinType.json'
import PropTypes from 'prop-types';
import FormSelect from '../formSelect/FormSelect';
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
    
  const componentProps = {
    email:  user?.email,
    amount: amount * 100,   
    publicKey:  publicKey,
  
    text: 'Fund Account',
    onSuccess: () => {
      form.submit()
        },
    // onClose: () => alert('Are you sure'),
  }; 
 
  // const normFile = (e) => {

  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList || [];
  // };


  
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
        coupon_code: null,
        bank: "",
        coin_type: coin_type,
        currency: "ngn"
        }}
      style={{
        color: "white",
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormInput required={true} className="add-fund" name="amount" type='number' label={`Amount(${coin_type} value)`}/>
       {transaction_type=== "withdrawal"  &&  <FormInput  required={true}  className="add-fund" name="bank" type='text' label={"Bank"} disabled={disableAddress} />}
        <FormSelect className="add-fund" name="coin_type"  required={true}   label={"Type"} disabled={true} options={coinType}/>

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

        <div className='mt-10'>
          {transaction_type=== "deposit"  && <FormInput  required={false}  className="add-fund" name="coupon_code" type='text' label={"Coupon Code"}  />
  }

        </div>
        <Form.Item label={null}>


        {/* <button
  
  className="border-alt m-auto block max-w-sm w-full h-20 bg-primary text-white rounded-lg  border px-4 py-2 shadow-md font-medium text-xl"
  > Withdraw Fund</button> :  */}

        {transaction_type === "withdrawal" &&  <Button className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
            Withdraw Fund
        </Button> }

     
      </Form.Item>

    </Form>

<div className="w-full">
  {transaction_type === "deposit" && 
  <PaystackButton 
  htmlType="button"
  className="border-alt m-auto block  w-full h-20 bg-primary text-white rounded-lg  border  shadow-md font-medium text-xl" {...componentProps}/> }
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
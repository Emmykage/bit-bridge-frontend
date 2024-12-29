import { Button, Form, message, Upload } from 'antd'
import  { useState } from 'react'
import FormInput from '../formInput/FormInput';
import "./style.scss"
import FormSelect from '../formSelect/FormSelect';
import { PlusOutlined } from '@ant-design/icons';
import FormInputArea from '../formInputArea/FormInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const SellGiftCard = ({
    handleSubmit,
    setSelectedItem,
    selectedItem
}) => {
    const [form] = Form.useForm();
  const [formLayout] = useState('vertical');
  const {loading} = useSelector(state => state.order);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Form
    className='sellCard'
      layout={formLayout}
      onFinish={(values) =>{
            handleSubmit({
          
              extra_info: values.extra_info,
              proof: values.proof,
              order_type: values.order_type,
              order_items_attributes: [
                {
                  product_id: selectedItem.product_id,
                  provision_id: values.provision,
                  amount: values.amount
                }
        ]
            })
      }}
      form={form}
      initialValues={{
        
        amount: "",
        proof: null,
        order_type: "",
        extra_info: "",
        provision: ""
      }}
      
      style={{
        color: "white",
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
        <FormSelect required={true}  name="order_type" type='number' label={"Type"} options={[{value: "sell", label: "Sell"},{value: "buy", label: "Buy"}]}/>
        <FormSelect  className="card" onChange={({value}) => setSelectedItem({...selectedItem, provision_id: value})} placeholder="select card" name="card"  label={"Select card"} />
        <FormInput required={true} className="ad" name="amount" type='number'  label={"Total amount"} placeHolder="amount" />
        <FormInputArea className="" name="extra_info" label={"Extra Information(optional)"} placeHolder="" />
        

        <Form.Item 
        name={"proof"}
        label="payment receipt" 
        valuePropName="fileList" 
        className='text-white add-fund' 
        rules={[
          {
            required: true,
            message: `Please input image receipt!`,
          },
        ]}
        getValueFromEvent={normFile}>
          <Upload 
           beforeUpload={(file)=> {
            const isImage = file.type.startsWith("image/")
            if(!isImage){
              message.error("You can only upload image files!");

            }
            
            return false}
          }          
          maxCount={1}
          name="proof"
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

        <Button loading={loading} type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>

    </Form>
  )
}

SellGiftCard.propTypes = {
  handleSubmit: PropTypes.func,
  setSelectedItem: PropTypes.func,
    selectedItem: PropTypes.object
}

export default SellGiftCard
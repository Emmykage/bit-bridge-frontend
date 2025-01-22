import FormInputArea from '../formInputArea/FormInput'
import FormInput from '../formInput/FormInput'
import FormSelect from '../formSelect/FormSelect'
import { Button, Form } from 'antd'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createProvision } from '../../redux/actions/provision'
import "./style.scss"
import PropTypes from 'prop-types'
import { fetchProduct } from '../../redux/actions/product'

const AddProvision = ({productID, setIsOpen}) => {

    const dispatch = useDispatch()
    const [form] = Form.useForm()

  return (
    <div className='provision'>
    <Form
       onFinish={(values) => {
        dispatch(createProvision({
            provision:{
                product_id: productID,
                ...values
            }})).then(result => {
          if(createProvision.fulfilled.match(result)){
            form.resetFields()
            dispatch(fetchProduct(productID))
            toast(result.payload.message ?? "Provission has been created", {type: "success"})
            setIsOpen(false)
          }else if(createProvision.rejected.match(result)){
            toast(result.payload.message, {type: "error"})
          }
        })

       }}
       initialValues={{
        product_id: "productID",
        provision: "",
        min_value: 0,
        max_value: 50000.0,
        value: 110,
        currency: "usd",
        description: "",
        // info: "",
        notice: ""
       }}
        layout="vertical"
        
      >
    


        <div className=''>
            <div className='flex gap-4'>


                <FormInput
                    placeholder={"name"}
                    name={"name"}
                    label={"provision"}
                    required={true}  
                    className={"w-full"}          
                    />
            </div>


            <div className='flex gap-4'>                    
                <FormSelect
                    className={"flex-1"}
                    label={"currency"}
                    name={"currency"}
                    required={true}
                    options={[{value: "ngn", label: "NGN"},
                        {value: "usd", label: "USD"},
                        {value: "gbp", label: "GBP"}
                        ]}
                />
                {/* <FormInput
                    placeholder={"Value"}
                    name={"value"}
                    label={"value"}
                    required={false}    
                    className={"flex-1"}   
                    type='number'        
                /> */}
                </div>

                <div className='flex gap-4'>                    
              
                  <FormInput
                    placeholder={"Min Value"}
                    name={"min_value"}
                    label={"Min value"}
                    required={false}    
                    className={"flex-1"}   
                    type='number'        
                />
                <FormInput
                    placeholder={"Max Value"}
                    name={"max_value"}
                    label={"Max value"}
                    required={false}    
                    className={"flex-1"}   
                    type='number'        
                />
                </div>

{/*         
                <FormInputArea
            placeholder={"Info"}
            name={"info"}
            label={"Info"}
            required={true}       
            
            />    */}
             <FormInputArea
            placeholder={"Notice"}
            name={"notice"}
            label={"Notice"}
            // required={true}       
            
            />    <FormInputArea
            placeholder={"description"}
            name={"description"}
            label={"description"}
            required={true}       
            
            />
          
        <Form.Item>
          <Button  htmlType="submit" className='w-full bg-primary text-white font-semibold py-6'>Submit</Button>
        </Form.Item>
     
        </div>

      </Form>
      </div>

  )
}

AddProvision.propTypes = {
  productID: PropTypes.string,
  setIsOpen: PropTypes.func
}

export default AddProvision
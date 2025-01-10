import FormInputArea from '../formInputArea/FormInput'
import FormInput from '../formInput/FormInput'
import FormSelect from '../formSelect/FormSelect'
import { Button, Form } from 'antd'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createProvision } from '../../redux/actions/provision'
import "./style.scss"

const AddProvision = ({productID, setIsOpen}) => {

    const dispatch = useDispatch()
    const [form] = Form.useForm()
    console.log(productID)

  return (
    <div className='provision'>
    <Form
       onFinish={(values) => {
        console.log(values)
        dispatch(createProvision({
            provision:{
                product_id: productID,
                ...values
            }})).then(result => {
          if(createProvision.fulfilled.match(result)){
            form.resetFields()
            toast(result.payload.message, {type: "success"})
            setIsOpen(false)
          }else if(createProvision.rejected.match(result)){
            console.log(result.message)
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
        currency: "NGN",
        description: "",
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
                    options={[{value: "NGN", label: "NGN"},
                    {value: "USD", label: "USD"}]}
                />
                <FormInput
                    placeholder={"Value"}
                    name={"value"}
                    label={"value"}
                    required={false}    
                    className={"flex-1"}   
                    type='number'        
                />
                </div>

        
        <FormInputArea
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

export default AddProvision
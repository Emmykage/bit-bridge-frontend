import {
  Button,

  DatePicker,
  Form,
  Input,

} from 'antd';
import FormInput from '../../compnents/formInput/FormInput';
import FormSelect from '../../compnents/formSelect/FormSelect';
import FormInputArea from '../../compnents/formInputArea/FormInput';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions/product';
import { toast } from 'react-toastify';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddProduct = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  return (
    <>
    <div className='max-w-7xl  rounded-lg bg-white p-5'>

       <Form
       onFinish={(values) => {
        console.log(values)
        dispatch(createProduct(values)).then(result => {
          if(createProduct.fulfilled.match(result)){
            form.resetFields()
            toast(result.payload.message, {type: "success"})
          }else if(createProduct.rejected.match(result)){
            console.log(result)
            toast(result.payload.message, {type: "error"})
          }
        })

       }}
       initialValues={{
        provider: "",
      provision: "",
      min_value: 0,
      max_value: 50000.0,
      currency: "NGN",
      rate: 5,
      image: "",
      description: "",
      info: "",
      category: ""
       }}
        layout="vertical"
        
      >
    
<FormSelect
options={[{label: "service", value: "service"},{value: "Gift Card", label: "Gift Card"},
{value: "Mobille Service", label: "Mobile Service"}]}
/>

<div className=''>
  <div className='flex gap-4'>

<FormInput
       placeholder={"provider"}
       name={"provider"}
       label={"Provider"}
       required={true}  
       className={" w-full"}
       
       />
        <FormInput
       placeholder={"provision"}
       name={"provision"}
       label={"provision"}
       required={true}     
       className={"w-full"}  
       
       />
         </div>

<div className='flex gap-4'>
  
<FormInput
       placeholder={"min value"}
       name={"min_value"}
       label={"min value"}
       required={true}    
       className={"flex-1"}   
       type='number'
       
       />
       <FormInput
       placeholder={"max value"}
       name={"max_value"}
       label={"min value"}
       required={true}    
       className={"flex-1"}   
       type='number'

       
       />
      

</div>
<FormSelect
label={"currency"}
name={"currency"}
required={true}
options={[{value: "NGN", label: "NGN"},
{value: "USD", label: "USD"}]}
/>
<FormInputArea
       placeholder={"header_info"}
       name={"info"}
       label={"header_info"}
       required={true}    
       className={"flex-1"}   
   
       
       />
    
        <FormInputArea
       placeholder={"description"}
       name={"description"}
       label={"description"}
       required={true}       
       
       />
        <FormInputArea
       placeholder={"notice_info"}
       name={"notice_info"}
       label={"notice_info"}
       required={true}       
       
       />
        <FormInputArea
       placeholder={"alert info"}
       name={"attention"}
       label={"attention"}
       required={true}       
       
       />
    
        <Form.Item name={"Submit"}>
          <Button  htmlType="submit" className='w-full bg-primary text-white font-semibold py-6'>Submit</Button>
        </Form.Item>
     
        </div>

      </Form>
      </div>

    </>
  );
};
export default AddProduct
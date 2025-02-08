import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Form, Switch } from 'antd'
import FormInput from '../../../compnents/formInput/FormInput'
import FormInputArea from '../../../compnents/formInputArea/FormInput'
import FormSelect from '../../../compnents/formSelect/FormSelect'
import { toast } from 'react-toastify'
import ButtonCall from '../../../compnents/button/ButtonCall'
import AppModal from '../../../compnents/modal/Modal'
import AddProvision from '../../../compnents/addProvision/AddProvision'
import { fetchProduct, updateProduct } from '../../../redux/actions/product'
import { nairaFormat } from '../../../utils/nairaFormat'

const ViewProduct = () => {
    const dispatch = useDispatch()
    const {product, loading} = useSelector(state => state .product)
    const [disableForm, setDisableForm ] = useState(true)
    const {id} = useParams()
    const [isOpen, setIsOpen] = useState(false)


    useEffect(()=> {
        dispatch(fetchProduct(id))


    }, [])
    console.log(product)

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    const onChange = () => {
      setDisableForm(prev => !prev)
    };


  return (
    <>

    <div className='md:p-10 bg-white'>
      <div className='flex justify-between items-center'>
      <ButtonCall
        handleClick={() => setIsOpen(true)}>Add Provision </ButtonCall>

        <Switch defaultChecked={!disableForm} onChange={onChange} />
      </div>
    
        
         <Form
         disabled={disableForm}
       onFinish={(values) => {
        console.log(values)
        dispatch(updateProduct({id, data: values})).then(result => {
          if(updateProduct.fulfilled.match(result)){
            toast(result.payload.message, {type: "success"})
          }else if(updateProduct.rejected.match(result)){
            console.log(result)
            toast(result.payload.message, {type: "error"})
          }
        })

       }}
       initialValues={{
        ...product,

       }}
        layout="vertical"
        
      >
    
<FormSelect
name={"category"}
label={"Category"}
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
       className={"whiteBg w-full"}
       
       />
        {/* <FormInput
       placeholder={"provision"}
       name={"provision"}
       label={"provision"}
       required={true}     
       className={"w-full"}  
       
       /> */}
         </div>

{/* <div className='flex gap-4'>
  
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
      

</div> */}
    {/* <FormSelect
        label={"currency"}
        name={"currency"}
        required={true}
        options={[{value: "NGN", label: "NGN"},
        {value: "USD", label: "USD"}]}
    /> */}
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
      <div>

           
      <div className="px-4 sm:px-6 lg:px-8 hover:border-gray-900">
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                            <thead>
                                <tr>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter md:pl-4"> Provision</th>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6"> Currency</th>
                                <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 pl-0 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Min Value</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-0 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Max Value</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-0 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Description</th>


                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { product?.provisions?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal md:pl-4">
                                        <p className="font-medium text-gray-600 leading-5">{item.name} </p>
                                    </td>
                                    <td className="whitespace-nowrap border-b text-left border-gray-200 py-2 pl-3 pr-3 text-sm font-normal uppercase sm:pl-6 lg:pl-8">
                                        <p className="font-medium text-gray-600 leading-5">{item.currency} </p>
                                    </td>


                                    <td className="whitespace-nowrap border-b border-gray-200 pl-1 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.min_value, item.currency)}</p></td>
                                    <td className="whitespace-nowrap border-b border-gray-200 px-1 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.max_value, item.currency)}</p></td>

                                    <td className="relative max-w-96 whitespace-wrap border-b text-left border-gray-200 py-3 pr-4 pl-0 text-gray-900  text-sm sm:pr-8 ">
                                        {(item?.description)}

                                    </td>

                       
                                    </tr>
                                                                    ))}


                        
                            </tbody>     
                        </table>
                    </div>     
                </div>
            </div>
        </div>

      </div>
      
      
          </div>

    <AppModal title={`Add Provision-${product?.provider}`} handleCancel={() => setIsOpen(false)} isModalOpen={isOpen}>
        <AddProvision  productID={id} setIsOpen={setIsOpen} isOpen={isOpen}/>
    </AppModal>
    </>
  )
}

export default ViewProduct
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../../redux/actions/order'
import { nairaFormat } from '../../../utils/nairaFormat'
import ClassicBtn from '../../../compnents/button/ClassicButton'
import AppModal from '../../../compnents/modal/Modal'
import { Button, Form } from 'antd'
import FormInput from '../../../compnents/formInput/FormInput'
import "./styles.scss"
import { createCardToken } from '../../../redux/actions/orderToken'
import { toast } from 'react-toastify'


const ViewOrder = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {order} = useSelector(state => state.order)
    // const {cardToken} = useSelector(state => state.orderToken)
    const [selectedId, setSelectedId]  = useState(null)
    const [open, setOpen]  = useState(null)

    const [form] = Form.useForm()

    useEffect(() => {
        dispatch(getOrder(id))
handleUpdate

    }, [])

    const handleUpdate = (values) => {
        dispatch(createCardToken({card_token: values})).
        then(result => {
            if(createCardToken.fulfilled.match(result)){
                toast(result?.payload?.message, {type: "success"})
                dispatch(getOrder(id))

                setOpen(false)
            }
            else{
             toast(result.payload?.message || "Something went wrong", {type: "error"})
            }
        })
        

    }

  return (

    <>
    

    <div>

        <div className='bg-white p-4 rounded-lg shadow '>
            <div className='flex justify-between'>

            <div>
            <p className='text-gray-500 font-semibold'> <span className='text-gray-800 font-semibold'>Email</span> : {order?.user?.email} </p>
            <p><span className='text-gray-800 font-semibold'>Total Amount</span> : <span> {nairaFormat(order?.total_amount, "usd")}</span> </p>
            <p><span className='text-gray-800 font-semibold capitalize'>Status</span> : <span className='capitalize'>{order?.status} </span></p>
            </div>

            <div>
            <p className='text-gray-600 font-semibold'> <span>OrderId </span>: {id} </p>
            <p>Type: <span className='capitalize'> {order?.order_type}</span></p>
            <p>Status: </p>
            </div>

            </div>

           
            <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
                {order?.order_items?.map(item => (
                    <div  key={item.id} className='shadow border p-4 rounded my-6'>
                        <div>

                            <div className='flex justify-between bg-red-200'>
                            <p className='text-gray-600 font-bold uppercase '>{item?.product?.category}</p>
                            <p className='text-gray-600 font-bold uppercase '>{item?.provision?.name}</p>

                            </div>
                            <p className='my-1 font-semibold text-xl'> {nairaFormat(item.amount, item?.currency)}</p>
                            <p className='my-1 font-semibold text-xl'>Code: {item?.card_token ?  (item?.card_token?.token) : "N/A"}</p>
                            </div>
                        <div className='flex  justify-end'>
                        <ClassicBtn className={"my-1"} onclick={() =>{
                            setSelectedId(item?.id)
                            setOpen(true)
                        
                        }

                            }>
                            send Token
                        </ClassicBtn>
                        </div>
                     
           
                    </div>
            
                ))}
                <p></p>
            </div>


        </div>
        
    </div>

    <div className=''>
        <AppModal 
        handleCancel={()=> setOpen(false)}
        className="add-gift-token"
         isModalOpen={open}
        
        >
            <Form 
            form={form}
            layout='vertical'
            onFinish={(values) => {
                
                handleUpdate({
                    ...values,
                    reveal: false,
                    order_item_id: selectedId
                })
            }}
            initialValues={{
                token: "",
              
            }}>

                <FormInput label={"Enter Gift Card Code"} name={"token"} />

                <Button htmlType='submit'>
                    Submit
                </Button>

            </Form>
        </AppModal>
    </div>


    </>
  )
}

export default ViewOrder
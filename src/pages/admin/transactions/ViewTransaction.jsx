import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'

import "./styles.scss"

import { getTransaction } from '../../../redux/actions/transaction'
import { FaArrowLeft } from 'react-icons/fa'


const ViewTransaction = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {transaction} = useSelector(state => state.transaction)


    useEffect(() => {
        dispatch(getTransaction(id))

    }, [])

    console.log(transaction)

    
  return (

    <>
    

    <div>
        <span className='mb-5 bg-gray-50 shadow w-max p-3 rounded block' onClick={()=> navigate(-1)}>
        <FaArrowLeft />
        </span>

        <div className='bg-white p-4 rounded-lg shadow '>
            <div className='flex justify-between'>

            <div>
                <p className='text-gray-500 font-semibold my-6'> <span className='text-gray-800 font-semibold'>Addrss/Account Number</span> : {transaction?.address} </p>
                <p><span className='text-gray-800 font-semibold  my-6'>Amount</span> : <span> {nairaFormat(transaction?.amount, "ngn")}</span> </p>
                <p className='my-6'><span className='text-gray-800 font-semibold capitalize'>Status</span> : <span className='capitalize'>{transaction?.status} </span></p>
            </div>

            <div>
            <p className='text-gray-600 font-semibold  my-6'> <span>Transaction ID </span>: {id} </p>
            <p className=' my-6'><span className='text-gray-800 font-semibold capitalize'>  Type:</span> <span className=' text-gray-800 font-semibold capitalize  '> {transaction?.order_type}</span></p>
            <p className=' my-6'><span className="text-gray-800 font-semibold capitalize"></span> Email:  <span className=''> {transaction?.email}</span> </p>
            </div>

            </div>

           
            <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
                {/* {transaction?.order_items?.map(item => (
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
            
                ))} */}
                <p></p>
            </div>


        </div>
        
    </div>

   

    </>
  )
}

export default ViewTransaction
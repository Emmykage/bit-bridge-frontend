import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'

import "./styles.scss"

import { FaArrowLeft } from 'react-icons/fa'
import { getUser } from '../../../redux/actions/user'
import dateFormater from '../../../utils/dateFormat'
import statusStyle from '../../../utils/statusStyle'
import Loading from '../../../compnents/loader/Loading'


const ViewUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, loading} = useSelector(state => state.user)


    useEffect(() => {
        dispatch(getUser(id))

    }, [])

    
  return (

    <>
    

    <div>
        <span className='mb-5 bg-gray-50 shadow w-max p-3 rounded block' onClick={()=> navigate(-1)}>
        <FaArrowLeft />
        </span>

        <div className='bg-white p-4 rounded-lg shadow '>
            <div className='flex flex-col md:flex-row justify-between'>

            <div>
                <p className='text-gray-500 font-semibold my-6'> <span className='text-gray-800 font-semibold'>Email</span> : {user?.email} </p>
                <p><span className='text-gray-800 font-semibold  my-6'>Balance</span> : <span> {nairaFormat(user?.wallet?.balance)}</span></p>
                <p className='my-6'><span className='text-gray-800 font-semibold capitalize'>Status</span> : <span className='capitalize'>{user?.status ?? "Active"} </span></p>
            </div>

            <div>
            <p className='text-gray-600 font-semibold  my-6'> <span>USER ID </span>: {id} </p>
            <p className=' my-6'><span className='text-gray-800 font-semibold capitalize'>  Type:</span> <span className=' text-gray-800 font-semibold capitalize  '> {user?.role}</span></p>
            <p className=' my-6'><span className="text-gray-800 font-semibold capitalize"></span> Wallet:  <span className=''> {"NGN"}</span> </p>
            </div>

            </div>

           
            <div className='overflow-x-auto'>
            <div className="">
            <div className="mt-4 flow-root">
                <div className="">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                            <thead className="top-0 sticky w-full left-0">
                                <tr>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Type</th>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>

                                    <th scope="col" className="sticky  top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 md:px-10 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Status</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>

                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                {loading ? 
                                 <tr>

                                    <td  className=" py-8 text-center justify-center " colSpan={6}>
                                        <span>
                                        <Loading/>

                                        </span>

                                    </td>

                                </tr> 

                                : 
                                
                                
                                

                              
                               user?.transactions?.length > 0 ? user?.transactions?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{item?.transaction_type}</p></td>
                                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.amount, "ngn")}</p></td>
                                    <td className="relative max-w-40 whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        {item?.address ?? "Not Available"}

                                    </td> 
                                    <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        <span className={`${statusStyle(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}>
                                        {item?.status }
                                        </span>
                                        

                                    </td> 
                                    {/* <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        <span className={` py-1 inline-block text-center px-3 rounded-3xl`}>
                                            <img onClick={()=> {
                                                setToggle(true)
                                                setViewImage(item?.proof_url)
                                            }} src= {item?.proof_url} className="w-20 border border-y-gray-400 h-20" alt="" />
                                       
                                        </span>
                                        

                                    </td>  */}
                                    <td className="relative whitespace-nowrap border-b text-left border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {dateFormater(item?.created_at)}

                                    </td>

                       
                                    </tr>
                                 ))
                                 : 
                                 <tr>
                                    <td className="text-center py-10" colSpan={6}>
                                        <span className="text-black">
                                        No Transaction

                                        </span>

                                    </td>
                                 </tr>
                                 }


                        
                            </tbody>     
                        </table>
                    </div>     
                </div>
            </div>
        </div>
            </div>


        </div>
        
    </div>

   

    </>
  )
}

export default ViewUser
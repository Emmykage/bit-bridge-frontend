import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserBillOrders } from "../../../redux/actions/order"
import { nairaFormat } from "../../../utils/nairaFormat"
import dateFormater from "../../../utils/dateFormat"
import statusStyle from "../../../utils/statusStyle"
import Loading from "../../../compnents/loader/Loading"

const Orders = () => {
  const dispatch = useDispatch()
  const {billOrders, loading} = useSelector(state => state.order)
  useEffect(()=> {
    dispatch(getUserBillOrders())
  }

  , [])

  return (
    <div className='lg:p-10 bg-black py-4 px-2 text-white'>
        <h4 className='text-2xl font-medium text-alt'>Recent Orders</h4>
        <div className='h-[500px] overflow-x-auto relative'>
            <div className="px-4 sm:px-6 bg-rd-400 w-full lg:px-8 hover:border-gray-900">
                <div className="mt-4 flow-root">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle">
                            <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto">
                                <thead>
                                    <tr>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  Type</th>
                                        {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                                        <th scope="col" className="sticky top-0 z-10 text-left border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 md:text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell bg--300 max-w-20 md:w-max">Receipient </th>
                                        <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Status</th>

                                        <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>


                            
                                </tr>

                                </thead>
                                    
                                <tbody>
                                                        
                                    {loading ? 
                                 <tr>

                                    <td  className=" py-8 text-center justify-center " colSpan={6}>
                                        {/* <Loading  */}
                                        <span>
                                        <Loading/>

                                        </span>

                                    </td>

                                </tr> 

                                : 
                                billOrders.length > 0 ?  billOrders?.map(item => (

                                    <tr key={item?.id}>
                                        <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                            <p className="font-medium text-gray-600 leading-5">{item.service_type} </p>
                                        </td>

            
                                
                                        <td className="relative whitespace-nowrap border-b  border-gray-200 py-3  text-center text-gray-900 text-sm">
                                            {nairaFormat(item?.total_amount, "ngn")}

                                                </td> 
                                        <td className="whitespace-nowrap border-b border-gray-200 md:text-center text-left max-w-32 md:w-max px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{(item?.meter_number)}</p></td>
                                        <td className="relative whitespace-nowrap border-b border-gray-200 py-3 md:text-center text-left flex justify-center items-center text-gray-900 text-sm">
                                                    <span className={`${statusStyle(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}>
                                                        {item?.status }
                                                    </span>
                                                    

                                        </td>  
                                        <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                            {dateFormater(item?.created_at)}

                                        </td>

                        
                                        </tr>
                                    )) : 
                                    <tr>
                                    <td className="text-center py-10" colSpan={6}>
                                        <span className="text-black">
                                        No Orders

                                        </span>

                                    </td>
                                 </tr> }


                            
                                </tbody>     
                            </table>
                        </div>     
                    </div>
                </div>
            </div>
       
        </div>

   
    </div>
  )
}

export default Orders
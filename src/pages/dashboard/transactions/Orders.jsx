import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserOrders } from "../../../redux/actions/order"
import { nairaFormat } from "../../../utils/nairaFormat"
import dateFormater from "../../../utils/dateFormat"
import statusStyle from "../../../utils/statusStyle"

const Orders = () => {
  const dispatch = useDispatch()
  const {orders} = useSelector(state => state.order)
  useEffect(()=> {
    dispatch(getUserOrders())
  }

  , [])
  console.log(orders)
  return (
    <div className='lg:p-10 bg-black py-4 px-2 text-white'>
        <h4 className='text-2xl font-medium text-alt'>Recent Orders</h4>
        <div className='h-[500px] overflow-y-auto relative'>
        <div className="px-4 sm:px-6 bg-rd-400 w-full lg:px-8 hover:border-gray-900">
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                            <thead>
                                <tr>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  order</th>
                                    {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Provision </th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>


                        
                            </tr>

                            </thead>
                                
                            <tbody>
                                                    
                                { orders?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                        <p className="font-medium text-gray-600 leading-5">{item.order_type} </p>
                                    </td>

                                    <td className="relative whitespace-nowrap border-b border-gray-200 py-3 text-center flex justify-center items-center text-gray-900 text-sm">
                                                <span className={`${statusStyle(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}>
                                                    {item?.status }
                                                </span>
                                                

                                    </td>  
                            
                                    <td className="relative whitespace-nowrap border-b  border-gray-200 py-3  text-center text-gray-900 text-sm">
                                        {nairaFormat(item?.total_amount, "usd")}

                                            </td> 
                                    <td className="whitespace-nowrap border-b border-gray-200 text-center px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{(item.order_items[0].provision?.name)}</p></td>

                                    <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {dateFormater(item?.created_at)}

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
  )
}

export default Orders
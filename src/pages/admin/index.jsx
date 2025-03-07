import { UserAddOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getTransactions } from '../../redux/actions/transaction'
import { nairaFormat } from '../../utils/nairaFormat'
import statusStyle from '../../utils/statusStyle'
import dateFormater from '../../utils/dateFormat'
import { PiHandDepositBold, PiHandWithdrawFill } from 'react-icons/pi'
import { getStatistics } from '../../redux/actions/statistics'

const AdminHome = () => {
    const dispatch = useDispatch()
    const {transactions} = useSelector(state => state.transaction)
    const {stats} = useSelector(state =>  state.stat)

    useEffect(()=> {

      dispatch (getTransactions())
        dispatch(getStatistics())

    },[])
  return (
    <div className=' overflow-y-scroll'>
        <div className='bg flex-1 bg-red'>
            <div className='min-h-60 w-full gap-4 flex-col sm:flex-row flex bg-white  p-4 400'>
            <div className='flex flex-col justify-center shadow flex-1 items-center'>
                    <UserAddOutlined className='text-3xl text-alt'/>
                    <span className='text-gray-700'>
                        TOTAL  USERS
                    </span>
                    <p className='text-gray-700 text-lg font-semibold'>{stats?.users}</p>

                    </div>
                    <div className='flex flex-col justify-center shadow flex-1 items-center'>
                    <PiHandDepositBold className='text-3xl'/>
                    <span className='text-gray-700'>
                        AMOUNT DEPOSITED
                    </span>
                    <p className='text-gray-700 text-lg font-semibold'>{nairaFormat(stats?.total_deposits ?? 0)}</p>

                    </div>
                    <div className='flex flex-col justify-center shadow flex-1 items-center'>
                    <PiHandWithdrawFill className='text-3xl'/>
                    <span className='text-gray-700'>
                    AMOUNT WITHDRAWN
                    </span>
                    <p className='text-gray-700 text-lg font-semibold'>{nairaFormat(stats?.total_withdrawals ?? 0)}</p>

                    </div>
            </div>
            <div className='min-h-[300px]  flex flex-col lg:flex-row gap-3 my-4'>
                <div className='flex-1 bg-white w-full rounded p-5 shadow'>
                    <div className="px-4 sm:px-6 lg:px-8 overflow-x-auto w-full hover:border-gray-900">
                        <div className="mt-4 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter"></th>

                                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 text-nowrap">  TOTAL AMOUNT</th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">STATUS</th>
                                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">ADDRESS</th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">TIME </th>

                                    
                                        </tr>

                                        </thead>
                                            
                                        <tbody>

                                                {/* make conditional statement  here  */}
                                            {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                            { transactions?.slice(0, 6).map(item => (

                                            <tr key={item?.id}>
                                                <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                                    <p className="font-medium text-gray-600 leading-5">{item?.transaction_type} </p>
                                                </td> <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                                    <p className="font-medium text-gray-600 leading-5">{nairaFormat(item.amount)} </p>
                                                </td>
                                                 <td className="whitespace-nowrap  border-b border-gray-200 hidden px-3 py-4 text-sm text-gray-900 font-normal sm:table-cell capitalize">
                                                    <span className={`${statusStyle(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}>
                                                    {(item.status)}

                                                    </span>
                                                </td> 
                                                <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-center text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                                    {item?.address ?? "Not Available"}

                                                </td> 
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

                <div className='lg:w-52 '>
                    <NavLink to={"/admin/add-product"} className='py-3 block rounded text-white text-center w-full bg-gray-900'>Add Product</NavLink>
            
        </div>
            </div>
        </div>
      
       

        
        
    </div>
  )
}

export default AdminHome
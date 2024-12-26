import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrunbs from '../../../compnents/Breadcrumbs/BreadCrunbs'
import { getTransactions } from '../../../redux/actions/transaction'
import AppModal from '../../../compnents/modal/Modal'

const AdminDepositTransactions = () => {
    const {transactions} = useSelector(state => state.transaction)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [selctedId, setSelectedId] = useState(null)
    useEffect(()=> {
            dispatch(getTransactions())
    }, [])

  return (
    <div>
        <h3 className='font-semibold text-xl text-gray-900'>Deposits</h3>


        <div className="px-4 sm:px-6 lg:px-8  hover:border-gray-900">
            <div className="mt-4 flow-root overflow-y-hidde overflow-x-auto">
                <div className="lg:mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto">
                            <thead className='bg-gray-900 text-alt'>
                                <tr>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold  backdrop-blur backdrop-filter">Amount</th>

                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  status</th>
                                    {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold  backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold  backdrop-blur backdrop-filter lg:table-cell">Time </th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold  backdrop-blur backdrop-filter lg:table-cell"> </th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold  backdrop-blur backdrop-filter lg:table-cell"></th>

                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { transactions?.map(item => (

                                <tr key={item?.id}>
                                                                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{item.amount}</p></td>

                                    <td className="relative whitespace-nowrap border-b text-left border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {item?.status}

                                    </td>

                                  <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        {item?.address ?? "Not Available"}

                                    </td> 
                                    <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {item?.created_at}

                                    </td>

                                    <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        <BreadCrunbs setSelectedId={setSelectedId} setOpen={setOpen} open={open}/>

                                    </td>

                       
                                    </tr>
                                                                    ))}


                        
                            </tbody>     
                        </table>
                    </div>     
                </div>
            </div>
        </div>


        <AppModal isModalOpen={open}>



        </AppModal>
    </div>
  )
}

export default AdminDepositTransactions
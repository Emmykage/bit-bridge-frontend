import { useSelector } from "react-redux"
import dateFormater from "../../../utils/dateFormat"
import { nairaFormat } from "../../../utils/nairaFormat"

const Deposits = () => {
  const {wallet} = useSelector(state => state.wallet)

  return (
    <div className='lg:p-10 bg-black py-4 px-2 text-white'>
    <h4 className='text-2xl font-medium text-alt'>Recent Trades</h4>
    <div className='min-h-56'>
    <div className="px-4 sm:px-6 lg:px-8 hover:border-gray-900">
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                            <thead>
                                <tr>
                                    {/* <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th> */}
                                    {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>

                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { wallet?.transactions?.map(item => (

                                <tr key={item?.id}>
                                    <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        {item?.address ?? "Not Available"}

                                    </td> 
                                    <td className="relative whitespace-nowrap border-b text-left border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {dateFormater(item?.created_at)}

                                    </td>
                                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.amount)}</p></td>

                       
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

export default Deposits
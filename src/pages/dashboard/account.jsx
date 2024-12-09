import { nairaFormat } from "../../utils/nairaFormat"


const Account = () => {
  return (
    <div>
        <div className="flex bg-black text-gray-100 p-10 rounded justify-between">
            <div className="">
                <h4 className="text-xl font-semibold text-gray-500">USDT Wallet</h4>
                <p className="text-4xl font-medium">USDT {0}</p>
                <p className="my-4 font-medium">{nairaFormat(0)}</p>
                <h6>Rate</h6>
                <p className="text-sm font-bold text-gray-500">
                1560.19 NGN/USDT

                </p>

            </div>

            <div className="">
                <h4 className="text-xl font-semibold text-gray-500">Tron Wallet Wallet</h4>
                <p className="text-4xl font-medium">TRX {0}</p>
                <p className="my-4 font-medium">{nairaFormat(0)}</p>
                <h6>Rate</h6>
                <p className="text-sm font-bold text-gray-500">
                1560.19 NGN/USDT

                </p>

            </div>

         
        </div>

        <div className="px-2 lg:p-10 bg-black my-20 rounded text-white">
            <h3 className="text-xl font-semibold">Transaction History (USDT)</h3>
    

       <div className="px-4 sm:px-6 lg:px-8 hover:border-gray-900">
        <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                        <thead>
                            <tr>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th>
                                <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th>
                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">                            Time
                                </th>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                        
                            </tr>
                        </thead>
                            
                        <tbody>

                                {/* make conditional statement  here  */}
                            {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}

                        
                    
                        </tbody>     
                    </table>
                </div>     
            </div>
        </div>
  </div>
  </div>      
  
  <div className="px-2 lg:p-10 bg-black my-20 rounded text-white">
            <h3 className="text-xl font-semibold">Transaction History (TRX)</h3>
    

       <div className="px-4 sm:px-6 lg:px-8 hover:border-gray-900">
        <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                        <thead>
                            <tr>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th>
                                <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th>
                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">                            Time
                                </th>
                                <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                        
                            </tr>
                        </thead>
                            
                        <tbody>

                                {/* make conditional statement  here  */}
                            {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}

                        
                    
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

export default Account
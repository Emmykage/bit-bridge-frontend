import { TransactionOutlined, WalletOutlined } from "@ant-design/icons"
import { nairaFormat } from "../../utils/nairaFormat"
import AppModal from "../../compnents/modal/Modal"
import { useEffect, useState } from "react";
import AddFund from "../../compnents/addFund/AddFund";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/actions/transaction";
import { RiUserReceived2Line } from "react-icons/ri";
import { converter } from "../../api/currencyConverter";
import dateFormater from "../../utils/dateFormat";


const Account = () => {
    const {wallet} = useSelector(state => state.wallet)
    const [converedAmount, setConvertedAmount] = useState(null)


    useEffect(()=> {
        const fetchConversion = async() => {

            const result = await converter("USD", wallet?.balance)
            setConvertedAmount(result)
        }

        fetchConversion()
    },[wallet?.balance])



    console.log( converedAmount)


     const [isModalOpen, setIsModalOpen] = useState(false);
     const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch (createTransaction({
            ...values,
            transaction_type: "deposit"
            
        }))

    }


  return (
    <>
    <div className="grid lg:grid-cols-wallet gap-6 mx4">
        <div>
            <div className="flex bg-black text-gray-100 p-10 rounded justify-between">
                <div className="">
                    <h4 className="text-xl font-semibold text-gray-500">USDT Wallet</h4>
                    <p className="text-4xl font-medium">USDT {converedAmount}</p>
                    <p className="my-4 font-medium">{nairaFormat(wallet?.balance)}</p>
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
                                    {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>


                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { wallet?.transactions?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                        <p className="font-medium text-gray-600 leading-5">{item.transaction_type} </p>
                                    </td>
                                    {/* <td className="whitespace-nowrap  border-b border-gray-200 hidden px-3 py-4 text-sm text-gray-900 font-normal sm:table-cell capitalize">
                                        {item.transaction_type}
                                    </td> */}
                                    
                                    {/* <td className="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 text-sm text-gray-600 sm:table-cell text-left"><span className="rounded-xl  text-xs border border-gray-200 py-1 px-2.5"> <span className= "text-base <%=set_empt_status(user.status)%>"> &#x2022;</span> <span></span></span></td> */}
                                    <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        {item?.address ?? "Not Available"}

                                    </td> 
                                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.amount)}</p></td>

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
                                    {/* <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter">Type</th> */}
                                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                    <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>

                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { wallet?.transactions?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                        <p className="font-medium text-gray-600 leading-5">{item.transaction_type} </p>
                                    </td>
                                    {/* <td className="whitespace-nowrap  border-b border-gray-200 hidden px-3 py-4 text-sm text-gray-900 font-normal sm:table-cell capitalize">
                                        {item.transaction_type}
                                    </td> */}
                                    
                                    {/* <td className="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 text-sm text-gray-600 sm:table-cell text-left"><span className="rounded-xl  text-xs border border-gray-200 py-1 px-2.5"> <span className= "text-base <%=set_empt_status(user.status)%>"> &#x2022;</span> <span></span></span></td> */}
                                    <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                        {item?.address ?? "Not Available"}

                                    </td> 
                                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{item.amount}</p></td>

                                    <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {item?.created_at}

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
        <div className="bg-black rounded-lg p-10 flex flex-col justify-between">
            <div className="min-h-[500px] bg-red- py-10 sticky top-3 flex justify-between flex-col">


            <div className="text-white flex justify-between bg--100 px-6">
                <div onClick={()=> setIsModalOpen(true)} className="flex text-purple-300 hover:text-alt cursor-pointer flex-col items-center justify-center">
                <WalletOutlined />
                <span className="text-center">Add Funds</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                <RiUserReceived2Line  />
                <span className="text-center">Recieve Funds</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                <TransactionOutlined />
                <span className="text-center">Transfer Funds</span>
                </div>
            </div>

            <div>
                <p>copy destination address </p>

                <p className="text-white bg-zinc-900 rounded-lg p-4">TSZs4bJnfg9cReQi8FkDzEKWiftPvTbR1f</p>
            </div>

            </div>



        </div>
    </div>

    <AppModal title={"Fund Wallet"}  isModalOpen={isModalOpen} handleOk={()=> {}} handleCancel={()=> {setIsModalOpen(false)}}  >
        <div className="bg-purple- p-10">
            <AddFund handleSubmit={handleSubmit}/>
        </div>
    </AppModal>

    </>

  )
}

export default Account
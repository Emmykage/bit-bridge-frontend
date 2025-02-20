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
import { message } from "antd";
import statusStyle from "../../utils/statusStyle";
import { getWallet } from "../../redux/actions/wallet";


const Account = () => {
    const {wallet} = useSelector(state => state.wallet)
    const [convertedAmount, setConvertedAmount] = useState(null)
    const address = "TSZs4bJnfg9cReQi8FkDzEKWiftPvTbR1f"
    const coinType ="usdt"


    useEffect(()=> {
        const fetchConversion = async() => {

            const result = await converter({fromCurr: "usd", toCurr: "usd", amount: wallet?.balance})
            setConvertedAmount(result)
        }

        fetchConversion()
    },[wallet?.balance])



    // console.log( wallet, wallet)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWithdrawModalOpened, setIsWithdrawalModalOpen] = useState(false);
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch (createTransaction({
            ...values,
            transaction_type: "deposit"
            
        }))
        .then(result => {
            if(createTransaction.fulfilled.match(result)){
                setIsModalOpen(false)
                dispatch(getWallet())
            }
        })

    }
    const handleWithdrawalSubmit = (values) => {
        dispatch (createTransaction({
            ...values,
            transaction_type: "withdrawal"
            
        }))
        .then(result => {
            if(createTransaction.fulfilled.match(result)){
                setIsWithdrawalModalOpen(false)
            }
        })

    }


  return (
    <>
    <div className="md:grid lg:grid-cols-wallet gap-6 mx4">
        <div className="bg-red-60">
            <div className="flex bg-black text-gray-100 p-10 rounded justify-between">
                <div className="">
                    <h4 className="text-xl font-semibold text-gray-500">USDT Wallet</h4>
                    <p className="text-4xl font-medium">USDT {convertedAmount?.calc}</p>
                    <p className="my-2 text-2xl font-medium">{nairaFormat(wallet?.balance, "usd")}</p>    

                </div>

                {/* <div className="">
                    <h4 className="text-xl font-semibold text-gray-500">Tron Wallet Wallet</h4>
                    <p className="text-4xl font-medium">TRX {0}</p>
                    <p className="my-4 font-medium">{nairaFormat(0)}</p>
                    <h6>Rate</h6>
                    <p className="text-sm font-bold text-gray-500">
                    1560.19 NGN/USDT

                    </p>

                </div> */}

            
            </div>

            <div className="px-2 lg:p-10 bg-black my-20 rounded text-white overflow-hidden">
                <h3 className="text-xl font-semibold">Transaction History (USDT)</h3>

                <div className='h-[500px] overflow-y-auto relative'>
                    <div className="px-4 sm:px-6 bg-rd-400 w-full lg:px-8 hover:border-gray-900">
                        <div className="mt-4 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    
                                    <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                                        <thead>
                                        <tr>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th>
                                        <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  status</th>
                                        <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                                            <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>
                              
                                        </tr>

                                        </thead>
                                            
                                        <tbody>
                                                                
                                            { wallet.transactions?.map(item => (
                                                <>                                    
                                                <tr key={item?.id}>
                                                <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                                    <p className="font-medium text-gray-600 leading-5">{item.transaction_type} </p>
                                                </td>
                                                <td className="relative whitespace-nowrap border-b border-gray-200 py-3 text-center flex justify-center items-center text-gray-900 text-sm">
                                                    <span className={`${statusStyle(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}>
                                                        {item?.status }
                                                    </span>
                                                    

                                        </td>  
                                
                                                <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                                    {item?.address ?? "Not Available"}
    
                                                </td> 
                                                <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.amount, "usd")}</p></td>
    
                                                <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                                    {dateFormater(item?.created_at)}
    
                                                </td>
    
                                
                                                </tr>
                                                </>
                                            ))}

                                            


                                    
                                        </tbody>     
                                    </table>
                                </div>     
                            </div>
                        </div>
                    </div>
            
        </div>
           
                <div className="md:px-0 px-1 w-full overflow-hidden bg-red-400  hover:border-gray-900">
                   
                                {/* <table className="w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th>
                                            <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>
                                            <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>
                              
                                    </tr>

                                    </thead>
                                        
                                    <tbody>
                                         { wallet?.transactions?.map(item => (

                                        <tr key={item?.id}>
                                            <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                                <p className="font-medium text-gray-600 leading-5">{item.transaction_type} </p>
                                            </td>
                                            <td className="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8">
                                                {item?.address ?? "Not Available"}

                                            </td> 
                                            <td className="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm text-gray-600/90  font-semibold "><p className="font-bold">{nairaFormat(item.amount, "usd")}</p></td>

                                            <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                                {dateFormater(item?.created_at)}

                                            </td>

                            
                                            </tr>
                                                                            ))}
                                
                                    </tbody>     
                                </table> */}
                                                 
                </div>     
                        </div>
    
            {/* <div className="px-2 lg:p-10 bg-black my-20 rounded text-white">
                <h3 className="text-xl font-semibold">Transaction History (TRX)</h3>
                

                <div className="md:px-4 px-1 w-full sm:px-6 overflow-x-auto lg:px-8 hover:border-gray-900">
                    <div className="mt-4 flow-root">
                        <div className="mx-0 my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  transaction</th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Address</th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Time </th>
                                            <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-900 backdrop-blur backdrop-filter">Amount</th>

                                
                                    </tr>

                                    </thead>
                                        
                                    <tbody>

                                           { wallet?.transactions?.map(item => (

                                        <tr key={item?.id}>
                                            <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                                <p className="font-medium text-gray-600 leading-5">{item.transaction_type} </p>
                                            </td>
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
            </div> */}
        </div>
        <div className="bg-black rounded-lg md:p-10 flex flex-col justify-between">
            <div className="min-h-[500px] bg-red- py-10 sticky top-3 flex justify-between flex-col">


            <div className="text-white flex justify-between bg--100 px-6">
                <div onClick={()=> setIsModalOpen(true)} className="flex text-purple-300 hover:text-alt cursor-pointer flex-col items-center justify-center">
                <WalletOutlined />
                <span  className="text-center">Add Funds</span>
                </div>
                <div onClick={()=> setIsWithdrawalModalOpen(true)} className="flex flex-col items-center justify-center">
                <RiUserReceived2Line  />
                <span className="text-center">Withdraw Funds</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                <TransactionOutlined />
                <span className="text-center">Transfer Funds</span>
                </div>
            </div>

            <div>
                <p className="text-alt text-center">click to copy USDT destination address </p>

                <p onClick={()=> navigator.clipboard.writeText(address)
                    .then(() => message.success("copied to clipboard"))
                    .catch(()=> message.error("Failed to copy"))
                } className="text-white bg-zinc-900 rounded-lg p-4 cursor-pointer">{address}</p>

            </div>

            </div>



        </div>
    </div>

    <AppModal title={"Fund Wallet"}  isModalOpen={isModalOpen} handleOk={()=> {}} handleCancel={()=> {setIsModalOpen(false)}}  >
        <div className="bg-purple- p-10">
            <AddFund handleSubmit={handleSubmit} coin_type={coinType} address={address}/>
        </div>
    </AppModal>

    <AppModal title={"Withdraw Funds"}  isModalOpen={isWithdrawModalOpened} handleOk={()=> {}} handleCancel={()=> {setIsWithdrawalModalOpen(false)}}  >
        <div className="bg-purple- p-10">
            <AddFund handleSubmit={handleWithdrawalSubmit} coin_type={coinType} disableAddress={false} address={address}/>
        </div>
    </AppModal>

    </>

  )
}

export default Account
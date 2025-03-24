import { LoginOutlined, TrophyOutlined } from "@ant-design/icons"
import { nairaFormat } from "../../utils/nairaFormat"
import './style.scss'
import NavButton from "../../compnents/button/NavButton"
import { converter } from "../../api/currencyConverter"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SelectInput from "../../compnents/select/Select"
import OrderTransact from "./components/Orders"
import DepositTransaction from "./components/DepositsTransaction"
import WithdrawalTransactions from "./components/WithdrawalTransaction"
import { getWallet } from "../../redux/actions/wallet"
import Loading from "../../compnents/loader/Loading"
import PowerComponent from "../../compnents/powerComponents/PowerComponent"
import MobileTopUpViewComponents from "./components/MobileTopUpViewComponent"
import CableTvComponents from "./components/CableTVCOmpoent"

const HomeDashboard = () => {
    const {wallet, loading} = useSelector(state => state.wallet)
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState("gift-cards")

    const [convertedAmount, setConvertedAmount] = useState(null)
    const [activeCurrency, setActiveCurrency] = useState("ngn")

    useEffect(()=>{
        dispatch(getWallet())
    }, [])
    const items = [
        {
            label: "Mobile Top Up",
            name: "Top Up",
            render: <MobileTopUpViewComponents/>,
            btn: "Mobile Top Up"
        },
        {
            label: "Pay Electric Bills",
            name: "Electric Bills",
            render: <PowerComponent/>,
            btn: "Electric Bills"

        },
        {
            label: "Subscribe Cable Tv",
            name: "TV Subscription",
            render: <CableTvComponents/>,
            btn: "Tv Subscription"

        }
    ]


    const {label} = items.find(item => item.name === selectedItem)

    useEffect(()=> {
        const fetchConversion = async() => {

            const result = await converter({fromCurr: "usd", toCurr: activeCurrency, amount: wallet?.balance})
            setConvertedAmount(result.calc)
        }

        fetchConversion()
    },[wallet?.balance, activeCurrency])


    // useEffect(()=> {

    //     dispatch(getConversion({to_curr: "ngn", from_curr: "usd", amount: 2000}))
    // },[])

  return (
    <div className="homeDashboard text-white w-full">
        <div className="account w-full info bg-black my-0 p-10 flex flex-col md:flex-row justify-between ">
            <div className="overflow-hidden">
                <div className="flex gap-10">
                <h3 className="text-xl">Wallet balance</h3>
                    <SelectInput onChange={(selectedOption)=> setActiveCurrency(selectedOption)} defaultValue={activeCurrency} options={[{value: "usd", label: "USD"}, {value: "eur", label: "EUR"}, {value: "ngn", label: "NGN"}]}/>

                </div>
           
                <div>
                    {loading ?               <div className=" pl-10">   <Loading/></div>
                    : 
                    <p className="text-5xl font-semibold "> {nairaFormat(wallet?.balance, "ngn")}</p>
                    }
                    {/* <p>{convertedAmount} </p> */}
                    {/* <p className="my-3">  {nairaFormat(convertedAmount, activeCurrency)}</p> */}
                    <p className="flex gap-4 my-4">  <TrophyOutlined className="text-yellow-700" />0.00</p>
                 </div>

                        
                <div className="flex overflow-x-auto  w-full my-10 no-scroll">
                    <div className="pr-6 border-r border-gray-700 ">

                        <div className="flex py-8 gap-3">
                            <span className="rounded-full border shrink-0 flex items-center justify-center h-8 w-8 border-white">
                            <LoginOutlined /> 
                            </span>
                            <span>
                                Trades
                            </span>
                        </div>
                        <p className="text-2xl ">  {nairaFormat(0,activeCurrency )}</p>

                    </div>
                    <div className="px-6 border-r border-gray-700 ">

                        <div className="flex py-8 gap-3">
                            <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                            <LoginOutlined /> 
                            </span>
                            <span>
                                Bought 
                            </span>
                        </div>
                        <p className="text-2xl ">  {nairaFormat(0, "ngn")}</p>

                    </div>

                    <div className="px-6 border-r border-gray-700 ">

                    <div className="flex py-8 gap-3">
                        <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                        <LoginOutlined /> 
                        </span>
                        <span>
                            Withdrawals
                        </span>
                    </div>
                    <p className="text-2xl ">  {nairaFormat(0, "ngn")}</p>

                    </div>

                    <div className="px-6 borde border-gray-700 ">

                    <div className="flex py-8 gap-3">
                        <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                        <LoginOutlined /> 
                        </span>
                        <span>
                            Sold
                        </span>
                    </div>
                    <p className="text-2xl ">  {nairaFormat(0, "ngn")}</p>

                    </div>


                </div>


        </div>
        {/* <div>
            <img src={wallet} alt="fake wallet" />dfdf
        </div> */}

        </div>

        <div className="bg-black p-4 lg:p-10 min-h-96">
            <div className="flex flex-col gap-3 md:flex-row justify-between">
                <h4 className="text-alt text-3xl font-medium">{label}</h4>
                <ul className="flex gap-3">
                    {items.map(item => (
                        <li key={item.label}><NavButton onClick={()=>setSelectedItem(item.name)} className={"bg-al text-black block  py-2 px-3 rounded-xl"}>  {item.btn}</NavButton></li>

                    ))
                }
               </ul>
            </div>
            <div className="flex justify-center items-center h-full">

                {items.map(item => {
                   if(item.name === selectedItem) {
                    return (
                        item.render
                    )}
                })}
                

                {/* <Outlet  /> */}


            </div>
        </div>
        
    </div>
  )
}

export default HomeDashboard
import { LoginOutlined, TrophyOutlined } from "@ant-design/icons"
import { nairaFormat } from "../../utils/nairaFormat"
import wallet from '../../assets/pngs/wallet.png'

import NavButton from "../../compnents/button/NavButton"
import { converter } from "../../api/currencyConverter"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import SelectInput from "../../compnents/select/Select"

const HomeDashboard = () => {
    const {wallet} = useSelector(state => state.wallet)

    const navigate = useNavigate()
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [activeCurrency, setActiveCurrency] = useState("usd")


    useEffect(()=> {
        const fetchConversion = async() => {

            const result = await converter({fromCurr: "usd", toCurr: activeCurrency, amount: wallet?.balance})
            console.log(result)
            setConvertedAmount(result)
        }

        fetchConversion()
    },[wallet?.balance, activeCurrency])

console.log(activeCurrency)
  return (
    <div className="homeDashboard text-white w-full">
        <div className="account w-full info bg-black my-10 p-4 md:p-10 flex flex-col md:flex-row justify-between ">
            <div className="overflow-hidden">
                <div className="flex gap-10">
                <h3 className="text-xl">Wallet balance</h3>
                <SelectInput onChange={(selectedOption)=> setActiveCurrency(selectedOption)} defaultValue={activeCurrency} options={[{value: "usd", label: "USD"}, {value: "eur", label: "EUR"}, {value: "ngn", label: "NGN"}]}/>

                </div>
           
                <div>
                    <p className="text-5xl font-semibold "> {nairaFormat(wallet?.balance, "usd")}</p>
                    <p className="my-3">  {nairaFormat(convertedAmount?.calc, activeCurrency)}</p>
                    <p className="flex gap-4 my-4">  <TrophyOutlined className="text-yellow-700" />0.00</p>
                 </div>

                        
                <div className="flex overflow-x-auto w-full my-10">
                    <div className="pr-6 border-r border-gray-700 ">

                        <div className="flex py-8 gap-3">
                            <span className="rounded-full border shrink-0 flex items-center justify-center h-8 w-8 border-white">
                            <LoginOutlined /> 
                            </span>
                            <span>
                                Total Trades
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
                                Total bought 
                            </span>
                        </div>
                        <p className="text-2xl ">  {nairaFormat(0, activeCurrency)}</p>

                    </div>

                    <div className="px-6 border-r border-gray-700 ">

                    <div className="flex py-8 gap-3">
                        <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                        <LoginOutlined /> 
                        </span>
                        <span>
                            Total Withdrawals
                        </span>
                    </div>
                    <p className="text-2xl ">  {nairaFormat(0, activeCurrency)}</p>

                    </div>

                    <div className="px-6 borde border-gray-700 ">

                    <div className="flex py-8 gap-3">
                        <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                        <LoginOutlined /> 
                        </span>
                        <span>
                            Total Sold
                        </span>
                    </div>
                    <p className="text-2xl ">  {nairaFormat(0, activeCurrency)}</p>

                    </div>


                </div>


        </div>
        <div>
            <img src={wallet} alt="" />
        </div>

        </div>

        <div className="bg-black p-4 lg:p-10 min-h-96">
            <div className="flex flex-col gap-3 md:flex-row justify-between">
                <h4 className="text-alt text-3xl font-medium">recent order</h4>
                <ul className="flex gap-3">
                <li><NavButton onClick={()=> navigate("/dashboard/home/orders-transaction?type=buy")} className={"bg-al text-black block  py-2 px-3 rounded-xl"}>  Buy Crypto</NavButton></li>

                <li><NavButton to="/dashboard/home/orders-transaction?type=sell" className={"bg-alt text-black block  py-2 px-3 rounded-xl"}>  Sell Crypto</NavButton></li>
                <li><NavButton to="/dashboard/home/orders-transaction?type=crypto" className={"bg-al text-black block  py-2 px-3 rounded-xl"}>  Buy Gift Cards</NavButton></li>
                </ul>
            </div>
            <div className="flex justify-center items-center h-full">
                

                <Outlet  />


            </div>
        </div>
        
    </div>
  )
}

export default HomeDashboard
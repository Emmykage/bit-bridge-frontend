import { LoginOutlined, TrophyOutlined } from "@ant-design/icons"
import { nairaFormat } from "../../utils/nairaFormat"
import wallet from '../../assets/pngs/wallet.png'

import NavButton from "../../compnents/button/NavButton"

const HomeDashboard = () => {
  return (
    <div className="text-white">
        <div className="account info bg-black my-10 p-10 flex justify-between bg-red-30">
            <div>
                <h3>Wallet balance</h3>
                <div>
                <p className="text-5xl font-semibold "> {nairaFormat(0)}</p>
                <p className="my-3">  {nairaFormat(0)} 0.00</p>
                <p className="flex gap-4 my-4">  <TrophyOutlined className="text-yellow-700" />0.00</p>
                
                        
            <div className="flex overflow-x-scroll my-10">
        <div className="pr-6 border-r border-gray-700 ">

    <div className="flex py-8 gap-3">
        <span className="rounded-full border flex items-center justify-center h-8 w-8 border-white">
        <LoginOutlined /> 
        </span>
        <span>
            Total Trades
        </span>
    </div>
    <p className="text-2xl ">  {nairaFormat(0)}</p>

    </div>
    <div className="px-6 border-r border-gray-700 ">

<div className="flex py-8 gap-3">
    <span className="rounded-full border flex items-center justify-center h-8 w-8 border-white">
    <LoginOutlined /> 
    </span>
    <span>
        Total bought 
    </span>
</div>
<p className="text-2xl ">  {nairaFormat(0)}</p>

</div>

<div className="px-6 border-r border-gray-700 ">

<div className="flex py-8 gap-3">
    <span className="rounded-full border flex items-center justify-center h-8 w-8 border-white">
    <LoginOutlined /> 
    </span>
    <span>
        Total Withdrawals
    </span>
</div>
<p className="text-2xl ">  {nairaFormat(0)}</p>

</div>

<div className="px-6 borde border-gray-700 ">

<div className="flex py-8 gap-3">
    <span className="rounded-full border flex items-center justify-center h-8 w-8 border-white">
    <LoginOutlined /> 
    </span>
    <span>
        Total Sold
    </span>
</div>
<p className="text-2xl ">  {nairaFormat(0)}</p>

</div>


</div>
            </div>


        </div>
        <div>
            <img src={wallet} alt="" />
        </div>

        </div>

        <div className="bg-black p-10 min-h-96">
            <div className="flex flex-col gap-3 md:flex-row justify-between">
                <h4 className="text-alt text-3xl font-medium">recent order</h4>
                <ul className="flex gap-3">
                <li><NavButton to="#" className={"bg-alt text-black block  py-2 px-3 rounded-xl"}>  Sell Crypto</NavButton></li>
                <li><NavButton to="#" className={"bg-al text-black block  py-2 px-3 rounded-xl"}>  Sell Crypto</NavButton></li>
                <li><NavButton to="#" className={"bg-al text-black block  py-2 px-3 rounded-xl"}>  Sell Crypto</NavButton></li>
                </ul>
            </div>
            <div className="flex justify-center items-center h-full">
                

                <p>
                    No record found
                </p>


            </div>
        </div>
        
    </div>
  )
}

export default HomeDashboard
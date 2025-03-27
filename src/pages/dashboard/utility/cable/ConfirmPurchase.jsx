import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { CheckCircleOutlined } from "@ant-design/icons"
import { getPurchaseOrder } from "../../../../redux/actions/purchasePower"
import BillOrderDetails from "../../../../compnents/confirmationDetails/billOrderDetails"
import ClassicBtn from "../../../../compnents/button/ClassicButton"
import { getWallet } from "../../../../redux/actions/wallet"

const DashboardCableComfirmPurchase = () => {
    const {purchaseOrder, message} = useSelector(state =>  state.purchase)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const queryId = searchParams.get("transaction_id")



    console.log("details of purchase", purchaseOrder)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPurchaseOrder(queryId))
        dispatch(getWallet())
    },[])

    return (
        <>
        {message && 
          <div className="bg-green-200 p-4 my-4">
            <p className="text-green-800 items-center flex gap-2 font-semibold text-center">

            <CheckCircleOutlined />
            Transaction Completed

            </p>
        </div>
        }
      
                <BillOrderDetails purchaseOrder={purchaseOrder}/>
        
        <div>
            <ClassicBtn onclick={()=> navigate("/dashboard/home")}>Back to Home Page</ClassicBtn>
        </div>
        </>
    )
}

export default DashboardCableComfirmPurchase

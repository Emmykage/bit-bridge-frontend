import { useDispatch, useSelector } from "react-redux"
import ClassicBtn from "../../../compnents/button/ClassicButton"
import { useEffect } from "react"
import { getPurchaseOrder } from "../../../redux/actions/purchasePower"
import { useNavigate, useSearchParams } from "react-router-dom"
import { nairaFormat } from "../../../utils/nairaFormat"
import { CheckCircleOutlined } from "@ant-design/icons"

const ComfirmPurchase = () => {
    const {purchaseOrder, message} = useSelector(state =>  state.purchase)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const queryId = searchParams.get("transaction_id")



    console.log("details of purchase", purchaseOrder)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPurchaseOrder(queryId))
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
      
        <div className="p-4 border rounded-lg">
        <div className="  md:flex-row flex-col flex gap-4">
                <p className="md:w-60 border-b px-2 font-semibold">Tokenqwq</p>
                <p className="flex-1 border-b px-2 font-bold text-3xl">{purchaseOrder?.token}</p>
            </div>
            <div className="  md:flex-row my-4 flex-col flex gap-4">
                <p className="md:w-60 md:border-b px-2 font-semibold">Customer Name</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.customer_name}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 md:border-b px-2 font-semibold">Address</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.meter_address}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 md:border-b px-2 font-semibold">Meter Number</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.meter_number}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 md:border-b px-2 font-semibold">Amount</p>
                <p className="flex-1 border-b px-2">{nairaFormat(purchaseOrder?.amount ?? 0)}</p>
            </div>
            <div className="gap-4 my-4 md:flex-row flex-col flex">
                <p className="w-60 md:w-60 md:border-b px-2 font-semibold">Total PayableAmount</p>
                <p className="flex-1 border-b px-2">{nairaFormat(Number(purchaseOrder?.amount ?? 0) + 200)}</p>
            </div>
            {/* <div className="border-b my-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 font-semibold">Transaction ID</p>
                <p className="flex-1">{purchaseOrder?.amount}</p>
            </div> */}
              <div className="gap-4 my-4 flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Transaction ID</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.transaction_id}</p>
            </div>
            <div className="gap-4 my-4 md:flex-row flex-col  flex">
                <p className="w-60 px-2 md:w-60 font-semibold">Purchase ID</p>
                <p className="flex-1 px-2">{purchaseOrder?.id}</p>
            </div>
        </div>

        <div>
            <ClassicBtn onclick={()=> navigate("/")}>Back to Home Page</ClassicBtn>
        </div>
        </>
    )
}

export default ComfirmPurchase

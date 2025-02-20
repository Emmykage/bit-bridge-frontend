import { useDispatch, useSelector } from "react-redux"
import ClassicBtn from "../../../compnents/button/ClassicButton"
import { useEffect } from "react"
import { confirmDataPurchase, getPurchaseOrder } from "../../../redux/actions/purchasePower"
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom"
import { nairaFormat } from "../../../utils/nairaFormat"
import { CheckCircleOutlined } from "@ant-design/icons"
import { toast } from "react-toastify"

const PurchaseDataDetails = () => {
    const {purchaseOrder, message} = useSelector(state =>  state.purchase)
    const [searchParams] = useSearchParams()
    const [id] = useOutletContext()

    const navigate = useNavigate()

    const queryId = searchParams.get("transaction_id")
    const dispatch = useDispatch()

    const handleConfirmation = () => {
        dispatch(confirmDataPurchase({queryId, status: "completed"})).then(
            result => {
                if(confirmDataPurchase.fulfilled.match(result)){
                    const data  = result.payload.data 
                    navigate(`/phone-top-up/${id}/confirm-payment?transaction_id=${data?.id}`)
                    console.log("sasdsdasdsda",result.payload)
                }else{
                    const data  = result.payload 
                    console.log(data)
                    toast(data?.message || "Failed to make purchase", {type: "error"})

                }
            }
        )
    }



    useEffect(()=> {
        dispatch(getPurchaseOrder(queryId))
    },[])
    return (
        <>
        <div className="py-20 my-10">

        {message && 
          <div className="bg-green-200 p-4 my-4">
            <p className="text-green-800 items-center flex gap-2 font-semibold text-center">

            <CheckCircleOutlined />
            Transaction initiated

            </p>
        </div>
        }
      
        <div className="p-4 border rounded-lg">
            <div className="  md:flex-row flex-col flex gap-4">
                <p className="md:w-60 border-b px-2 font-semibold">Customer Name</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.name}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Address</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.address}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Meter Number</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.meter_number}</p>
            </div>
            <div className="my-4 gap-4 md:flex-row flex-col  flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Amount</p>
                <p className="flex-1 border-b px-2">{nairaFormat(purchaseOrder?.amount ?? 0)}</p>
            </div>
            {
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b px-2 font-semibold">Service Charge</p>
            <p className="flex-1 border-b px-2">{nairaFormat(100)}</p>
        </div>

    }
    
            <div className="gap-4 my-4 flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Total Payable Amount</p>
                <p className="flex-1 border-b px-2">{nairaFormat(Number(purchaseOrder?.total_amount ?? 0))}</p>
            </div>
            <div className="gap-4 my-4 md:flex-row flex-col  flex">
                <p className="w-60 border-b px-2  md:w-60 font-semibold">Status</p>
                <p className="flex-1 border-b px-2">{purchaseOrder?.status}</p>
            </div>
            <div className="gap-4 my-4 md:flex-row flex-col  flex">
                <p className="w-60 px-2 md:w-60 font-semibold">Order ID</p>
                <p className="flex-1 px-2">{purchaseOrder?.id}</p>
            </div>
        </div>

        <div>
            <ClassicBtn onclick={handleConfirmation}>Confirm Payment</ClassicBtn>
        </div>

        </div>

        </>
    )
}

export default PurchaseDataDetails
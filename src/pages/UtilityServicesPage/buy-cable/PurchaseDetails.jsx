import { useDispatch, useSelector } from "react-redux"
import ClassicBtn from "../../../compnents/button/ClassicButton"
import { useEffect, useState } from "react"
import { confirmPayment, getPurchaseOrder } from "../../../redux/actions/purchasePower"
import { NavLink, useNavigate, useOutletContext, useSearchParams } from "react-router-dom"
import { nairaFormat } from "../../../utils/nairaFormat"
import { CheckCircleOutlined } from "@ant-design/icons"
import { toast } from "react-toastify"
import { PaystackButton } from "react-paystack"

const PurchaseCableDetails = () => {
    const {purchaseOrder, message} = useSelector(state =>  state.purchase)
    const {user} = useSelector(state =>  state.auth)
    const [email, setEmail] = useState("")
    const [searchParams] = useSearchParams()
    const [id] = useOutletContext()

    const navigate = useNavigate()
    const publicKey = "pk_test_f833f603b86e23ffa37f40f2e90056de9b928bf7"

    const queryId = searchParams.get("transaction_id")
    const dispatch = useDispatch()

    const handleConfirmation = (payment_method) => {
        dispatch(confirmPayment({queryId, payment_method})).then(
            result => {
                if(confirmPayment.fulfilled.match(result)){
                    const data  = result.payload 

                    console.log(data)
                    toast(data?.message || "Order confirmed", {type: "success"})

                    navigate(`/utility-services/${id}/confirm-payment?transaction_id=${data?.data.id}`)

                }else{
                    const data  = result.payload 

                    toast(data?.message || "Failed to make purchase", {type: "error"})

                }
            }
        )
    }


    
    
  const componentProps = {
    email: purchaseOrder.email ?? user?.emal,
    amount: purchaseOrder.total_amount * 100,
  
    publicKey,
    text: 'Pay With Card',
    onSuccess: () => {
      alert('Purchase successful');
      handleConfirmation("card")
        },
    onClose: () => alert('Are you sure'),
  }; 

    useEffect(()=> {
        dispatch(getPurchaseOrder(queryId))
    },[])

    console.log(purchaseOrder)
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
            <div className="gap-4 my-4 flex">
                <p className="w-60 md:w-60 border-b px-2 font-semibold">Total PayableAmount</p>
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
            <div className="gap-4 my-4 md:flex-row flex-col  flex">
                <p className="w-60 px-2 md:w-60 font-semibold">Email</p>
                {/* <p className="flex-1 px-2 ">{user ? purchaseOrder.email :<input type="text" onChange={(e) => setEmail(e.target.value)} value={user ? user.email : email} className="bg-gray-100 border-none outline-none max-w-xl w-full py-2" />}</p> */}
                <p className="flex-1 px-2 ">{ purchaseOrder.email ?? user?.emal}</p>
            </div>
        </div>
        <div className="bg-gray-100 flex justify-center items-center flex-col gap-6 min-h-60 p-4 md:p-8 rounded-lg">

        {
            user ?  
            <div className="w-full">
                <button className="border-alt m-auto block max-w-sm w-full h-20 bg-alt rounded-lg  border px-4 py-2 shadow-md text-primary text-xl font-medium"
                 onClick={()=> handleConfirmation("wallet")}>Pay from Wallet</button>
            </div>
            :

            <p className="text-center font-medium text-primary  text-lg">
                <NavLink className={"hover:text-alt"} to={"/login"}>Login</NavLink>  to pay with from your wallet
            </p>
        }
             

            <div className="w-full">
                {/* <ClassicBtn onclick={()=> handleConfirmation("card")}>Pay with Card</ClassicBtn> */}

                <PaystackButton disabled={email.trim() == ""} onClick={()=> {
                    email.trim() == "" 
                }} className="border-alt m-auto block max-w-sm w-full h-20 bg-primary rounded-lg  border px-4 py-2 shadow-md text-alt font-medium text-xl" {...componentProps}/>
            </div>

        </div>


        </div>

        </>
    )
}

export default PurchaseCableDetails
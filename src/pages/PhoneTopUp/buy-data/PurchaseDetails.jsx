import { useDispatch, useSelector } from "react-redux"
import ClassicBtn from "../../../compnents/button/ClassicButton"
import { useEffect } from "react"
import { confirmDataPurchase, getPurchaseOrder } from "../../../redux/actions/purchasePower"
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom"
import { nairaFormat } from "../../../utils/nairaFormat"
import { CheckCircleOutlined } from "@ant-design/icons"
import { toast } from "react-toastify"
import BillOrderDetails from "../../../compnents/confirmationDetails/billOrderDetails"
import PaymentOptions from "../../../compnents/paymentOptions/PaymentOptions"

const PurchaseDataDetails = () => {
    const {purchaseOrder, message} = useSelector(state =>  state.purchase)
    const [searchParams] = useSearchParams()
    const [id] = useOutletContext()
    const {user} = useSelector(state =>  state.auth)

    const componentProps = {
        email: purchaseOrder.email ?? user?.emal,
        amount: purchaseOrder.total_amount * 100,
      
        publicKey: "pk_test_f833f603b86e23ffa37f40f2e90056de9b928bf7",
        text: 'Pay With Card',
        onSuccess: () => {
          handleConfirmation("card")
            },
        // onClose: () => alert('Are you sure'),
      }; 
    
    const navigate = useNavigate()

    const queryId = searchParams.get("transaction_id")
    const dispatch = useDispatch()

    const handleConfirmation = () => {
        dispatch(confirmDataPurchase({queryId, status: "completed"})).then(
            result => {
                if(confirmDataPurchase.fulfilled.match(result)){
                    const data  = result.payload.data 
                    navigate(`/phone-top-up/${id}/confirm-payment?transaction_id=${data?.id}`)
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
        <div className="py-20">

        {message && 
          <div className="bg-green-200 p-4 my-4">
            <p className="text-green-800 items-center flex gap-2 font-semibold text-center">

            <CheckCircleOutlined />
            Transaction initiated

            </p>
        </div>
        }
      
        <BillOrderDetails 
              purchaseOrder={purchaseOrder}/>

        <div>
 <PaymentOptions 
      componentProps={componentProps}
      handleConfirmation={handleConfirmation}
      purchaseOrder={purchaseOrder}
      />            {/* <ClassicBtn onclick={handleConfirmation}>Confirm Payment</ClassicBtn> */}
        </div>

        </div>

        </>
    )
}

export default PurchaseDataDetails
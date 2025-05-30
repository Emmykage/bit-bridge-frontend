import { nairaFormat } from '../../utils/nairaFormat'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const BillOrderDetails = ({
    purchaseOrder
}) => {
    const {user} = useSelector(state =>  state.auth)

    const pickLabel = (type) => {

        switch (type) {
            case "vtu":
            case "data":
                return "Phone Number"
            case "tv":
            return "Decoder ID"
            case "electricity":
                return "Meter Number"
                        
            default:
               return "Number"
            }
    }

  return (
    <div className="md:p-4 px-2 border mt-4  border-gray-700 rounded-lg text-white">
        {
            purchaseOrder?.token && 
                    <div className="  md:flex-row flex-col flex gap-4">
                    <p className="md:w-60 border-b  border-gray-700 px-2 font-semibold">Token</p>
                    <p className="flex-1 border-b  border-gray-700 px-2 font-bold text-3xl">{purchaseOrder?.token}</p>
                </div>
        }
    {
        purchaseOrder?.name && 
        <div className={`${purchaseOrder?.service_type === "VTU" || purchaseOrder?.service_type === "VTU" ? "hidden" : "flex"} gap-4 my-4 md:flex-row flex-col  `}>
            <p className="md:w-60 border-b  border-gray-700 px-2 font-semibold">Customer Name</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{purchaseOrder?.name}</p>
        </div>

    }
       {
        purchaseOrder?.address && 
        <div className={`${purchaseOrder?.service_type === "VTU" || purchaseOrder?.service_type === "VTU" ? "hidden" : "flex"} gap-4 my-4 md:flex-row flex-col  `}>
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Address</p>
            <p className="flex-1 border-b border-gray-700 px-2">{purchaseOrder?.address}</p>
        </div>

    }

{
        purchaseOrder?.meter_number && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">{pickLabel(purchaseOrder?.service_type.toLowerCase())}</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{purchaseOrder?.meter_number}</p>
        </div>

    }

{
        purchaseOrder?.biller && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Biller</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{purchaseOrder?.biller}</p>
        </div>

    }
    

{
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Amount</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{nairaFormat(purchaseOrder?.amount ?? 0)}</p>
        </div>

    }
    {
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Service Charge</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{nairaFormat(purchaseOrder?.service_charge)}</p>
        </div>

    }
    

    

{
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Total Payable Amount</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{nairaFormat(Number(purchaseOrder?.total_amount))}</p>
         </div>

            }
        {
            purchaseOrder?.transaction_id &&
        <div className="gap-4 my-4 md:flex-row flex-col flex">
                        <p className="w-60 md:w-60 border-b  border-gray-700 px-2 font-semibold">Transaction ID</p>
                        <p className="flex-1 border-b  border-gray-700 px-2">{purchaseOrder?.transaction_id}</p>
                    </div>
        }
    {
        purchaseOrder?.status &&
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 border-b  border-gray-700 px-2  md:w-60 font-semibold">Status</p>
            <p className="flex-1 border-b  border-gray-700 px-2">{purchaseOrder?.status}</p>
        </div>
    }
    {
        purchaseOrder?.id &&
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
        <p className="w-60 px-2 md:w-60 font-semibold">Order ID</p>
        <p className="flex-1 px-2">{purchaseOrder?.id}</p>
        </div>
    }
  

  {
    purchaseOrder.email && 
    <div className="gap-4 my-4 md:flex-row flex-col  flex">
    <p className="w-60 px-2 md:w-60 font-semibold">Email</p>
    {/* <p className="flex-1 px-2 ">{user ? purchaseOrder.email :<input type="text" onChange={(e) => setEmail(e.target.value)} value={user ? user.email : email} className="bg-gray-100 border-none outline-none max-w-xl w-full py-2" />}</p> */}
    <p className="flex-1 px-2 ">{ purchaseOrder.email ?? user?.emal}</p>
    </div>
  }
  
    

    </div>  )
}

BillOrderDetails.propTypes = {
    purchaseOrder: PropTypes.object
}

export default BillOrderDetails
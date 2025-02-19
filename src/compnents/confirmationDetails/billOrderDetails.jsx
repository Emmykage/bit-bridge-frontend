import { nairaFormat } from '../../utils/nairaFormat'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const BillOrderDetails = ({
    purchaseOrder
}) => {
    const {user} = useSelector(state =>  state.auth)

  return (
    <div className="p-4 border rounded-lg">
    {
        purchaseOrder?.name && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="md:w-60 border-b px-2 font-semibold">Customer Name</p>
            <p className="flex-1 border-b px-2">{purchaseOrder?.name}</p>
        </div>

    }
       {
        purchaseOrder?.address && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b px-2 font-semibold">Address</p>
            <p className="flex-1 border-b px-2">{purchaseOrder?.address}</p>
        </div>

    }

{
        purchaseOrder?.meter_number && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b px-2 font-semibold">Meter Number</p>
            <p className="flex-1 border-b px-2">{purchaseOrder?.meter_number}</p>
        </div>

    }
    

{
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b px-2 font-semibold">Amount</p>
            <p className="flex-1 border-b px-2">{nairaFormat(purchaseOrder?.amount ?? 0)}</p>
        </div>

    }

{
        purchaseOrder?.amount && 
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 md:w-60 border-b px-2 font-semibold">Total PayableAmount</p>
            <p className="flex-1 border-b px-2">{nairaFormat(Number(purchaseOrder?.total_amount ?? 0))}</p>
         </div>

            }
        {
            purchaseOrder?.transaction_id &&
        <div className="gap-4 my-4 md:flex-row flex-col flex">
                        <p className="w-60 md:w-60 border-b px-2 font-semibold">Transaction ID</p>
                        <p className="flex-1 border-b px-2">{purchaseOrder?.transaction_id}</p>
                    </div>
        }
    {
        purchaseOrder?.status &&
        <div className="gap-4 my-4 md:flex-row flex-col  flex">
            <p className="w-60 border-b px-2  md:w-60 font-semibold">Status</p>
            <p className="flex-1 border-b px-2">{purchaseOrder?.status}</p>
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
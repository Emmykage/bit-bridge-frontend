import PropTypes from 'prop-types'
import { PaystackButton } from 'react-paystack'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const PaymentOptions = ({
    handleConfirmation,
    purchaseOrder,
    componentProps
}) => {
    const {user} = useSelector(state => state.auth)
  return (
    <div className="bg-gray-100/10 mt-4 flex justify-center items-center flex-col gap-6 min-h-60 p-4 md:p-8 rounded-lg">

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
            <PaystackButton disabled={!purchaseOrder.email} className="border-alt m-auto block max-w-sm w-full h-20 bg-primary rounded-lg  border px-4 py-2 shadow-md text-alt font-medium text-xl" {...componentProps}/>
        </div>

    </div>  )
}
PaymentOptions.propTypes = {
    handleConfirmation: PropTypes.func,
    purchaseOrder: PropTypes.func,
    componentProps: PropTypes.func
}
export default PaymentOptions
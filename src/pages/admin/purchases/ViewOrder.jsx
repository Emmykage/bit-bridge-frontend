import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../../redux/actions/order'
import { nairaFormat } from '../../../utils/nairaFormat'
// import ClassicBtn from '../../../compnents/button/ClassicButton'
import AppModal from '../../../compnents/modal/Modal'
import { Button, Form } from 'antd'
import FormInput from '../../../compnents/formInput/FormInput'
import './styles.scss'
import { createCardToken } from '../../../redux/actions/orderToken'
import { toast } from 'react-toastify'
import { getBillOrder } from '../../../redux/actions/billOrders'
import dateFormater from '../../../utils/dateFormat'
import { SET_LOADING } from '../../../redux/app'
import { queryTransaction } from '../../../redux/actions/purchasePower'
import Detail from '../../../compnents/queryDetails/Details'

const ViewOrder = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { billOrder: order } = useSelector((state) => state.order)
  // const {cardToken} = useSelector(state => state.orderToken)
  const [selectedId, setSelectedId] = useState(null)
  const [open, setOpen] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [data, setQueryData] = useState(null)

  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(getBillOrder(id))
    handleUpdate
  }, [])

  const handleUpdate = (values) => {
    dispatch(createCardToken({ card_token: values })).then((result) => {
      if (createCardToken.fulfilled.match(result)) {
        toast(result?.payload?.message, { type: 'success' })
        dispatch(getOrder(id))

        setOpen(false)
      } else {
        toast(result.payload?.message || 'Something went wrong', { type: 'error' })
      }
    })
  }

  const handleQueryTransaction = () => {
    dispatch(SET_LOADING(true))

    dispatch(queryTransaction({ id })).then((result) => {
      if (queryTransaction.fulfilled.match(result)) {
        dispatch(SET_LOADING(false))
        toast(result.payload.message ?? 'query successful', { type: 'success' })
        setOpenModal(true)
        setQueryData(result.payload.data)
        return
      } else {
        console.log(result)

        toast(result.payload.message ?? 'Query Failed', { type: 'error' })

        dispatch(SET_LOADING(false))
      }
    })
  }

  return (
    <>
      <div className="m-auto max-w-7xl my-10">
        <Button
          onClick={handleQueryTransaction}
          className="border-alt m-auto my-10 block w-full h-20 bg-primary text-black rounded-lg  border shadow-md font-medium text-xl"
          type="primary"
        >
          {' '}
          Query Transaction
        </Button>
        <div className="bg-white p-4 rounded-lg shadow ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1 ">
              <p className="text-gray-500 my-2 font-semibold">
                {' '}
                <span className="text-gray-800 font-semibold">Email</span> : {order?.email}{' '}
              </p>
              <p className="text-gray-500 my-2 font-semibold">
                <span className="text-gray-800 my-2 font-semibold">Total Amount</span> :{' '}
                <span> {nairaFormat(order?.total_amount, 'ngn')}</span>{' '}
              </p>
              <p className="text-gray-500 my-2 font-semibold">
                <span className="text-gray-800 my-2 font-semibold">Provider</span> :{' '}
                <span> {order?.biller}</span>{' '}
              </p>
              <p className="text-gray-500 my-2 font-semibold">
                <span className="text-gray-800 my-2 font-semibold">Transaction ID</span> :{' '}
                <span> {order?.tranaction_id}</span>{' '}
              </p>
            </div>

            <div className="flex-1 ">
              <p className="text-gray-600 my-2 font-semibold">
                {' '}
                <span>OrderId </span>: {id}{' '}
              </p>
              <p className="text-gray-600 my-2 font-semibold">
                {' '}
                <span>Payment Method </span>: {order?.payment_method}{' '}
              </p>
              <p className="my-2">
                <span className="text-gray-800  font-semibold capitalize">Status</span> :{' '}
                <span className={`capitalize ${order?.status === 'completed' && 'text-green-600'}`}>
                  {order?.status}{' '}
                </span>
              </p>

              <p>
                Date: <span className="capitalize"> {dateFormater(order?.created_at)}</span>
              </p>
            </div>
          </div>

          <div className="border-t gap-2 grid md:grid-cols-2 p-4 mt-10 min-h-40">
            <div>
              <p className="text-base font-medium">
                Reciepient: <span className="capitalize font-normal"> {order?.meter_number}</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium">
                Name: <span className="capitalize font-normal"> {order?.name}</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium">
                Meter Type: <span className="capitalize font-normal"> {order?.meter_type}</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium">
                Tarrif Class:{' '}
                <span className="capitalize font-normal"> {order?.tariff_class ?? 'N/A'}</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium">
                Service Type: <span className="capitalize font-normal"> {order?.service_type}</span>
              </p>
            </div>
            <div>
              <p className="text-base font-medium">
                Payment Type: <span className="capitalize font-normal"> {order?.payment_type}</span>
              </p>
            </div>
          </div>
          <div>
            {order?.token && (
              <div>
                <p className="text-xl font-medium">
                  Token: <span className="capitalize font-normal"> {order?.token}</span>
                </p>
              </div>
            )}
          </div>

          <div>
            <p>Response Message:</p>
            <p className="">{order?.reason ?? 'None'}</p>
          </div>
        </div>
      </div>

      <div className="">
        <AppModal handleCancel={() => setOpen(false)} className="add-gift-token" isModalOpen={open}>
          <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
              handleUpdate({
                ...values,
                reveal: false,
                order_item_id: selectedId,
              })
            }}
            initialValues={{
              token: '',
            }}
          >
            <FormInput label={'Enter Gift Card Code'} name={'token'} />

            <Button htmlType="submit">Submit</Button>
          </Form>
        </AppModal>
      </div>

      {data && (
        <AppModal handleCancel={() => setOpenModal(false)} isModalOpen={openModal}>
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Transaction Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <Detail label="Order ID" value={data.orderId} />
              <Detail label="Disco" value={data.disco} />
              <Detail label="Amount Generated" value={`₦${data.amountGenerated}`} />
              <Detail label="Total Amount Paid" value={`₦${data.totalAmountPaid}`} />
              <Detail label="Vend Amount" value={`₦${data.vendAmount}`} />
              <Detail label="Units" value={data.units} />
              <Detail label="Vend Time" value={data.vendTime} />
              <Detail label="Token" value={data.token || 'N/A'} />
              <Detail label="Receipt No" value={data.receiptNo} />
              <Detail label="Response" value={data.responseMessage} />
              <Detail label="Response Code" value={data.responseCode} />
              <Detail label="Name" value={data.name} />
              <Detail label="Phone No" value={data.phoneNo || 'N/A'} />
              <Detail label="Address" value={data.address} />
              <Detail label="Debt Amount" value={`₦${data.debtAmount}`} />
              <Detail label="Debt Remaining" value={`₦${data.debtRemaining}`} />
              <Detail label="Demand Category" value={data.demandCategory} />
              <Detail label="Asset Provider" value={data.assetProvider} />
              <Detail label="Tariff Index" value={data.tariffIndex || 'N/A'} />
              <Detail label="Charges" value={`₦${data.charges}`} />
            </div>
          </div>
        </AppModal>
      )}
    </>
  )
}

export default ViewOrder

import { TrophyOutlined } from '@ant-design/icons'
import { nairaFormat } from '../../utils/nairaFormat'
import './style.scss'
import NavButton from '../../compnents/button/NavButton'
// import { converter } from "../../api/currencyConverter"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import SelectInput from "../../compnents/select/Select"

import Loading from '../../compnents/loader/Loading'
import PowerComponent from '../../compnents/powerComponents/PowerComponent'
import MobileTopUpViewComponents from './components/MobileTopUpViewComponent'
import CableTvComponents from './components/CableTVCOmpoent'
import { MdAddCard, MdOutlineSell } from 'react-icons/md'
import { PiHandWithdraw } from 'react-icons/pi'
import { getRescentPurchaseOrder, repurchaseOrder } from '../../redux/actions/purchasePower'
import { SET_LOADING } from '../../redux/app'
import { useLocation, useNavigate } from 'react-router-dom'
import AppModal from '../../compnents/modal/Modal'

import ClassicBtn from '../../compnents/button/ClassicButton'
import pickColorStyle from '../../utils/slect-color'
import AccountCreationWizard from '../../compnents/accountCreationWizard/AccountCreationWizard'
import AccountNumbers from '../../compnents/accountComponents/AccountComponents'
import { createAccount, getAccounts } from '../../redux/actions/account'
import { userProfile } from '../../redux/actions/auth'
import { Button, Form } from 'antd'
import FormInput from '../../compnents/formInput/FormInput'
// import ClickButton from "../../compnents/button/Button"

const HomeDashboard = () => {
  const { recentOrders } = useSelector((state) => state.purchase)
  const { wallet, loading } = useSelector((state) => state.wallet)
  const { user } = useSelector((state) => state.auth)
  const { accounts, loading: accountLoading } = useSelector((state) => state.account)

  const dispatch = useDispatch()
  const [open, setIsOpen] = useState(false)
  const [openMonify, setIsOpenMonify] = useState(false)
  const [isAncorModal, setIsAncorModal] = useState(false)
  const [openAccount, setIsOpenAccount] = useState(false)
  const [selectedBiller, setSelectedBillier] = useState()
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState('Top Up')
  const [current, setCurrent] = useState(1)

  const [formData, setFormData] = useState({})
  const [accountDetails, setAccountDetails] = useState(null)

  const handleRepurchase = (id) => {
    dispatch(SET_LOADING(true))
    dispatch(repurchaseOrder(id)).then((result) => {
      if (repurchaseOrder.fulfilled.match(result)) {
        dispatch(SET_LOADING(false))
        const data = result.payload.data
        dispatch(SET_LOADING(false))
        setIsOpen(false)
        navigate(`/dashboard/confirm/${data?.id}`)
      } else {
        dispatch(SET_LOADING(false))
      }
    })
  }

  const handleSubmit = (values) => {
    dispatch(SET_LOADING(true))
    dispatch(createAccount({ account: values }))
      .unwrap()
      .then(() => {
        dispatch(userProfile())
        dispatch(SET_LOADING(false))
        setOpenAlert(false)

        setOpen(false)
      })
      .catch((error) => {
        dispatch(SET_LOADING(false))
        console.error('Error creating account:', error)
      })
  }

  useEffect(() => {
    dispatch(getRescentPurchaseOrder())
  }, [])

  useEffect(() => {
    console.log('Call accounts')
    dispatch(getAccounts())
  }, [])

  console.log(accountLoading, accounts)

  const items = [
    {
      label: 'Mobile Top Up',
      name: 'Top Up',
      render: <MobileTopUpViewComponents />,
      btn: 'Mobile Top Up',
    },
    {
      label: 'Pay Electric Bills',
      name: 'Electric Bills',
      render: <PowerComponent />,
      btn: 'Electric Bills',
    },
    {
      label: 'Subscribe Cable Tv',
      name: 'TV Subscription',
      render: <CableTvComponents />,
      btn: 'Tv Subscription',
    },
  ]

  const { label } = items.find((item) => item.name === selectedItem)

  // useEffect(()=> {
  //     const fetchConversion = async() => {

  //         const result = await converter({fromCurr: "usd", toCurr: activeCurrency, amount: wallet?.balance})
  //         setConvertedAmount(result.calc)
  //     }

  //     fetchConversion()
  // },[wallet?.balance, activeCurrency])

  console.log(user)

  const handleGenerate = (i, data = {}) => {
    if (i === 0) {
      setIsOpenMonify(true)
    } else {
      console.log(1, data)
      setFormData(data)
      setCurrent(data?.status === 'verifying' ? 2 : data?.status === 'unverified' ? 1 : 0)
      setIsAncorModal(true)
    }
  }
  return (
    <>
      <div className="homeDashboard text-white w-full">
        <div className="account w-full info bg-black my-0 p-5 md:p-10 flex flex-col md:flex-row justify-between ">
          <div className="overflow-hidden">
            <div className="flex gap-5 md:gap-10">
              <h3 className="md:text-xl">Wallet balance</h3>
              {/* <SelectInput onChange={(selectedOption)=> setActiveCurrency(selectedOption)} defaultValue={activeCurrency} options={[{value: "usd", label: "USD"}, {value: "eur", label: "EUR"}, {value: "ngn", label: "NGN"}]}/> */}
            </div>

            <div>
              {loading ? (
                <div className=" pl-10">
                  {' '}
                  <Loading />
                </div>
              ) : (
                <p className="md:text-5xl text-3xl font-semibold ">
                  {' '}
                  {nairaFormat(wallet?.balance, 'ngn')}
                </p>
              )}
              {user?.accounts[0]?.account_number && (
                <p className="text-sm">
                  {' '}
                  <span
                    onClick={() => setIsOpenAccount(true)}
                    className="font-semibold hover:text-alt transition-all duration-200 cursor-pointer"
                  >
                    Moniepoint
                  </span>{' '}
                  :{' '}
                  <span className="bloc text-green-200"> {user?.account?.[0]?.account_number}</span>
                </p>
              )}
              <p className="flex gap-4 my-4">
                {' '}
                <TrophyOutlined className="text-yellow-700" />
                {nairaFormat(wallet?.commission ?? 0, 'ngn')}
              </p>
            </div>

            <div className="flex overflow-x-auto gap-3 md:gap-5  w-full my-4 md:my-10 no-scroll">
              <div className="px-5 md:min-w-60  border-r min-w-40 bg-gray-800/50 rounded border-gray-700 py-3">
                <div className="flex md:py-8  py-1 gap-3">
                  <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                    <MdAddCard />
                  </span>
                  <span>Bought</span>
                </div>
                <p className="md:text-2xl text-lg"> {nairaFormat(wallet?.total_bills, 'ngn')}</p>
              </div>

              <div className="px-5 md:min-w-60  border-r min-w-40 bg-gray-800/50 rounded border-gray-700 py-3">
                <div className="flex md:py-8 py-1 gap-3">
                  <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                    <PiHandWithdraw />
                  </span>
                  <span>Withdrawals</span>
                </div>
                <p className="md:text-2xl text-lg"> {nairaFormat(wallet?.withdrawn, 'ngn')}</p>
              </div>

              <div className="px-5 md:px-6 borde min-w-60  bg-gray-800/50 rounded border-gray-700 py-3">
                <div className="flex md:py-8 py-1 bg-red-5 gap-3">
                  <span className="rounded-full shrink-0 border flex items-center justify-center h-8 w-8 border-white">
                    <MdOutlineSell />
                  </span>
                  <span>Sold</span>
                </div>
                <p className="md:text-2xl text-lg "> {nairaFormat(0, 'ngn')}</p>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={wallet} alt="fake wallet" />dfdf
        </div> */}
        </div>

        <AccountNumbers
          accounts={accounts}
          generate={handleGenerate}
          onView={(i, data) => {
            console.log(i)
            if (i == 0) {
              setAccountDetails(data)
            } else {
              setAccountDetails(data)
            }
            setIsOpenAccount(true)
          }}
        />

        <div className="bg-black p-4 lg:p-10 rounded-lg min-h-96">
          <div className="bg-black px-0 mb-10">
            <h5 className="mb-4 text-xl">Recent Transactions</h5>

            <div className="flex grid-cols-4 gap-4 max-w-4xl ">
              {recentOrders?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setIsOpen(true)
                    setSelectedBillier(item)
                  }}
                  className={`${pickColorStyle(item.biller)} cursor-pointer  rounded-lg text-sm h-16 w-20 shadow-sm flex flex-col justify-center items-center`}
                >
                  <span> {item.biller}</span>
                  <span className="text-sm"> {nairaFormat(item.amount)} </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <h4 className="text-alt md:text-3xl text-lg font-medium">{label}</h4>
            <ul className="flex flex-wrap gap-3">
              {items.map((item) => (
                <li key={item.label}>
                  <NavButton
                    onClick={() => setSelectedItem(item.name)}
                    className={`${selectedItem === item.name && 'active'}  block  py-2 px-3 rounded-xl`}
                  >
                    {' '}
                    {item.btn}
                  </NavButton>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center h-full">
            {items.map((item) => {
              if (item.name === selectedItem) {
                return item.render
              }
            })}
          </div>
        </div>
      </div>
      <AppModal isModalOpen={open} handleCancel={() => setIsOpen((prev) => !prev)}>
        <div>
          <h3 className="text-white text-center text-2xl font-medium">Confirm </h3>
          <h3 className="text-white text-center text-lg">
            {selectedBiller?.service_type} subscription{' '}
          </h3>
          <p
            className={`${selectedBiller?.biller === 'MTN' ? 'text-alt' : selectedBiller?.biller === 'GLO' ? 'text-green-500' : 'text-white'}  font-semibold text-center text-lg my-6`}
          >
            {selectedBiller?.biller}
          </p>
          <p className="text-2xl font-medium text-white text-center my-2">
            {selectedBiller?.meter_number}
          </p>
          <p className="text-3xl text-white text-center my-4">
            {nairaFormat(selectedBiller?.amount ?? 0)}
          </p>
          <div className="flex justify-center gap-10">
            <ClassicBtn onclick={() => handleRepurchase(selectedBiller.id)}>Confirm</ClassicBtn>
            <ClassicBtn onclick={() => setIsOpen(false)} type="cancel">
              Cancel
            </ClassicBtn>
          </div>
        </div>
      </AppModal>

      <AppModal isModalOpen={openAccount} handleCancel={() => setIsOpenAccount((prev) => !prev)}>
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-200">Account Details</h2>
          <div className="space-y-3 text-gray-200">
            <div className="flex gap-4">
              <span className="font-semibold">Account Name:</span>
              <span>{accountDetails?.bank_name} </span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold">Name:</span>
              <span>{accountDetails?.account_name}</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold">Account Number:</span>
              <span>{accountDetails?.account_number}</span>
            </div>

            <div className="flex gap-4">
              <span className="font-semibold">Status:</span>
              <span
                className={` ${accountDetails?.active ? 'text-green-600' : 'text-red-600'} font-medium`}
              >
                {user.active ? 'Active' : 'In-Active'}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-10">
            <ClassicBtn onclick={() => setIsOpenAccount(false)} type="cancel">
              Close
            </ClassicBtn>
          </div>
        </div>
      </AppModal>

      <AppModal
        title={'Generate Account'}
        isModalOpen={isAncorModal}
        handleCancel={() => setIsAncorModal((prev) => !prev)}
      >
        <AccountCreationWizard
          setFormData={setFormData}
          formData={formData}
          current={current}
          setCurrent={setCurrent}
          setIsOpenAccount={setIsOpenAccount}
          openAccount={openAccount}
          setIsAncorModal={setIsAncorModal}
        />
      </AppModal>

      <AppModal
        title={'Create Account Number'}
        handleCancel={() => setIsOpenMonify(false)}
        isModalOpen={openMonify}
      >
        <Form
          layout="vertical"
          initialValues={{
            bvn: '',
            currency: 'ngn',
            vendor: 'moniepoint',
            account_name: '',
          }}
          onFinish={(values) => {
            handleSubmit({ ...values, currency: 'ngn', vendor: 'moniepoint' })
          }}
        >
          <FormInput required={true} className="add-fund" name="bvn" type="text" label={`BVN`} />

          <Form.Item label={null}>
            <Button
              className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl"
              type="primary"
              htmlType="submit"
            >
              Generate Account
            </Button>
          </Form.Item>
        </Form>
      </AppModal>
    </>
  )
}

export default HomeDashboard

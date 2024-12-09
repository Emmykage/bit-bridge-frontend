
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
import PhoneTopUp from './pages/PhoneTopUp'
import Home from './pages/HomePage'
import ViewMobileTopUp from './pages/PhoneTopUp/ViewMobileTopUp'
import GiftCardPAge from './pages/GiftCardPage'
import UtilityServices from './pages/UtilityServicesPage'
import ViewGiftCard from './pages/GiftCardPage/ViewGiftCard'
import CryptoExchangePage from './pages/cryptoExchangePage'
import HomeDashboard from './pages/dashboard'
import DashboardLayout from './layouts/Dashboard'
import Account from './pages/dashboard/account'
import GiftCards from './pages/dashboard/gift-card'
import Transactions from './pages/dashboard/transactions'
import CryptoSell from './pages/dashboard/cryptosell'
import Orders from './pages/dashboard/transactions/Orders'
import Trades from './pages/dashboard/transactions/Trades'
import Withdrawals from './pages/dashboard/transactions/Withdrawals'

function App() {

  

  return (
    <div className='bg-gray-200/10'>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/phone-top-up' element={<PhoneTopUp/>} />
    <Route path='/phone-top-up/:provider' element={<ViewMobileTopUp/>} />
    <Route path='/utility-services' element={<UtilityServices/>} />
    <Route path='/utility-services/:provider' element={<UtilityServices/>} />
    <Route path='/gift-cards' element={<GiftCardPAge/>} />
    <Route path='/crypto-exchange' element={<CryptoExchangePage/>} />
    <Route path='/gift-cards/:provider' element={<ViewGiftCard/>} />
    <Route path='/crypto-exchange/:provider' element={<ViewGiftCard/>} />
      
    <Route path='/dashboard' element={<DashboardLayout/>} >
      <Route path='home' element={<HomeDashboard/>} />
      <Route path='wallet' element={<Account/>} />
      <Route path='gift-cards' element={<GiftCards/>} />
      <Route path='transactions' element={<Transactions/>}>
        <Route path='orders' element={<Orders/>} />
        <Route path='trades' element={<Trades/>} />
        <Route path='withdrawals' element={<Withdrawals/>} />

      </Route>
      <Route path='crypto-sell' element={<CryptoSell/>} />


    </Route>

      
    </Routes>
    

    </div>
  )
}

export default App

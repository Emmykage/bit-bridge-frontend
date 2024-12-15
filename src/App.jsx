
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
import Orders from './pages/dashboard/transactions/Orders'
import Trades from './pages/dashboard/transactions/Trades'
import Withdrawals from './pages/dashboard/transactions/Withdrawals'
import Bitcoin from './pages/dashboard/crypto-exchange/Bitcoin'
import Dogecoin from './pages/dashboard/crypto-exchange/Dogecoin'
import CryptoSell from './pages/dashboard/crypto-exchange'
import MainLayout from './layouts'
import UtilityView from './pages/UtilityServicesPage/UtilityView'
import LoginPage from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'

function App() {

  

  return (
    <div className='bg-gray-200/10'>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/phone-top-up' element={<MainLayout><PhoneTopUp/></MainLayout> } />
    <Route path='/phone-top-up/:provider' element={<MainLayout><ViewMobileTopUp/></MainLayout>} />
    <Route path='/utility-services' element={<MainLayout><UtilityServices/></MainLayout>} />
    <Route path='/utility-services/:provider' element={<MainLayout><UtilityView/></MainLayout>} />
    <Route path='/gift-cards' element={<MainLayout><GiftCardPAge/></MainLayout>} />
    <Route path='/crypto-exchange' element={<MainLayout><CryptoExchangePage/></MainLayout>} />
    <Route path='/gift-cards/:provider' element={<MainLayout><ViewGiftCard/></MainLayout>} />
    <Route path='/crypto-exchange/:provider' element={<MainLayout><ViewGiftCard/></MainLayout>} />
      
    <Route path='/dashboard' element={<DashboardLayout/>} >
      <Route path='home' element={<HomeDashboard/>} />
      <Route path='wallet' element={<Account/>} />
      <Route path='gift-cards' element={<GiftCards/>} />
      <Route path='transactions' element={<Transactions/>}>
        <Route path='orders' element={<Orders/>} />
        <Route path='trades' element={<Trades/>} />
        <Route path='withdrawals' element={<Withdrawals/>} />

      </Route>
      <Route path='crypto-sell' element={<CryptoSell/>}>
      <Route path='bitcoin' element={<Bitcoin/>} />
      <Route path='dogecoin' element={<Dogecoin/>} />
      </Route>


    </Route>

    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
      
    </Routes>
    

    </div>
  )
}

export default App

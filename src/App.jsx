
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
import PhoneTopUp from './pages/PhoneTopUp'
import Home from './pages/HomePage'
import ViewMobileTopUp from './pages/PhoneTopUp/ViewMobileTopUp'
import GiftCardPAge from './pages/GiftCardPage'
import UtilityServices from './pages/UtilityServicesPage'
import ViewGiftCard from './pages/GiftCardPage/ViewGiftCard'
import Footer from './compnents/footer/Footer'

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
    <Route path='/gift-cards/:provider' element={<ViewGiftCard/>} />
      
    </Routes>
    
    <Footer/>

    </div>
  )
}

export default App

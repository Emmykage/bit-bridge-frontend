
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
import PhoneTopUp from './pages/PhoneTopUp'
import Home from './pages/HomePage'
import ViewMobileTopUp from './pages/PhoneTopUp/ViewMobileTopUp'

function App() {

  

  return (
    <div className='bg-gray-200/10'>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/phone-top-up' element={<PhoneTopUp/>} />
    <Route path='/phone-top-up/:provider' element={<ViewMobileTopUp/>} />
      
    </Routes>
    

    </div>
  )
}

export default App

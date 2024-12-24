import { CiBitcoin } from 'react-icons/ci'
import { TbCurrencyDogecoin } from 'react-icons/tb'
import { NavLink, Outlet } from 'react-router-dom'




const CryptoSell = () => {
  const active = "w-full flex items-center gap-3 px-4 text-alt border-b border-alt py-5 text-xl"
  const normal = "w-full flex items-center  gap-3 px-4 text-gray-500 border-b border-gray-500 py-5 text-xl"

  // const linkNav = [
  //   {id: 1,
  //     link: "/dashboard/crypto-sell/bitcoin" ,
  //       label: "Bitcoin"
  //   },
    
  //   {id: 2,
  //     link: "/dashboard/crypto-sell/dogecoin",
  //       label: "Dogecoin"
  //   }]
  return (
    <div className='flex '>
      <aside className='max-w-xs w-full bg-red- px-2 bg- rounded-xl border border-gray-700'>
          <ul className='bg-red-'>

          <NavLink to={"/dashboard/crypto-sell/bitcoin"} className={({isActive}) => isActive ? active : normal}>
            <CiBitcoin className='bg-red-'/> 
            <span className=' items-'>Bitcoin
              </span>

          </NavLink>     
          <NavLink to={"/dashboard/crypto-sell/dogecoin"} className={({isActive}) => isActive ? active : normal}>
            <TbCurrencyDogecoin />
            Dogecoin

          </NavLink>


          </ul>
      </aside>

      <div className='flex-1 flex justify-center items-center bg-black min-h-96 py-20'>
        <div className='max-w-3xl w-full bg-gray-900 rounded-lg'>
        <Outlet/>

        </div>
      </div>
    </div>
  )
}

export default CryptoSell
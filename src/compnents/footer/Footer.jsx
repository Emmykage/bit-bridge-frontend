import { NavLink } from "react-router-dom"
import logo from "../../assets/logos/logo.png"

const Footer = () => {
  return (
    <section className="bg-gray-900 px-4 py-20 text-gray-400">
        <footer className="max-w-7xl m-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="bg-red-30 text-center">
              <h2 className="text-3xl font-semibold text-primary">
                <img src={logo}  className="object-cover max-w-60 m-auto  -mt-20"/>
              </h2>
              {/* <p className="my-2 font-medium text-gray-300">Crypto Market place</p> */}
            </div>

            <div className="bg-red-30 text-center md:text-left">
              <h4 className="text-lg text-alt font-semibold">Support</h4>
              <ul>

                <li> <NavLink to={"/about-us"}>Live Chat </NavLink> </li>
                <li> <NavLink to={"/about-us"}> Help</NavLink> </li>
                <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                <li> <NavLink to={"/about-us"}> About US</NavLink> </li>
                
              </ul>
            </div>
            <div className="bg-red-30 text-center md:text-left">
              <h4 className="text-lg text-alt font-semibold">Live on Crypto</h4>
              <ul >

                <li> <NavLink to={"/gift-cards"}>Gift Cards </NavLink> </li>
                <li> <NavLink to={"/phone-top-up"}> Phone Top Up</NavLink> </li>
                {/* <li><NavLink to={"/crypto-exchange"}>Crypto Cards</NavLink></li> */}
                
              </ul>
            </div>
   
   
          <div className="bg-red-30 text-center md:text-left">
            <h4 className="text-lg text-alt font-semibold">Resources</h4>
            <ul>
              <li><NavLink to={"#"}>Referal</NavLink></li>
              <li><NavLink to={"#"}>Vulnerability Disclosure</NavLink></li>                
            </ul>
          </div>
         

          </div>
        
        </footer>

        <div className="text-center mt-20 px-5">
      <p className="text-sm text-gray-400">© 2024 BitBridge Global – 
        {/* 18 Thricknells Close, Luton, LU3 3RP. Telephone: +447405141694 */}
      </p>

      <ul className="text-sm my-4  text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

        <li className="border-r border-gray-400 px-4"> <NavLink to="/terms-conditions" class="hover:text-alt" >Terms and Conditions </NavLink> </li>
        <li className="border-r border-gray-400 px-4"> <NavLink to="/privacy-policy" class="hover:text-alt" >Privacy Policy</NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/modern-slavery"} class="hover:text-alt"> Modern Slavery Statement </NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/site-map"} class="hover:text-alt">  Site Map </NavLink></li>
        <li className=" border-gray-400 px-4"><NavLink to={"/terms-of-service"} class="hover:text-alt"> Terms and Conditions</NavLink></li>
      </ul>
    </div>
    </section>

  )
}

export default Footer
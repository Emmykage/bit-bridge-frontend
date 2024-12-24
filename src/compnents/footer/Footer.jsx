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

          <div className="bg-red-30 text-center">
            <h4 className="text-lg font-semibold text-gray-300">Support</h4>
            <ul>

            <li>Live Chat</li>
            <li>Help</li>
            <li>Contact Us</li>
            <li>About US</li>
              
            </ul>
          </div>
          <div className="bg-red-30 text-center">
            <h4>Support</h4>
            <ul>

            <li>Live Chat</li>
            <li>Help</li>
            <li>Contact Us</li>
            <li>About US</li>
              
            </ul>
          </div>
          <div className="bg-red-30 text-center">
            <h4>Support</h4>
            <ul>

            <li>Live Chat</li>
            <li>Help</li>
            <li>Contact Us</li>
            <li>About US</li>
              
            </ul>
          </div>
         

          </div>
        
        </footer>
    </section>

  )
}

export default Footer
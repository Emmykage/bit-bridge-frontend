
import { recommendedData } from '../../../../data/recommended'

import ClassicBtn from '../../../../compnents/button/ClassicButton'
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HighlightInfo = () => {



  const items = [
    {
      id: 1,
      image: "/backgrounds/swipe-1.jpg",
      text: "Enjoy seamless browsing with fast and easy mobile data top-ups for all networks.",
      pos: "left"
    },
    {
      id: 2,
      pos: "left",

      image: "/backgrounds/swipe-2.jpg",
      text: "Never experience a blackout again! Pay your electricity bills instantly and stay powered.",

    },{
      id: 3,
      image: "/backgrounds/swipe-3.jpg",
      text: "Keep up with your favorite shows by renewing your cable subscription hassle-free!"
    },
    
  ]
  return (
    <section className="px-4 py-10 bg-white">
    <div className="grid lg:grid-cols-home-grid gap-4 max-w-app-layout m-auto">
      <div>
        <h5 className="text-lg font-bold text-gray-800 my-4 ">Check Out Offers</h5>
      <div className="h-[600px] rounded text-white">
      <Carousel 
        autoFocus={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true} onChange={() => {}} onClickItem={() => {}} onClickThumb={() => {}}
      >
        {items.map(item => (
          <div key={item.id} className='w-full h-[400px] relative'>
            <img src={item.image} className='w-full h-full object-cover'/>
            <div className='absolute top-0 left-0 bg-red-200/30 bg-gradient-to-r from-gray-900/80 to-gray-500/60 z-10 w-full h-full' >
                <div className={`h-full w-1/2 ml-aut flex flex-col justify-center items-center`}>
                  <h2 className='text-3xl'>
                    {item.text}
                  </h2>

                    <ClassicBtn className={"text-lg h-14 text-alt font-semibold"}> Get Started</ClassicBtn>
                  
                
                </div>
            </div>
            {/* <p className="legend">Legend 1</p> */}
        </div>
        ))}
              
              
            </Carousel>


      </div>
      </div>
    
      <div>
        <h3 className="font-medium text-lg my-4">Recommended for you</h3>

        <div className="grid grid-cols-2 gap-3 gap-y-5">
          {recommendedData.map(item => 
                  <div key={item.id} className="border border-gray-100 rounded" onClick={() => {}}>
                    <div className="h-40">

                    <img className="w-full h-full" src={item.image} alt={item.name} />
                    </div>

                    <p className="text-base my-6 font-semibold">{item.name}</p>


                  </div>
          )}


    


        </div>
      </div>
      
    </div>

    </section>
  )
}

export default HighlightInfo
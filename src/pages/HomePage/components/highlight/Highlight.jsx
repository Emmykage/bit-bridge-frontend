
import { recommendedData } from '../../../../data/recommended'
import ButtonCall from '../../../../compnents/button/ButtonCall'

const HighlightInfo = () => {
  return (
    <section className="px-4">
    <div className="grid lg:grid-cols-home-grid gap-4 max-w-app-layout m-auto">
      <div>
        <h5 className="text-lg font-semibold my-4">Check Out Offers</h5>
      <div className="min-h-[400px] bg-black rounded text-white">
        <div className="flex flex-col sm:flex-row py-16 px-4 md:px-10">

        <div className="flex-[60%]">
        <h1 className="text-4xl font-semibold">
          Access Black Friday Week Deal With BitBridge Account
        </h1>

        {/* <ButtonCall/> */}
        <ButtonCall/>
        </div>
        <div className="flex-[30%] gap-3 flex justify-center">
        <span className="h-6 w-6 bg-red-500 items-center rounded-full  flex justify-center">
          B

          </span>  <span className="h-6 w-6 bg-red-500 items-center rounded-full  flex justify-center">
          B

          </span>  <span className="h-6 w-6 bg-red-500 items-center rounded-full  flex justify-center">
          B

          </span>  <span className="h-6 w-6 bg-red-500 items-center rounded-full  flex justify-center">
          B

          </span>
        </div>

        </div>

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
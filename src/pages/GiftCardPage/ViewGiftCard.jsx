import { useParams } from "react-router-dom"
import giftCardData from '../../data/giftCardData.json'
import serviceProviderData from '../../data/serviceProviderData.json'
import Header from "../../compnents/header/Header"
import ProductCard from "../../compnents/product-card/ProductCard"
const ViewGiftCard = () => {
    const {provider} = useParams()

    const selectedProvider = giftCardData.find(item => item.provider == provider)

    console.log(selectedProvider)

  return (
    <div>
        <Header/>
        <section className="px-4">

        <div className="grid grid-cols-2 gap-10 max-w-6xl m-auto py-10">
            <div className="p-10 bg-gray-200 flex justify-center items-center">
                <img src={selectedProvider?.image} alt="provider image"/>
            </div>
            <div>

                <div>
                    <p>Data &gt; {provider}</p>
                </div>
                <h3 className="text-2xl font-medium">NTEL Refil</h3>
                <p>Use Bitcoin, ETH or Crypto on NTEL. Pay with Bitcoin, Lightning, Ethereum, Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No account required. Start living on crypto!</p>
                <div>
                    <h3>Enter Amount </h3>
                    <div className="flex gap-3">
                        <select name="" id="" className="flex-1 py-3 px-2">
                            <option value="10"> 10NGN</option>
                        </select>


                        <div className="flex-1">
                            Estimate
                        </div>



                    </div>
                    <div className="my-4">
                        <label htmlFor="phone_no my-2">Number to Top-Up</label>
                        <input className="p-4 block border w-full rounded" placeholder="0801230456 7890"/>
                    </div>

                </div>
                <div className="bg-gray-600 rounded-lg text-white p-4">
                    <p className="text-sm font-medium">We are currently out of stock on this product</p>
                </div>
            </div>
        </div>
        </section>

        <section className="px-4 bg-gray-200 py-10">

            <div className="max-w-7xl m-auto bg-red-40">
            <h2 className="text-2xl my-4">More Products on BitBridge</h2>
            <div className="grid sm:grid-cols-4 gap-3">
                {serviceProviderData.map(({id, provider, provision }) => (
                    <ProductCard key={id} id={id} provider={provider} provision={provision} />
                ))}

            </div>
            </div>

        </section>
    </div>
  )
}

export default ViewGiftCard
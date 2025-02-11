
import { useNavigate } from "react-router-dom"
import cashback from "../../../../assets/images/deals/gift-card.png"
import ClickButton from "../../../../compnents/button/Button"

const ExclusiveDeals = () => {
    const navigate = useNavigate()
    const items = [{
        id: 1,
        promo: "10% on Gift Card Purchase",
        offer: "Experience effortless global connectivity in over 180 countries with BitBridge Global eSIMs at an unbeatable price",
        img: cashback,
        link: "/gift-cards"
    },
    {
        id: 1,
        promo: "50% Cashback on eSims",
        offer: "Experience effortless global connectivity in over 180 countries with BitBridge Global eSIMs at an unbeatable price",
        img: cashback,
        link: "/gift-cards"

    },
    {
        id: 1,
        promo: "50% Cashback on eSims",
        offer: "Experience effortless global connectivity in over 180 countries with BitBridge Global eSIMs at an unbeatable price",
        img: cashback,
        link: "/gift-cards"

    }]
  return (
    <section className="bg-black my-20 px-4 text-white py-20">

          <div className="m-auto max-w-app-layout ">
            <h2 className="text-3xl lg:text-5xl my-5">
            Exclusive Black Friday Weekly Deals

            </h2>

            <div className="grid md:grid-cols-3 gap-4">

                {items.map(item => (
                <div key={item.id}>
                    <div className="h-72 rounded overflow-hidden">
                        <img src={item.img} alt={item.promo} className="h-full w-full object-cover md:object-fill" />

                    </div>
                    <div className="py-10">
                        <p className="text-2xl my-3 font-semibold">{item.promo}</p>
                        <p>{item.offer}</p>
                    </div>

                    <ClickButton onClick={() => navigate(item.link)}>Grab the Deal </ClickButton>

                </div>
             ))}
              

            </div>

          </div>

        </section>
  )
}

export default ExclusiveDeals
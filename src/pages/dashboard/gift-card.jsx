
import giftCards from "../../data/cardSales.json"
import GiftCard from '../../compnents/card/GiftCard'
const GiftCards = () => {
  return (
    <section className="bg-black px-4 pt-2 py-10 rounded">

    <div>
        <h4  className="text-lg my-5 text-alt font-semibold">Categories</h4>

        <div  className="grid grid-cols-4 gap-5">
            {giftCards.map(({image, name, id}) => (
                <GiftCard key={id} title={name} image={image}/>
            ))}

        </div>
    </div>
    </section>

  )
}

export default GiftCards
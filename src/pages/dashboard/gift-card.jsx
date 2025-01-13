
import GiftCard from '../../compnents/card/GiftCard'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/actions/product"
import AppModal from "../../compnents/modal/Modal"
import SellFund from "../../compnents/sellCard/SellCard"
import { createOrder } from "../../redux/actions/order"
import { toast } from "react-toastify"
const GiftCards = () => {
  const [selectedItem, setSelectedItem] = useState({ provider: "", product_id: ""})
  const {giftcards} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  console.log(giftcards)

  const handleSubmit = (values) => {
    console.log(values)
    dispatch(createOrder(values)).then(result => {
      if(createOrder.fulfilled.match(result)){
        setOpen(false)
        console.log(result.payload.message)

        toast(result.payload.message, {type: "success"})
      }else{
        toast(result.payload.message, {type: "error"})

      }
    })

  }
  useEffect(()=> {
    dispatch(getProducts())
  },[])
  return (
    <>    
    <section className="bg-black px-4 pt-2 py-10 rounded">

    <div>
        <h4  className="text-lg my-5 text-alt font-semibold">Categories</h4>

        <div  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {giftcards.map(({image, provider, name, id, provisions}) => (
                <GiftCard onClick={() => {
                  setSelectedItem({
                    ...selectedItem,
                    product_id: id,
                    provider: provider,
                    provisions
                  })
                  setOpen(prev => !prev)}
                }
                key={id} provider={provider} title={name} image={image}/>
            ))}

        </div>
    </div>
    </section>

    <AppModal title={`Sell ${selectedItem.provider} GiftCard `} handleCancel={()=> setOpen(false)} isModalOpen={open}>
      <div>
        <SellFund handleSubmit={handleSubmit} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>

      </div>

    </AppModal>
    </>

  )
}

export default GiftCards
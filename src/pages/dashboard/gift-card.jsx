
import GiftCard from '../../compnents/card/GiftCard'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppModal from "../../compnents/modal/Modal"
import SellFund from "../../compnents/sellCard/SellCard"
import { createOrder } from "../../redux/actions/order"
import { toast } from "react-toastify"
import { getProvisions } from '../../redux/actions/provision'
const GiftCards = () => {
  const [selectedItem, setSelectedItem] = useState({ provider: "", product_id: "", provision: "", provision_id: ""})
  const {giftcards} = useSelector(state => state.provision)
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
    dispatch(getProvisions())
  },[])
  return (
    <>    
    <section className="bg-black px-4 pt-2 py-10 rounded">

    <div>
        <h4  className="text-lg my-5 text-alt font-semibold">Categories</h4>

        <div  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {giftcards.map(({image, product, name, id, currency}) => (
                <GiftCard onClick={() => {
                  setSelectedItem({
                    ...selectedItem,
                    product_id: product.id,
                    provider: product.provider,
                    provision_id: id,
                    provision: name,
                    currency
                  })
                  setOpen(prev => !prev)}
                }
                key={id} provider={product.provider} title={name} image={image}/>
            ))}

        </div>
    </div>
    </section>

    <AppModal title={`Sell ${selectedItem.provider}-${selectedItem.provision} GiftCard `} handleCancel={()=> setOpen(false)} isModalOpen={open}>
      <div>
        <SellFund handleSubmit={handleSubmit} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>

      </div>

    </AppModal>
    </>

  )
}

export default GiftCards
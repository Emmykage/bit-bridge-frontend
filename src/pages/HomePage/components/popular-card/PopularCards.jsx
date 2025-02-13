import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../../redux/actions/product'
import { splitString } from '../../../../utils'
import SimpleCard from '../../../../compnents/product-card/SimpleCard'

const PopularCards = () => {
    const dispatch = useDispatch()
    const {giftcards} = useSelector(state => state.product)

    useEffect(()=> {
        dispatch(getProducts())
    }, [])

  return (
    <section className='py-10 px-4'>

    <div className='max-w-7xl m-auto'>
            <p className='font-semibold text-blue-600'>WHATS TRENDING</p>

            <h2 className="md:text-4xl text-3xl font-semibold ">Popular Gift Cards</h2>
            <p className="font-normal text-xl">
              BitBridge Global has a catalogue of gift cards, But below are the  popular ones
            </p>

            <div className='grid my-10 grid-cols-4 md:grid-cols-5 gap-3 md:gap-8 '>
              {giftcards?.map(item => (
                <SimpleCard key={item.id} provider={item.provider} />
              ))}
            </div>




          </div>
          </section>

  )
}

export default PopularCards
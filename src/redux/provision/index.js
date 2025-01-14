import { createSlice } from "@reduxjs/toolkit"
import { createProvision, getProvisions } from "../actions/provision"

const initialState = {
    provision: {},
    provisions: [],
    giftcards: [],
    mobileProviders: [],
   
    loading: false
}

const provisionSlice = createSlice({
    initialState,
    name: "provision",

    extraReducers: (builder) =>  {
        builder
        .addCase(createProvision.fulfilled, (state, action) => {
            return{
                ...state,
                provision: action.payload.data,
                loading: false
            }
        })
        .addCase(createProvision.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(createProvision.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        
                .addCase(getProvisions.fulfilled, (state, action) => {
                    const products  = action.payload.data
                    
                    const filteredGiftCards = products.filter(item => item.product.category === "gift card")
                    const filteredMobileProvider = products.filter(item => item.product.category === "mobile provider")
                    const filteredServices = products.filter(item => item.product.category === "service")
                    console.log(filteredMobileProvider, products)
                    return{
                        ...state,
                        products: action.payload.data,
                        giftcards: filteredGiftCards,
                        services: filteredServices,
                        mobileProviders: filteredMobileProvider,
                        loading: false
                    }
                })
                .addCase(getProvisions.rejected, (state, action) => {
                    return{
                        ...state,
                        message: action.payload.message,
                        loading: false
                    }
                })
                .addCase(getProvisions.pending, (state) => {
                    return{
                        ...state,
                        loading: true,
                    }
                })
       
       
    }

})


export default provisionSlice.reducer 
// export const {resetUser} = AuthSlice.actions
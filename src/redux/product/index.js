import { createSlice } from "@reduxjs/toolkit"
import { createProduct, getProducts } from "../actions/product"

const initialState = {
    product: {},
    products: [],
    message: null,
    loading: false
}

const productSlice = createSlice({
    initialState,
    name: "product",

    extraReducers: (builder) =>  {
        builder
        .addCase(createProduct.fulfilled, (state, action) => {
            return{
                ...state,
                product: action.payload.data,
                loading: false
            }
        })
        .addCase(createProduct.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(createProduct.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            return{
                ...state,
                products: action.payload.data,
                loading: false
            }
        })
        .addCase(getProducts.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getProducts.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
       
    }

})


export default productSlice.reducer 
// export const {resetUser} = AuthSlice.actions
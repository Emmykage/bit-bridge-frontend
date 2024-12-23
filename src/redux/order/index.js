import { createSlice } from "@reduxjs/toolkit"
import { createOrder, getOrder, getOrders, getUserOrders } from "../actions/order"

const initialState = {
    order: {},
    orders: [],
    message: null,
    loading: false
}

const walletSlice = createSlice({
    initialState,
    name: "order",

    extraReducers: (builder) =>  {
        builder
        .addCase(createOrder.fulfilled, (state, action) => {
            return{
                ...state,
                order: action.payload.data,
                loading: false
            }
        })
        .addCase(createOrder.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(createOrder.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            return{
                ...state,
                order: action.payload.data,
                loading: false
            }
        })
        .addCase(getOrder.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getOrder.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })

        .addCase(getUserOrders.fulfilled, (state, action) => {
            return{
                ...state,
                orders: action.payload.data,
                loading: false
            }
        })
        .addCase(getUserOrders.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getUserOrders.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            return{
                ...state,
                orders: action.payload.data,
                loading: false
            }
        })
        .addCase(getOrders.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getOrders.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
       
    }

})


export default walletSlice.reducer 
// export const {resetUser} = AuthSlice.actions
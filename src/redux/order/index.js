import { createSlice } from "@reduxjs/toolkit"
import { createOrder, getOrder, getOrders, getUserBillOrders, getUserOrders } from "../actions/order"

const initialState = {
    order: {},
    billOrders: [],
    orders: [],
    message: null,
    loading: false
}

const orderSlice = createSlice({
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

        .addCase(getUserBillOrders.fulfilled, (state, action) => {
            return{
                ...state,
                billOrders: action.payload.data,
                loading: false
            }
        })
        .addCase(getUserBillOrders.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getUserBillOrders.pending, (state) => {
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


export default orderSlice.reducer 
// export const {resetUser} = AuthSlice.actions
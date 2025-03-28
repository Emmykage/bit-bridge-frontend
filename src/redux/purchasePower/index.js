import { createSlice } from "@reduxjs/toolkit"
import { createPurchaseOrder, getPurchaseOrder, queryTransaction } from "../actions/purchasePower"

const initialState = {
   purchaseOrder: {},
   purchaseOrders: [],
   receiptDetails: {},
    message: null,
    loading: false
}

const purchaseSlice = createSlice({
    initialState,
    name: "purchase_order",

    extraReducers: (builder) =>  {
        builder
        .addCase(createPurchaseOrder.fulfilled, (state, action) => {
            return{
                ...state,
                purchaseOrder: action.payload.data,
                message: action.payload.message, 
                loading: false
            }
        })
        .addCase(createPurchaseOrder.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        }) 
       
        .addCase(getPurchaseOrder.fulfilled, (state, action) => {

            return{
                ...state,
                loading: true,
                purchaseOrder: action.payload.data
            }
        })
        .addCase(getPurchaseOrder.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getPurchaseOrder.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
       
        .addCase(queryTransaction.fulfilled, (state, action) => {
            return{
                ...state,
                purchaseOrder: action.payload.data,
                message: action.payload.message, 
                loading: false
            }
        })
        .addCase(queryTransaction.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message, 
                loading: false
            }
        })
        .addCase(queryTransaction.pending, (state) => {
            return{
                ...state,
        
                loading: true
            }
        })

        
       
       
    }

})


export default purchaseSlice.reducer 
// export const {resetUser} = AuthSlice.actions
import { createSlice } from "@reduxjs/toolkit"
import { createTransaction, getTransactions } from "../actions/transaction"

const initialState = {
    user: {},
    logged: false,
    loading: false
}

const AuthSlice = createSlice({
    initialState,
    name: "transaction",

    extraReducers: (builder) =>  {
        builder
        .addCase(createTransaction.fulfilled, (state, action) => {

            return{
                ...state,
                transaction: action.payload.data,
                loading: false
            }
        })
        .addCase(createTransaction.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(createTransaction.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        }) 
        .addCase(getTransactions.fulfilled, (state, action) => {

            const rawData = action.payload.data
            // const deposit = rawData.filter(trans => trans.transaction_type == "deposit")
            return{
                ...state,
                deposit: action.payload.data,
                withdrawal: action.payload.data,
                loading: false
            }
        })
        .addCase(getTransactions.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
        .addCase(getTransactions.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        
    }

})


export default AuthSlice.reducer 
export const {resetUser} = AuthSlice.actions
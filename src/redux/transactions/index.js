import { createSlice } from "@reduxjs/toolkit"
import { createTransaction, getTransactions, getUserTransactions } from "../actions/transaction"

const initialState = {
    transactions: [],
    logged: false,
    loading: false,
    deposits: []
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
            console.log(rawData)
            // const deposit = rawData.filter(trans => trans.transaction_type == "deposit")
            return{
                ...state,
                deposits: action.payload.data,
                withdrawal: action.payload.data,
                transactions: action.payload.data,
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
        .addCase(getUserTransactions.fulfilled, (state, action) => {

            // const rawData = action.payload.data

            return{
                ...state,
                deposits: action.payload.data,
                withdrawal: action.payload.data,
                transactions: action.payload.data,
                loading: false
            }
        })
        .addCase(getUserTransactions.pending, (state) => {

            // const rawData = action.payload.data

            return{
                ...state,
             
                loading: true
            }
        })
        .addCase(getUserTransactions.rejected, (state) => {

            // const rawData = action.payload.data

            return{
                ...state,

                loading: false
            }
        })

        
        
    }

})


export default AuthSlice.reducer 
export const {resetUser} = AuthSlice.actions
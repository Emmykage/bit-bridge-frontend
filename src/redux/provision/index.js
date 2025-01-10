import { createSlice } from "@reduxjs/toolkit"
import { createProvision } from "../actions/provision"

const initialState = {
    provision: {},
    provisions: [],
   
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
                product: action.payload.data,
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
       
       
    }

})


export default provisionSlice.reducer 
// export const {resetUser} = AuthSlice.actions
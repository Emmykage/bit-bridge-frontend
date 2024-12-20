import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    logged: false,
    loading: false
}

const AppSlice = createSlice({
    initialState,
    name: "auth",
  
    reducers:   {
        SET_LOADING: (state, action) => {

            console.log("action payload", action.payload)
            return{
            ...state,
            isLoading: action.payload

        }}
    }

})


export default AppSlice.reducer 
export const {SET_LOADING} = AppSlice.actions
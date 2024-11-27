import { createSlice } from "@reduxjs/toolkit"
import { userSignUp } from "../actions/auth"

const initialState = {
    user: {},
    logged: false
}

const AuthSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        resetUser: () =>  {
            return{
                user: {}

            }
        }
    }
    ,
    extraReducers: (builder) =>  {
        builder
        .addCase(userSignUp.fulfilled, (state, action) => {
            return{
                ...state,
                user: action.payload.data
            }
        })
        .addCase(userSignUp.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message
            }
        })
        .addCase(userSignUp.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
    }

})


export default AuthSlice.reducer 
export const {resetUser} = AuthSlice.actions
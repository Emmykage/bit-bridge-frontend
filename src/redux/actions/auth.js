import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { baseUrl } from "../baseUrl"

const userSignUp = createAsyncThunk("sign-up/user-signUp", async(data, {rejectWithValue}) => {
    try {
        const response = axios.post(`${baseUrl}`)
        const result = await response.json()
        if(response.ok){
            return rejectWithValue({message: result.message})
        }

        return result
    } catch (error) {

        console.error(error)

        return rejectWithValue({message: "something went wrong"})

    }
})


export {userSignUp}
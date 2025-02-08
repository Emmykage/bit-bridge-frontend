import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";


export const getConversion = createAsyncThunk("conversion/get-converted-rate", async({to_curr, from_curr, amount}) => {
   console.log(to_curr)
   try {
    const response = await axios.get(`${baseUrl + apiRoute}currencies/get_currency?to_curr=${to_curr}&from_curr=${from_curr}&amount=${amount}`)
    const result =  response.data 
    console.log(result)
    return result

   } catch (error) {
    console.log(error.message)
   }
})


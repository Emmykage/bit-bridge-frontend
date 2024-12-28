import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";

export const createProduct = createAsyncThunk("product/creaet-product", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl + apiRoute}products`,data, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`}
        });

        const result = response.data; 
        return result;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});

export const getProducts = createAsyncThunk("product/get-products", async(_, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}products`, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
        });

        const result = response.data;
        return result;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});

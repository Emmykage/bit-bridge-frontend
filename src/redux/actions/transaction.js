import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";

export const createTransaction = createAsyncThunk("transaction/user-deposit", async(data, {rejectWithValue}) => {
    console.log(data)
    try {
        console.log(fetchToken())

        const response = await axios.post(`${baseUrl + apiRoute}transactions`, data, {
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

export const updateTransaction = createAsyncThunk("transaction/update-transaction", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}transactions`, data, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("bitglobal"))
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

export const getTransactions = createAsyncThunk("transaction/update-transaction", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}transactions`, data, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("bitglobal"))
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


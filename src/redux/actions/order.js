import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";

export const createOrder = createAsyncThunk("order/creaet-order", async(data, {rejectWithValue}) => {
    const formData = new FormData()

    formData.append("order_detail[order_type]", data.order_type)
    // formData.append("order_detail[card]", data.card)
    formData.append("order_detail[total_amount]", data.total_amount)
    formData.append("order_detail[extra_info]", data.extra_info)

    if(data.proof && data.proof[0]?.originFileObj){
        formData.append("order_detail[proof]", data.proof[0].originFileObj)
    }
    try {
        const response = await axios.post(`${baseUrl + apiRoute}order_details`,formData, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`}
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

export const getOrder = createAsyncThunk("order/get-order", async(id, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}orders/${id}`, {
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
export const getOrders = createAsyncThunk("order/get-orders", async(_, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}orders`, {
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

export const getUserOrders = createAsyncThunk("order/get-user-orders", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}order_details/user`, {
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



// OrderDetailSerializer
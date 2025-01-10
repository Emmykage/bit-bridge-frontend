import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";

export const createProvision = createAsyncThunk("product/creaet-provision", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl + apiRoute}provisions`,data, {
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

// export const updateProduct = createAsyncThunk("product/update-product", async({id, data}, {rejectWithValue}) => {
//     try {
//         const response = await axios.patch(`${baseUrl + apiRoute}products${id}`,data, {
//             headers: {
//                 "Authorization": `Bearer ${fetchToken()}`}
//         });

//         const result = response.data; 
//         return result;
//     } catch (error) {
//         if (error.response) {
//             return rejectWithValue({ message: error.response.data.message });
//         }
//         console.error(error);
//         return rejectWithValue({ message: "Something went wrong" });
//     }
// });

// export const getProducts = createAsyncThunk("product/get-products", async(_, {rejectWithValue}) => {
//     try {
//         const response = await axios.get(`${baseUrl + apiRoute}products`, {
//             headers: {
//                 "Authorization": `Bearer ${fetchToken()}`
//             }
//         });

//         const result = response.data;
//         return result;
//     } catch (error) {
//         if (error.response) {
//             return rejectWithValue({ message: error.response.data.message });
//         }
//         console.error(error);
//         return rejectWithValue({ message: "Something went wrong" });
//     }
// });

// export const getProduct = createAsyncThunk("product/get-product", async(id, {rejectWithValue}) => {
//     try {
//         const response = await axios.get(`${baseUrl + apiRoute}products/${id}`, {
//             headers: {
//                 "Authorization": `Bearer ${fetchToken()}`
//             }
//         });

//         const result = response.data;
//         return result;
//     } catch (error) {
//         if (error.response) {
//             return rejectWithValue({ message: error.response.data.message || "Failed to get Product" });
//         }
//         console.error(error);
//         return rejectWithValue({ message: "Something went wrong" });
//     }
// });


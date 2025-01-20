import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";
import { toast } from "react-toastify";

export const createPurchaseOrder = createAsyncThunk("purchase/purchase-power", async(data, {rejectWithValue}) => {
   
    try {
        const response = await axios.post(`${baseUrl + apiRoute}payment_processors/process_payment`,data, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`}
        });

        const result = response.data; 
        console.log(result)
        toast(result?.message  || "order has been initialized", {type: "success"})

        return result;
    } catch (error) {
        if (error.response) {
            toast(error.response.message, {type: "error"})
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});

export const getPurchaseOrder = createAsyncThunk("purchaseOrder/get-order", async(id, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}payment_processors/${id}`, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
        });

        const result = response.data;    
        console.log(result)  
        return result;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});
export const confirmPurchase = createAsyncThunk("purchase-order/approve-orders", async({queryId, data}, {rejectWithValue}) => {
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}payment_processors/${queryId}/approve_payment`,data, {
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

// export const getUserOrders = createAsyncThunk("order/get-user-orders", async(data, {rejectWithValue}) => {
//     try {
//         const response = await axios.get(`${baseUrl + apiRoute}order_details/user`, {
//             headers: {
//                 "Authorization": `Bearer ${fetchToken()}`
//             }
//         });

//         const result = response.data;     
//         console.log(result) 

//         return result;
//     } catch (error) {
//         if (error.response) {
//             return rejectWithValue({ message: error.response.data.message });
//         }
//         console.error(error);
//         return rejectWithValue({ message: "Something went wrong" });
//     }
// });



// export const updateOrder = createAsyncThunk("order/update-order", async({id, data}, {rejectWithValue}) => {
//     try {
//         const response = await axios.patch(`${baseUrl + apiRoute}order_details/${id}`, data, {
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




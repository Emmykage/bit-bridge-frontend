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

export const confirmDataPurchase = createAsyncThunk("data/buy-data-orders", async({queryId}, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}payment_processors/${queryId}/approve_data`, {
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

export const confirmPayment = createAsyncThunk("data/buy-data-orders", async({queryId}, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${baseUrl + apiRoute}payment_processors/${queryId}/confirm_payment`, {
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

export const getPriceList = createAsyncThunk("payment/get-price-list", async({provider, service_type}, {rejectWithValue}) => {

    console.log(provider, service_type)
    try {
        const response = await axios.get(`${baseUrl + apiRoute}payment_processors/get_price_list?provider=${provider}&service_type=${service_type}`, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
        });

        const result = response.data;     

        const priceListOptions = result.data.map(item => {
            return {
                value: item.code,
                label: `${item?.desc} | ${item?.price} | ${item?.validity ?? ""}`,
                amount: item?.price
            }
        })
        console.log(priceListOptions) 

        return priceListOptions;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});



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




import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoute, baseUrl } from "../baseUrl";
import axios from "axios";
import { fetchToken } from "../../hooks/localStorage";
import { toast } from "react-toastify";

export const createOrder = createAsyncThunk("order/creaet-order", async(data, {rejectWithValue}) => {
    const formData = new FormData()

    data?.order_type && formData.append("order_detail[order_type]", data.order_type)
    data?.total_amount && formData.append("order_detail[total_amount]", data?.total_amount)
    data.extra_info && formData.append("order_detail[extra_info]", data?.extra_info)
    data.order_items_attributes.forEach((item, index) => {
        formData.append(`order_detail[order_items_attributes][${index}][product_id]`, item?.product_id);
        formData.append(`order_detail[order_items_attributes][${index}][amount]`, item?.amount);
        item?.provision_id && formData.append(`order_detail[order_items_attributes][${index}][provision_id]`, item?.provision_id);
        item?.quantity && formData.append(`order_detail[order_items_attributes][${index}][quantity]`, item?.quantity);
        

      });  

    if(data.proof && data.proof[0]?.originFileObj){
        formData.append("order_detail[proof]", data.proof[0].originFileObj)
    }

    // console.log(Object.fromEntries(formData))
    try {
        const response = await axios.post(`${baseUrl + apiRoute}order_details`,formData, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`}
        });

        const result = response.data; 
        toast(result.message, {type: "success"})
        console.log("order details result:",result)
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
        const response = await axios.get(`${baseUrl + apiRoute}order_details`, {
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



// OrderDetailSerializer
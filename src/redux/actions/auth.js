import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { apiRoute, baseUrl } from "../baseUrl"
import { fetchToken } from "../../hooks/localStorage"
import { toast } from "react-toastify"

const userSignUp = createAsyncThunk("sign-up/user-signUp", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl}signup`, data)
        const result =  response.data

        const authorizationHeader = response.headers.authorization;

        let accessToken = null;

        if (authorizationHeader) {
            if (authorizationHeader.startsWith('Bearer ')) {
                accessToken = authorizationHeader.split(' ')[1];  // Split to get the token part
            } else {
                console.warn('Unexpected format for Authorization header:', authorizationHeader);
            }
        } else {
            console.warn('Authorization header not found');
        }

        localStorage.setItem("bitglobal", JSON.stringify(accessToken));
        return result
    } catch (error) {
        const message = error.response.data.status.message
        console.log(message)
        if(error.response){
            toast(message, {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})



export const userProfileUpdate = createAsyncThunk("user/user-update", async({id, data}, {rejectWithValue}) => {
    console.log(data)
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}users/${id}`, data, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`,
                "Content-Type": "application/json"
            }
        })
        const result =  response.data    

        return result
    } catch (error) {
        if(error.response){
            console.log(error.response)

            const message = error.response.data?.message 
            toast(message || "Something broke", {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})


export const userPasswordUpdate = createAsyncThunk("user/password-update", async({id, data}, {rejectWithValue}) => {
    console.log(data)
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}users/${id}`, data, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`,
                "Content-Type": "application/json"
            }
        })
        const result =  response.data    

        return result
    } catch (error) {
        const message = error.response.data?.message
        console.log(message)
        if(error.response){
            toast(message, {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})



export const userDelete = createAsyncThunk("user/account-delete", async(id, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${baseUrl + apiRoute}users/${id}`, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`,
                "Content-Type": "application/json"
            }
        })
        const result =  response.data    

        return result
    } catch (error) {
        const message = error.response.data.message
        console.log(message)
        if(error.response){
            toast(message, {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})




export const userProfile = createAsyncThunk("auth/user-profile", async(data, {rejectWithValue}) => {
    try {

        const response = await axios.get(`${baseUrl + apiRoute}users/user_profile`, {  
            headers: {
          "Authorization": `Bearer ${fetchToken()}`
      }})
        const result =  response.data

        return result
    } catch (error) {
        if(error.response){
            return rejectWithValue({message: error.response.message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})




const userLogin = createAsyncThunk("login/user-login", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl}login`, data);

        const result = response.data;

        // Access the access token from the response headers
        const authorizationHeader = response.headers.authorization;

        let accessToken = null;

        // If the authorization header is present, extract the token
        if (authorizationHeader) {
            if (authorizationHeader.startsWith('Bearer ')) {
                accessToken = authorizationHeader.split(' ')[1];  // Split to get the token part
            } else {
                console.warn('Unexpected format for Authorization header:', authorizationHeader);
            }
        } else {
            console.warn('Authorization header not found');
        }

        localStorage.setItem("bitglobal", JSON.stringify(accessToken));
        toast(result.message, {type: "success"})


        return result;
    } catch (error) {
        if (error.response) {
            toast(error.response.data, {type: "error"})
            return rejectWithValue({ message: error.response.data });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});



export const userLogout = createAsyncThunk("logout/user-logout", async(_, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${baseUrl}logout`,{
            headers: {
                "Authorization":  `Bearer ${fetchToken()}`
            }
        });

        const {data} = response.data;

        localStorage.removeItem("bitglobal");
        toast(data, {type: "success"})

        return data;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});





export const userPasswordReset = createAsyncThunk('user/password-reset', async ({email}) => {

    try {
        const response = await axios.get(`${baseUrl + apiRoute}users/password_reset?email=${email}`)
     
        return response;
    } catch (error) {
        console.log(error)
    }

  });

  
export const changePasswordReset = createAsyncThunk('user/change-password', async (data) => {

    try {
        const response = await axios.patch(`${baseUrl + apiRoute}users/update_password`, data)
     
        return response;
    } catch (error) {
        console.log(error)
    }

  });

export {userSignUp, userLogin}
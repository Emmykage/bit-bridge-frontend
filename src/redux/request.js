import axios from "axios";
import { apiRoute, baseUrl } from "./baseUrl";
import { fetchToken } from "../hooks/localStorage";

const api = axios.create({
  baseURL:  baseUrl + apiRoute,    
    headers: {
        'Content-Type': 'application/json',
    },
});

const request = async (url, options = {}) => {
  const { method = 'GET', headers = {}, data, params } = options;
    let numberOfTries = 0;

    const refectToken = async() => {
    const response = await axios.get(`${baseUrl }refresh`, {
    headers: {   
        "Bit-Refresh-Token": `Bearer ${fetchToken()}`
    } })
    const result = response.data;
    localStorage.setItem("bitglobal", JSON.stringify(result.access_token));
    localStorage.setItem("refresh-token", JSON.stringify(result.access_token));
    }



  const makeRequest = async () => {
        try {
            const response = await api.request( {
                url: url.startsWith('/') ? url : `/${url}`,
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${fetchToken()}`,
                },
                data,
                params,
                method})        
                       
                const result =  response.data

                return result
            }
            catch (error) {           
               
            if (error.response && error.response.status === 401 && numberOfTries < 3) {
            numberOfTries ++
            await refectToken();  // Attempt to refresh the token
            makeRequest()  

                            
        }   
          throw error

        
        
                     
        
            }}
        

    return makeRequest();

 




//   return fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Request failed:', error);
//       throw error;
//     });

    
}

 export default request;
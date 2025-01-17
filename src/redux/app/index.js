import { createSlice } from "@reduxjs/toolkit"
import { addToCartItems, calculateTotal, deleteCartItem, getCartItems } from "../../utils/localStorage"

const initialState = {
    isLoading: false,
    cartItems: [],
    logged: false,
    loading: false,
    totalAmount: 0
}

const AppSlice = createSlice({
    initialState,
    name: "auth",
  
    reducers:   {
        SET_LOADING: (state, action) => {

            return{
            ...state,
            isLoading: action.payload

        }},
    
        ADD_TO_CART: (state, action)=> {

            const item  = action.payload
             addToCartItems(item)
            return {
                ...state,
                cartItems: getCartItems()
            }
        },
        UPDATE_CART: (state, action)=> {
            const item  = action.payload
             addToCartItems(item)
            return {
                ...state,
                cartItems: getCartItems()
            }
        },
        DELETE_CART: (state, action)=> {
            const item  = action.payload
            deleteCartItem(item)
            return {
                ...state,
                cartItems: getCartItems()
            }
        },
        GET_CART: (state)=> {
            const cart_items = getCartItems()
     

            return{
                ...state,
                cartItems: cart_items,
                totalAmount: calculateTotal()
            }
    
        },

    
    }

})


export default AppSlice.reducer 
export const {SET_LOADING, GET_CART, ADD_TO_CART, DELETE_CART, UPDATE_CART} = AppSlice.actions
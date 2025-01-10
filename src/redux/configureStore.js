import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AuthReducer, OrderReducer, ProductReducer, ProvisionReducer, TransactionReducer, WalletReducer } from ".";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
    transaction: TransactionReducer,
    wallet: WalletReducer,
    order:  OrderReducer,
    product: ProductReducer,
    provision: ProvisionReducer
})


const store = configureStore(
    { reducer: rootReducer},
    applyMiddleware(thunk, logger)
)

export default store
import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AuthReducer, TransactionReducer, WalletReducer } from ".";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
    transaction: TransactionReducer,
    wallet: WalletReducer
})


const store = configureStore(
    { reducer: rootReducer},
    applyMiddleware(thunk, logger)
)

export default store
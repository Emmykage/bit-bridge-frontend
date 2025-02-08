import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AuthReducer, OrderReducer, orderTokenReducer, paymentReducer, ProductReducer, ProvisionReducer, purchaseReducer, TransactionReducer, WalletReducer } from ".";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
    transaction: TransactionReducer,
    wallet: WalletReducer,
    order:  OrderReducer,
    product: ProductReducer,
    provision: ProvisionReducer,
    purchase: purchaseReducer,
    orderToken: orderTokenReducer,
    billPurchase: paymentReducer
})


const store = configureStore(
    { reducer: rootReducer},
    applyMiddleware(thunk, logger)
)

export default store
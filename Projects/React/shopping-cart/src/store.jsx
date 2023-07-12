import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Products/ProductSlice";
import cartReducer from "./features/CartFeature/cartSlice";

const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
    }
})

export default store;
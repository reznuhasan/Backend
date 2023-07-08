import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/Features/ProductFeature/productSlice"
import cartReducer from "./Features/CartFeature/cartSlice";

const store=configureStore({
    reducer:{
        products:productReducer,
        carts:cartReducer
    }
})

export default store
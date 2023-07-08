import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/Features/ProductFeature/productSlice"

const store=configureStore({
    reducer:{
        products:productReducer,
    }
})

export default store
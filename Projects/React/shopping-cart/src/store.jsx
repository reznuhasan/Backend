import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Products/ProductSlice";

const store=configureStore({
    reducer:{
        product:productReducer,
    }
})

export default store;
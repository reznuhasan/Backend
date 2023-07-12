import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductAPI } from "./ProductAPI";
const initialState={
    isLoading:false,
    product:[],
    error:"",
}

export const getAllProducts=createAsyncThunk("product/getAllProducts",async()=>{
    try{
        const res=await ProductAPI();
        return res.data
    }catch(error){
        throw new Error("fetching problem get all products")
    }
})

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.product=action.payload;
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
        })
    }

})

export default productSlice.reducer;
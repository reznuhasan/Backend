import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { allProductAPI } from "./productAPI"



const initialState={
    isLoading:false,
    products:[],
    error:"",
}

export const getAllProducts=createAsyncThunk("products/getAllProducts",async()=>{
    try{
        const res=await allProductAPI();
        return res.data;
    }
    catch(error){
        throw new Error("fetching problem in get all products")
    }
})

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload;
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
        })
    }
})

export default productSlice.reducer;
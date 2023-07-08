import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isLoading:true,
    items:[],
    error:"",
}

const cartSlice=createSlice({
    name:"carts",
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
            const product=action.payload;
            const {title,thumbnail,price}=product;
            const itemId=state.items.findIndex(item=>item.title===product.title);
            if(itemId===-1){
                state.items.push({title,thumbnail,price,quantity:1})
            }else{
                state.items[itemId].quantity +=1;
            }
        },
        removeItemFromCart:(state,action)=>{
            const product=action.payload;
            state.items=state.items.filter(item=>item.id!==product.id)
        }
    }
})

export const {addItemToCart,removeItemFromCart}=cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"


const initialState={
    items:[],
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItems=action.payload;
            const checkItem=state.items.findIndex(item=>item.id===newItems.id)
            if(checkItem===-1){
               state.items.push({...newItems,quantity:1})
            }else{
                state.items[checkItem].quantity+=1;
            }
        },
        removeItem:(state,action)=>{
            const removeItemId=action.payload;
            state.items=state.items.filter(item=>item.id!==removeItemId)
        },
        increment:(state,action)=>{
            const incrementId=action.payload;
            const indexNo=state.items.findIndex(item=>item.id===incrementId);
            state.items[indexNo].quantity+=1;
        },
        decrement:(state,action)=>{
            const decrementId=action.payload;
            const indexNo=state.items.findIndex(item=>item.id===decrementId);
            if(state.items[indexNo].quantity>1){
                state.items[indexNo].quantity-=1;
            }
        }
    }
})

export const {addItem,removeItem,increment,decrement}=cartSlice.actions;
export default cartSlice.reducer; 
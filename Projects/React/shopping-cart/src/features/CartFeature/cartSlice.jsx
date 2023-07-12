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
            const checkItem=state.items.findIndex(item=>item.title===newItems.title)
            if(checkItem===-1){
               state.items.push({...newItems,quantity:1})
            }else{
                state.items[checkItem].quantity+=1;
            }
        }
    }
})

export const {addItem}=cartSlice.actions;
export default cartSlice.reducer; 
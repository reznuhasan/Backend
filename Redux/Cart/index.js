const { createStore } = require("redux");

const ADD_PRODUCT="add_product";

//state
const initialCart={
    cart:[],
    count:0,
}

//action 
const addProductCounter=(item)=>{
    return{
        type:ADD_PRODUCT,
        payload:item
    }
}

//reducer
const productReducer=(state=initialCart,action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                cart:[...state.cart,action.payload],
                count:state.count+1,
            }
    }
}

const store=createStore(productReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addProductCounter("Bag"))
store.dispatch(addProductCounter("pen"))
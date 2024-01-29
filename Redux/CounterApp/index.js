const { createStore } = require("redux");

const INCREMENT="increment";
const DECREMENT="decrement";


//state
const initialState={
    count:0,
}

//action
const incrementCounter=(value)=>{
    return{
        type:INCREMENT,
        payload:value,
    }
}
const decrementCounter=(value)=>{
    return{
        type:DECREMENT,
        payload:value,
    }
}

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count-action.payload
            }
        default:
            return state
    }
}

const store=createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounter(10))
store.dispatch(decrementCounter(20))
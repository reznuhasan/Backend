const { createStore } = require("redux");

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
//state
const initialValue={
    count:0
}

//action
const incrementCounter=()=>{
    return{
        type:INCREMENT,
    }
}
const decremnetCounter=()=>{
    return{
        type:DECREMENT,
    }
}

const counterReducer=(state=initialValue,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count+1,
            }
        case DECREMENT:
            return{
                count:state.count-1,
            }
        
        default:
            {
                return state;
            }
    }
}

const store=createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCounter());
store.dispatch(incrementCounter())
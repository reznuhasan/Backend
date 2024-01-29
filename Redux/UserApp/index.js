const { createStore } = require("redux");

const ADD_USER="add_user";
const REMOVE_USER="remove_user"
const SHOW_USER="show_user"

//state
const initialState={
    users:["rizwan"],
}

//action
const addUser=(name)=>{
    return{
        type:ADD_USER,
        payload:name,
    }
}
const removeUser=(name)=>{
    return{
        type:REMOVE_USER,
        payload:name,
    }
}
const showUser=()=>{
    return {
        type:SHOW_USER,
    }
}
//reducers
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        case REMOVE_USER:
            {
                const newArray=state.users.filter(user=>user.toLowerCase()!==action.payload.toLowerCase())
               return{
                   ...state,
                   users:newArray,
               }
            }
        case SHOW_USER:
            return {
                state
            }
    }
}

const store=createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addUser("Tanvir"));
store.dispatch(removeUser("Tanvir"))
store.dispatch(showUser())
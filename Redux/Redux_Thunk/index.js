const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

const ADD_USER_SUCCESS="add_user_success";
const ADD_USER_FAILED="add_user_failed";
const ADD_USER_LOADING="add_user_loading";

//state
const initialState={
    user:[],
    isLoading:false,
    error:"",
}

//action

const addUserLoadingCounter=()=>{
    return{
        type:ADD_USER_LOADING,
    }
}
const addUserSuccessCounter=(user)=>{
    return{
        type:ADD_USER_SUCCESS,
        payload:user,
    }
}
const addUserFailedCounter=(error)=>{
    return{
        type:ADD_USER_FAILED,
        payload:error,
    }
}

const userReducer=(state=initialState,action)=>{   
    switch (action.type) {
           case ADD_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                user:[...state.user,action.payload],
                error:""
            }
        case ADD_USER_LOADING:
            return{
                ...state,
                isLoading:true,
                error:""
            }
        case ADD_USER_FAILED:
            return{
                ...state,
                isLoading:false,
                error:""
            }
        default:
            return state
    }
}

const store=createStore(userReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})
const fetchData=()=>{
    return(dispatch)=>{
        dispatch(addUserLoadingCounter())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const users=res.data
            users.map(user=>{
                dispatch(addUserSuccessCounter(user.company.name))
            })
        })
        .catch((error)=>{
            dispatch(addUserFailedCounter(error.message))
        })
    }
}

store.dispatch(fetchData())
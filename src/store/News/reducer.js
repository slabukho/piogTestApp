import actionTypes from './actionTypes'

const InitState =()=>{
    return{
        isAuthAdmin: false
    }
}

const  adminReducer=(state=InitState(), action)=>{
    switch(action.type){
    case actionTypes.GET_ACCESS_AUTH:{
        return {
            ...state,
            isAuthAdmin: action.payload
        }
    }
    case actionTypes.LOGOUT:{
        return {
            ...state,
            isAuthAdmin: false
        }
    }
    default: return state
}
}

export default adminReducer
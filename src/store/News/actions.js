import actiontypes from './actionTypes'

export const authAction=(isAuth) =>{
    return {
        type:actiontypes.GET_ACCESS_AUTH,
        payload:isAuth
    }
}

export const logoutAction=()=>{
    return {
        type:actiontypes.LOGOUT
    }
}
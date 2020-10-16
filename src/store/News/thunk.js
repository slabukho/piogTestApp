import {
    getAuthStatusFetch
} from '../../api/auth.api'
import {
    authAction,
    logoutAction
} from './actions'


export const authThunk=()=>{
    return async (dispatch)=>{
        try{
            const isAuth = await getAuthStatusFetch()
            if (isAuth===200) {
                dispatch(authAction(true))
                localStorage.setItem('auth', true)
            }
        }
        catch{
            alert('You`r don`t admin, sorry')
        }
    }
}

export const logoutThunk=()=>{
    return async (dispatch) => {
        dispatch(logoutAction())
        localStorage.removeItem('auth')
    }
}

export const initThunk=()=>{
    return async (dispatch) => {
        try {
            const isAuth = localStorage.getItem('auth')
            if (!isAuth) dispatch(logoutThunk())
            else dispatch(authThunk(true))
        }
        catch (e) {
            console.log(e)
        }
    }
}
import React from 'react'
import {Link} from 'react-router-dom'
import {
    HeaderStyled
} from './styled'
import { useDispatch, useSelector } from 'react-redux';
import {authThunk, logoutThunk} from '../../store/News/thunk'
import {getIsAuthSelector} from '../../store/News/selectors'
import logoutImg from '../../imgs/logout (2).png'
import guide from '../../constatns/modulesGuide'


const Header=()=>{
    const isAuth = useSelector(getIsAuthSelector)
    const dispatch = useDispatch()
    const logout=()=>{
        dispatch(logoutThunk())
    }
    return(
        <HeaderStyled>
            {isAuth?<img src={logoutImg} onClick={logout}/>:<Link to={guide.auth.auth.path}>Sign in</Link>}
        </HeaderStyled>
    )
}


export default Header
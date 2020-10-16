import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import guide from '../../constatns/modulesGuide'
import {getIsAuthSelector} from '../../store/News/selectors'


const Application =()=>{
    const isAuth = useSelector(getIsAuthSelector)
    const dispatch = useDispatch()
    return(
        isAuth?
        <Switch>
            <Route path={guide.notAuth.news.path} component={guide.notAuth.news.component}/>
            <Redirect to={guide.notAuth.news.path}/>
        </Switch>
        :
        <Switch>
            <Route path={guide.auth.auth.path} component={guide.auth.auth.component}/>
            <Route path={guide.notAuth.news.path} component={guide.notAuth.news.component}/>
            <Redirect to={guide.notAuth.news.path}/>
        </Switch>
    )
}

export default Application
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import adminReducer from './News/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {initThunk} from './News/thunk'

const rootReducer = combineReducers({
    admin:adminReducer,
})


const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(initThunk())


export default store;
// 1.引入redux  npm i redux
// 2.createStore( reducer )

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import createYueStore from "./yueStore"
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
// npm i redux-thunk 
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
// const store = createYueStore(reducer)

export default store


/*
    var obj={
        myname:"0xyue"
    }

    function test(obj){
        var newobj = {...obj}
        newobj.myname="xiaoming"
        return newobj
    }
    test(obj)

    纯函数：
    1.对外界没有副作用（不改变外界对象，深复制）
    2.同样的输入得到同样的输出
*/
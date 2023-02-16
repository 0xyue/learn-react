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

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['CityReducer']
}
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
// const store = createYueStore(reducer)
let persistor = persistStore(store)

export { store, persistor }


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
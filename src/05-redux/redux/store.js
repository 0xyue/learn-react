// 1.引入redux  npm i redux
// 2.createStore( reducer )

// import { createStore } from 'redux'
import createYueStore from "./yueStore"

const reducer = (prevState = { show: true }, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "hide-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show = true
            return newState
        default:
            return prevState
    }

}

// const store = createStore(reducer)
const store = createYueStore(reducer)

export default store
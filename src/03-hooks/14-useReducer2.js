import React, { useReducer, useContext } from 'react'


const intialState = {
    a: 1,
    b: 1
}

const reducer = (prevState, action) => {
    console.log(prevState, action)
    let newState = { ...prevState }
    switch (action.type) {
        case "change-a":
            newState.a = action.value
            console.log("change-a", newState)
            return newState
        case "change-b":
            newState.b = action.value
            console.log("change-b", newState)
            return newState
        default:
            return prevState

    }
}

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const { dispatch } = useContext(GlobalContext)
    return (
        <div style={{ background: "red" }}>
            <button onClick={() => {
                dispatch({
                    type: "change-a",
                    value: 2
                })
            }}>改变a</button>
            <button onClick={() => {
                dispatch({
                    type: "change-b",
                    value: 3
                })
            }}>改变b</button>
        </div>
    )
}

function Child2() {
    const { state } = useContext(GlobalContext)
    console.log("Child2", state)
    return (
        <div style={{ background: "yellow" }}>
            child2-{state.a}
        </div>
    )
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return (
        <div style={{ background: "gray" }} >
            child3-{state.b}
        </ div>
    )
}

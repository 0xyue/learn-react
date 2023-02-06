import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext()

const intialState = {
    filmList: [],
    info: ""
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "getFilmList":
            newState.filmList = action.value
            return newState
        case "clickFilm":
            newState.info = action.value
            return newState
        default:
            return prevState
    }


}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)


    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            console.log("useEffect", res.data.data.films)
            dispatch({
                type: "getFilmList",
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {state.filmList.map(item =>
                    <FilmItem key={item.filmId} {...item} />
                )}

                <FilmDetail />

            </div>
        </GlobalContext.Provider >
    )
}


function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    // context就是生成者提供的value值，可以省去<GlobalContext.Consumer>
    const { dispatch } = useContext(GlobalContext)
    //console.log(context)
    return (
        <div className='filmItem' onClick={() => {
            dispatch({ type: "clickFilm", value: synopsis })
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    )
}

function FilmDetail() {
    const { state } = useContext(GlobalContext)
    return (
        <div className='filmDetail'>
            {state.info}
        </div>
    )
}

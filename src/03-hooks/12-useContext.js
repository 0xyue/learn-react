import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext()


export default function App() {
    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState("")

    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            setFilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            info: info,
            changeInfo: (value) => {
                setInfo(value)
            }
        }}>
            <div>
                {filmList.map(item =>
                    <FilmItem key={item.filmId} {...item} />
                )}

                <FilmDetail />

            </div>
        </GlobalContext.Provider>
    )
}


function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    // context就是生成者提供的value值，可以省去<GlobalContext.Consumer>
    const value = useContext(GlobalContext)
    //console.log(context)
    return (
        <div className='filmItem' onClick={() => {
            //console.log(synopsis)
            value.changeInfo(synopsis)
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    )
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    return (
        <div className='filmDetail'>
            {value.info}
        </div>
    )
}

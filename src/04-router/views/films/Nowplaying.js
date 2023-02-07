import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Nowplaying(props) {
    const [list, setlist] = useState([])
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
            .then(res => {
                // console.log(res.data)
                setlist(res.data.data.films)
            })
            .catch(err => { console.log(err) })
    }, [])

    const history = useHistory()

    const handleChangePage = (id) => {
        console.log("Nowplaying handleChangePage props:", props)
        //原生方法
        // window.location.href = "#/detail/" + id

        // props中的history
        // props.history.push(`/detail/${id}`)

        // react-router-dom中的useHistory()
        // 动态路由传参
        history.push(`/detail/${id}`)

        // query传参
        // history.push({ pathname: '/detail', query: { filmId: id } })

        // state传参
        // history.push({ pathname: '/detail', state: { filmId: id } })


    }


    return (
        <div>

            {list.map(item =>
                <li key={item.filmId} onClick={() => handleChangePage(item.filmId)} >{item.name}</li>
            )}
        </div>
    )
}

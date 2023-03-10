import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'


export default function Cinema() {
    const [cinemaList, setcinemaList] = useState([])
    const [mytext, setmytext] = useState("")

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
            .then(res => {
                console.log(res.data.data.cinemas)
                setcinemaList(res.data.data.cinemas)
            })
            .catch(err => { console.log(err) })
    }, [])

    const getCinemaList = useMemo(
        () => {
            console.log("useMemo")
            return cinemaList.filter(item =>
                item.name.toUpperCase().includes(mytext.toUpperCase()) ||
                item.address.toUpperCase().includes(mytext.toUpperCase())
            )
        }, [cinemaList, mytext]
    )


    return (
        <div>
            <input value={mytext} onChange={(evt) => { setmytext(evt.target.value) }} />
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>
                )
            }
        </div>
    )
}




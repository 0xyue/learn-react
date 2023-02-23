import { autorun } from 'mobx'
import React, { useEffect, useState } from 'react'
import store from '../mbox/store'



export default function Cinemas(props) {


    const [list, setList] = useState([])

    useEffect(() => {
        if (store.list.length === 0) {
            store.getList()
        }

        var unsubscribe = autorun(() => {
            console.log("Cinemas-store.list:", store.list)
            setList(store.list)
        })

        return () => {
            unsubscribe()
        }

    }, [])


    return (
        <div>
            {
                list.map((item) => {
                    return (
                        <dl key={item.cinemaId} style={{ padding: "10px" }}>
                            <dt>{item.name}</dt>
                            <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
                        </dl>
                    )
                })
            }

        </div>
    )
}

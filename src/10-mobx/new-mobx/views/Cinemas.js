import React, { useEffect } from 'react'
import store from '../mbox/store'
import { Observer } from 'mobx-react'



export default function Cinemas(props) {

    useEffect(() => {
        if (store.list.length === 0) {
            store.getList()
        }

    }, [])


    return (
        <div>
            <Observer>
                {
                    () => {
                        return (
                            store.list.map((item) => {
                                return (
                                    <dl key={item.cinemaId} style={{ padding: "10px" }}>
                                        <dt>{item.name}</dt>
                                        <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
                                    </dl>
                                )
                            })
                        )
                    }
                }
            </Observer>
        </div>
    )
}

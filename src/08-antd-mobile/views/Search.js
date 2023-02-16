import React, { useState, useEffect, useMemo } from 'react'
import { store } from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {

    const [list, setList] = useState(store.getState().CinemaListReducer.list)
    const [mytext, setMytext] = useState("")
    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            // 去后台取数据 actionCreator 里写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("search中,store 缓存")
        }

        // 订阅
        var unsubscribe = store.subscribe(() => {
            console.log("Search中订阅", store.getState())
            setList(store.getState().CinemaListReducer.list)
        })
        return () => {
            // 销毁时取消订阅
            unsubscribe()
        }


    }, [])

    const getCinemaList = useMemo(
        () => {
            console.log("useMemo")
            return list.filter(item =>
                item.name.toUpperCase().includes(mytext.toUpperCase()) ||
                item.address.toUpperCase().includes(mytext.toUpperCase())
            )
        }, [list, mytext]
    )
    return (
        <div>
            <input value={mytext} onChange={(evt) => { setMytext(evt.target.value) }} />
            {
                getCinemaList.map((item) => {
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

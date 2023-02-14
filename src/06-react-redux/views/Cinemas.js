import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'


export default function Cinemas(props) {

    const [city] = useState(store.getState().CityReducer.city)
    const [list, setList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            // 去后台取数据 actionCreator 里写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("cinema中,store 缓存")
        }

        // 订阅
        var unsubscribe = store.subscribe(() => {
            console.log("cinema中订阅", store.getState())
            setList(store.getState().CinemaListReducer.list)
        })
        return () => {
            // 销毁时取消订阅
            unsubscribe()
        }


    }, [])


    return (
        <div>
            <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    props.history.push(`/city`)
                }} style={{ float: "left" }}>{city}</div>
                <div onClick={() => {
                    props.history.push(`/cinemas/search`)
                }} style={{ float: "right" }}>搜索</div>
            </div>
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

import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import store from '../redux/store'

export default function Detail(props) {

    useEffect(() => {
        store.dispatch(hide())
        return () => {
            store.dispatch(show())
        }

    }, [])

    return (
        <div>
            detail
        </div>
    )
}

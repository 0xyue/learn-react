import React, { useEffect } from 'react'
import store from '../mbox/store'
export default function Detail(props) {
    // 动态传参 参数获取方式
    console.log("Detail-props:", props, ",filmId:", props.match.params.filmId)

    useEffect(() => {
        console.log("Detail-store.isTabbarShow:", store.isTabbarShow)
        // store.isTabbarShow = false
        store.tabbarHide()
        return () => {
            console.log("Detail销毁-store.isTabbarShow:", store.isTabbarShow)
            // store.isTabbarShow = true
            store.tabbarShow()
        }
    }, [])

    return (
        <div>
            detail
        </div>
    )
}

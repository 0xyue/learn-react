import React, { useEffect } from 'react'
import store from '../mbox/store'
export default function Detail(props) {
    // 动态传参 参数获取方式
    console.log("Detail-props:", props, ",filmId:", props.match.params.filmId)

    useEffect(() => {

        // store.isTabbarShow = false
        store.tabbarHide()
        console.log("Detail-store.isTabbarShow:", store.isTabbarShow)
        return () => {

            // store.isTabbarShow = true
            store.tabbarShow()
            console.log("Detail销毁-store.isTabbarShow:", store.isTabbarShow)
        }
    }, [])

    return (
        <div>
            detail
        </div>
    )
}

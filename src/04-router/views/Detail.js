import React from 'react'

export default function Detail(props) {
    // 动态传参 参数获取方式
    console.log("Detail-props:", props, ",filmId:", props.match.params.filmId)
    // query传参 参数获取方式
    // console.log(props, props.location.query.filmId)
    // state传参 参数获取方式
    // console.log(props, props.location.state.filmId)
    return (
        <div>
            detail
        </div>
    )
}

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'

function Detail(props) {
    let { show, hide, match } = props
    useEffect(() => {
        console.log("Detail-props", props)
        console.log("Detail-filmId", match.params.filmId, "利用id取后端拿数据")
        hide()
        return () => {
            show()
        }
    }, [match.params.filmId])

    return (
        <div>
            detail
        </div>
    )
}

const mapDispatchToProps = {
    show,
    hide
}

// connect第一个参数是给孩子传的属性，第二个函数是回调函数
export default connect(null, mapDispatchToProps)(Detail)

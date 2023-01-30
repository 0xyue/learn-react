import React from 'react'
import reactPropTypes from 'prop-types'
export default function Sidebar(props) {
    console.log(props)
    let { bg, position } = props

    var obj = {
        background: bg,
        width: '60px',
        position: "fixed"
    }
    var obj1 = {
        left: 0
    }
    var obj2 = {
        right: 0
    }

    var styleobj = position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 }
    console.log(styleobj)
    return (
        <div style={styleobj}>
            <ul>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
                <li>11</li>
            </ul>
        </div>
    )
}
// 函数组件属性默认值设置
Sidebar.defaultProps = {
    position: "left"
}
// 函数组件属性验证
Sidebar.propTypes = {
    bg: reactPropTypes.string,
    position: reactPropTypes.string
}
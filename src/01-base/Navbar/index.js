import React, { Component } from 'react'
import reactPropTypes from 'prop-types'
console.log(reactPropTypes)
export default class Navbar extends Component {
    // static静态属性，直接用类名.调用，不用new对象
    static propTypes = {
        title: reactPropTypes.string,
        leftshow: reactPropTypes.bool
    }

    // 默认属性
    static defaultProps = {
        leftshow: true
    }

    render() {
        console.log(this.props)
        let { title, leftshow } = this.props
        return (

            <div>
                {leftshow && <button>返回</button>}
                Navbar组件-{title}
            </div>
        )
    }

}


// 类属性(类名.访问) 属性验证
// Navbar.propTypes = {
//     title: reactPropTypes.string,
//     leftshow: reactPropTypes.bool
// }
import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 类组件接收属性 */}
                <Navbar title="首页" leftshow={false} />
                {/* 函数组件接收属性 */}
                <Sidebar bg="yellow" position="left" />
            </div>
        )
    }
}

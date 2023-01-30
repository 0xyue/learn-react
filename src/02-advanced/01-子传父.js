import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: "red" }}>
                <button onClick={() => {
                    console.log("子通知父,让父的isShow去反", this.props.event)
                    // 调用父组件传来的回调函数
                    this.props.event()
                }}>click</button>
                <span>Navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", width: "80px" }}>
                <ul>
                    <li>11</li>
                    <li>11</li>
                    <li>11</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div>
                <Navbar event={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }} />
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }
}

/*
父传子：属性
子传父：回调函数 callback
*/
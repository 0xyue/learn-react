import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myusername: "username"
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type='text' value={this.state.myusername} onChange={(evt) => {
                    console.log("onchange", evt.target.value)
                    this.setState({
                        myusername: evt.target.value
                    })
                }} />
                <button onClick={() => {
                    console.log("登录", this.state.myusername)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        myusername: ""
                    })
                }}>重置</button>

                {/* 假设有个Child子组件，这时候因为是受控组件，输入框值变化会重新更新DOM，可以给子组件传值 */}
                {/* <Child myusername={this.state.myusername} /> */}
            </div>
        )
    }
}

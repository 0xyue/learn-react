import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type='text' ref={this.myusername} defaultValue="username" />
                <button onClick={() => {
                    console.log(this.myusername.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.myusername.current.value = ""
                }}>重置</button>

                {/* 假设有个Child子组件，这时候因为是非受控组件，输入框值变化不会重新更新DOM，所以无法给子组件传值 */}
                {/* <Child myusername={this.myusername.current.value} /> */}
            </div>


        )
    }
}

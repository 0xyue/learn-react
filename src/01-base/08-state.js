import React, { Component } from 'react'

export default class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         myShow: true
    //     }
    // }
    state = {
        myShow: true

    }
    render() {
        return (
            <div>
                <h1>欢迎来到React开发</h1>
                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow
                    })
                    if (this.state.myShow) {
                        console.log("收藏操作")
                    } else {
                        console.log("取消收藏操作")
                    }
                }}>
                    {this.state.myShow ? "抽藏" : "取消收藏"}
                </button>
            </div>
        )
    }
}

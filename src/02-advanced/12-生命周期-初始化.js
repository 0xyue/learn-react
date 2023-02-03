import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            myname: "0xyue"
        }
        console.log("constructor", this.state.myname, document.getElementById("myname"))
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount", this.state.myname, document.getElementById("myname"))

        // 第一次上树前的 最后一次修改状态机会，初始化数据的作用
        this.setState({
            myname: "yue"
        })
    }

    //react18中弃用了componentWillUnmount,UNSAFE_componentWillMount可以使用,但是推荐用constructor
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidMount() {
        console.log("componentDidMount", document.getElementById("myname"))
        //数据请求axios
        //订阅函数调用
        //setInterval
        //基于创建完的DOM进行初始化 BetterScroll
    }

    render() {
        console.log("render")
        return (
            <div>
                <span id="myname">{this.state.myname}</span>
            </div>
        )
    }
}

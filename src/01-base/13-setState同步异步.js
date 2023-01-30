import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export default class App extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd1}>add1</button>
                <button onClick={this.handleAdd2}>add2</button>
                <button onClick={this.handleAdd3}>add3</button>
                <button onClick={this.handleAdd4}>add4</button>
            </div>
        )
    }

    handleAdd1 = () => {
        // setState处在同步逻辑中，异步更新状态，虽然写了三遍，但是页面上每次还是只加1

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)


    }

    handleAdd2 = () => {
        // react18 ，setState处在异步逻辑中，也异步更新状态，下面结果还是只加1
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 0)
    }
    handleAdd3 = () => {
        // react18 ，可以使用flushSync 使其同步更新状态
        setTimeout(() => {
            flushSync(() => {
                this.setState({
                    count: this.state.count + 1
                })
            })
            console.log(this.state.count)

            flushSync(() => {
                this.setState({
                    count: this.state.count + 1
                })
            })
            console.log(this.state.count)

            flushSync(() => {
                this.setState({
                    count: this.state.count + 1
                })
            })
            console.log(this.state.count)
        }, 0)
    }

    handleAdd4 = () => {
        // 可以用回调函数获取更新后的值
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("回调函数中", this.state.count)
        })
        console.log("回调函数外", this.state.count)
    }
}

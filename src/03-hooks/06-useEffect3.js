import React, { Component, useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ isCreated: !this.state.isCreated }) }} >click</button>
                <br />
                {this.state.isCreated ? <Child /> : ""}
            </div>
        )
    }

}

function Child() {
    useEffect(() => {
        var timer = setInterval(() => {
            console.log("111")
        }, 1000)

        return () => {
            // 没有依赖的情况下，销毁的时候执行一次。有依赖的情况下，每次依赖更新都会执行
            console.log("组件销毁")

            clearInterval(timer)
        }
    }, [])

    return (
        <div>child</div>
    )

    // clearInterval(timer)

}



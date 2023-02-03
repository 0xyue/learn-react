import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: "0xyue"
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "xiaoming"
                    })
                }}>click</button>
                <span>{this.state.myname}</span>
            </div>
        )
    }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    //快捷键 scu
    shouldComponentUpdate(nextProps, nextState) {

        //if (nextState.myname !== this.state.myname) {
        if (JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            console.log("shouldComponentUpdate:", "更新")
            return true
        }
        console.log("shouldComponentUpdate:", "不更新")
        return false
    }
}

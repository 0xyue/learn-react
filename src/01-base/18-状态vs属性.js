import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (

            <div>
                <button onClick={() => {
                    // 无法改变属性状态，会报错Cannot assign to read only property 'text' of object '#<Object>'
                    this.props.text = "333"
                }} >click-子</button>
                <br />
                child-{this.props.text}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: "111"
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: "222"
                    })
                }} >click-父</button>
                <Child text={this.state.text}></Child>
            </div>
        )
    }
}

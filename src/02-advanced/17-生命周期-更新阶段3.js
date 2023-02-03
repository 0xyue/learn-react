import React, { Component } from 'react'

class Child extends Component {
    state = {
        mytext: ""
    }
    render() {
        return (
            <div>
                child-{this.state.mytext}
            </div>
        )
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps,nextProps:", nextProps.text, ",old:", this.props.text)

        // 最先获得父组件传来的属性，可以利用属性进行ajax处理或者逻辑处理
        // 把属性转化为孩子自己的状态
        this.setState({
            mytext: nextProps.text + "999"
        })
    }
}

export default class App extends Component {
    state = {
        text: "111"
    }
    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={() => {
                    this.setState({
                        text: "222"
                    })
                }}>click</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}

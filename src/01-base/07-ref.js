import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()

    render() {
        return (
            <div>
                <input ref="mytext" />
                <button onClick={() => { console.log("click1", this.refs.mytext) }}>add1-{'<input>'}</button>
                <button onClick={() => { console.log("click2", this.refs.mytext.value) }}>add2-输入框值</button>
                <br />
                <input ref={this.myref} />
                <button onClick={() => { console.log("click3", this.myref.current.value) }}>add3-ref新写法</button>
            </div>
        )
    }

}
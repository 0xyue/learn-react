import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myhtml: `<h1>aaa</h1><h2>bbb</h2>`
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={
                { __html: this.state.myhtml }
            }>
            </div>
        )
    }
}

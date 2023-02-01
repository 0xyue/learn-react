import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                child
                {/* 插槽 vue slot,具名插槽 */}

                {this.props.children[2]}
                {this.props.children[1]}
                {this.props.children[0]}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>111</div>
                    <div>222</div>
                    <div>333</div>
                </Child>
            </div>
        )
    }
}

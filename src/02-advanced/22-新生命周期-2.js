import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext: ""
    }
    render() {
        console.log("render")
        return (
            <div>
                <input onChange={(evt) => {
                    this.setState({ mytext: evt.target.value })
                }} value={this.state.mytext} />
                <br />
                {this.state.mytext}
            </div>
        )
    }


    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate")
        return 100
    }

    componentDidUpdate(prevProps, prevState, value) {
        console.log("componentDidUpdate", value)
    }
}

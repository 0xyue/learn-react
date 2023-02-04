import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: "xiaoming"
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps")
        return {
            myname: nextState.myname.substring(0, 1).toUpperCase() + nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <input onChange={(evt) => {
                    this.setState({
                        myname: evt.target.value
                    })
                }} />
                {this.state.myname}
            </div>
        )
    }
}

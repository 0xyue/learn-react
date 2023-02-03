import axios from 'axios'
import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
    state = {
        myname: "0xyue",
        list: []
    }

    componentDidMount() {
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
        })

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
                <span id='myname'>{this.state.myname}</span>
                <div id="wrapper" style={{ height: "100px", background: "yellow", overflow: "hidden" }} >
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item.filmId}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentWillUpdate() {
        console.log("componentWillUpdate", document.getElementById("myname").innerHTML)
    }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", document.getElementById("myname").innerHTML)

        // 更新后，想要获取DOM节点

        console.log("prevState.list:", prevState.list)
        if (prevState.list.length === 0) {
            new BScroll("#wrapper")
        }

    }

}

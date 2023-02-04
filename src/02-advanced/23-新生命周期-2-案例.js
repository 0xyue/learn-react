import React, { Component } from 'react'
import './css/04-clear.css'

export default class App extends Component {
    state = {
        list: [3, 2, 1]
    }
    myref = React.createRef()

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[this.state.list.length + 1], ...this.state.list]
                    })
                }}>来邮件</button>
                <h1>邮箱应用</h1>
                <div style={{ height: "200px", overflow: "auto" }} ref={this.myref} >
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item} style={{ height: "100px", background: "yellow" }}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }


    getSnapshotBeforeUpdate() {
        //获取容器高度
        console.log("getSnapshotBeforeUpdate:scrollHeight", this.myref.current.scrollHeight, ",scrollTop:", this.myref.current.scrollTop)
        return this.myref.current.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, value) {
        console.log("componentDidUpdate:scrollHeight", this.myref.current.scrollHeight, ",scrollTop:", this.myref.current.scrollTop)
        if (this.myref.current.scrollTop === 0) {
            this.myref.current.scrollTop += this.myref.current.scrollHeight - value
        }
        console.log("变更后scrollTop:", this.myref.current.scrollTop)
    }
}

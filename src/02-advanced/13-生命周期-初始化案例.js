import React, { Component } from 'react'
import BScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: ["111", "222", "333", "444", "555", "666", "777", "888", "999", "123", "223", "323"]
    }

    componentDidMount() {
        console.log(document.querySelectorAll("li"))
        new BScroll("#wrapper")
    }
    render() {
        return (
            <div>
                <div id="wrapper" style={{ height: "200px", background: "yellow", overflow: "hidden" }}>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

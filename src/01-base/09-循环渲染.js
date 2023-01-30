import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "111"
            },
            {
                id: 2,
                text: "222"
            },
            {
                id: 3,
                text: "333"
            }]
    }
    render() {
        var nlist = this.state.list.map(item => <li key={item.id}>{item.text}</li>)
        return (
            <div>
                {nlist}
            </div>
        )
    }
}

/*
    原生js - map
*/
var list = ["aa", "bb", "cc"]
// 正确的符号是 ` (键盘上1左边的那个键）而不是 '
var newlist = list.map(item => `<li>${item}</li>`)

console.log(newlist.join(""))
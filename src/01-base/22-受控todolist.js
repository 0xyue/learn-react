import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext: '',
        list: [
            {
                id: 1,
                mytext: "aa",
                isChecked: false
            },
            {
                id: 2,
                mytext: "bb",
                isChecked: false
            },
            {
                id: 3,
                mytext: "cc",
                isChecked: false
            }
        ]
    }

    render() {

        return (
            <div>
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState({
                        mytext: evt.target.value
                    })
                }} />
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                <input type="checkbox" checked={item.isChecked} onChange={() => this.handleChecked(index)} />
                                <span style={{ textDecoration: item.isChecked ? "line-through" : "" }}>{item.mytext}</span>
                                <button onClick={this.handleDelClick.bind(this, index)}>del</button>
                            </li>)
                    }
                </ul>
                {this.state.list.length === 0 && <div>暂无待办事项</div>}
            </div >
        )
    }

    handleClick = () => {

        var newlist = this.state.list.slice()

        newlist.push({
            id: Math.random() * 100000000,
            mytext: this.state.mytext,
            isChecked: false
        })
        this.setState({
            mytext: '',
            list: newlist
        })

    }

    handleDelClick(index) {
        console.log("del-click", "del-index:", index)
        let newlist = [...this.state.list]
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }

    handleChecked(index) {
        console.log("check,index:", index, ",to", !this.state.list[index].isChecked)
        let newlist = [...this.state.list]
        newlist[index].isChecked = !this.state.list[index].isChecked

        this.setState({
            list: newlist
        })

    }


}


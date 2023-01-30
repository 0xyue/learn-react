import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    myref = React.createRef()
    state = {
        list: ["aa", "bb", "cc"]
    }

    render() {

        return (
            <div>
                <input ref={this.myref} />
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>
                                {/* {item} */}
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    { __html: item }
                                }></span>
                                <button onClick={this.handleDelClick.bind(this, index)}>del1</button>
                                <button onClick={() => { this.handleDelClick(index) }}>del2</button>
                            </li>)
                    }
                </ul>
                {this.state.list.length === 0 ? <div>暂无待办事项-方式1</div> : null}
                {this.state.list.length === 0 && <div>暂无待办事项-方式2</div>}
                {<div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项-方式3</div>}
            </div >
        )
    }

    handleClick = () => {
        console.log(this.myref.current.value)

        // 不建议直接修改state，可能会造成不可预期的问题
        // this.state.list.push(this.myref.current.value)

        // slice() 无参数相当于深度负责list给newlist
        var newlist = this.state.list.slice()
        // 其他深度复制方式
        // var newlist = [...this.state.list]
        newlist.push(this.myref.current.value)
        this.setState({
            list: newlist
        })

        // 清空输入框
        this.myref.current.value = ""
    }

    handleDelClick(index) {
        console.log("del-click1", "del-index:", index)
        let newlist = [...this.state.list]
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }


}


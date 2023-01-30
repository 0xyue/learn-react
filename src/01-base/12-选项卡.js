import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

export default class App extends Component {
    state = {
        list: [
            {
                id: 0,
                text: "电影"
            },
            {
                id: 1,
                text: "影院"
            },
            {
                id: 2,
                text: "我的"
            }
        ],
        currentIndex: 0
    }
    render() {
        return (
            <div>
                {/* {this.state.currentIndex === 0 && <Film></Film>}
                {this.state.currentIndex === 1 && <Cinema></Cinema>}
                {this.state.currentIndex === 2 && <Center></Center>} */}
                {/* 用函数表达式显示不同组件 */}
                {this.which()}
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}
                                className={this.state.currentIndex === index ? 'active' : ''}
                                onClick={() => this.handleClick(index)}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        this.setState({
            currentIndex: index
        })
    }

    which() {
        switch (this.state.currentIndex) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }
}

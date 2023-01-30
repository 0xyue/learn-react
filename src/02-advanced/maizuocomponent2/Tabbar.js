import React, { Component } from 'react'

export default class Tabbar extends Component {
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
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}
                                className={this.props.currentIndex === index ? 'active' : ''}
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
        this.props.event(index)
    }
}

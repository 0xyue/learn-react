import React, { Component } from 'react'
import { fromJS } from 'immutable'

export default class App extends Component {
    state = {
        info: fromJS({
            name: '0xyue',
            location: {
                province: '安徽',
                city: '合肥'
            },
            favor: ['读书', '看报', '写代码']
        })
    }

    componentDidMount() {
        console.log(this.state.info)
    }

    render() {
        return (
            <div>
                <h1>个人信息修改</h1>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set('name', '小明')
                            .setIn(['location', 'city'], '淮南')
                    })
                }} >修改</button>
                {
                    this.state.info.get('name')
                }
                <br />
                {
                    this.state.info.get('location').get('province')
                }
                -
                {
                    this.state.info.get('location').get('city')
                }
                < br />
                {
                    this.state.info.get('favor').map((item, index) =>
                        <li key={index}>
                            {item}
                            <button onClick={(index) => {
                                this.setState({
                                    // info: this.state.info.setIn(['favor', index],'111')
                                    info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
                                })
                            }}>del</button>
                        </li>
                    )
                }
            </div >
        )
    }
}

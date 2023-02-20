import React, { Component } from 'react'
import { Map, List } from 'immutable'

export default class App extends Component {
    state = {
        info: Map({
            name: '0xyue',
            location: Map({
                province: '安徽',
                city: '淮南'
            }),
            favor: List(['读书', '看报', '写代码'])
        })
    }
    render() {
        return (
            <div>
                <h1>个人信息修改</h1>
                <br />
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
                <br />
                {
                    this.state.info.get('favor').map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </div>
        )
    }
}

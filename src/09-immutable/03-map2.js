import { Map } from 'immutable'
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        info: Map({
            name: '0xyue',
            select: 'aa',
            filter: Map({
                text: '',
                up: true,
                down: false
            })
        })
    }

    componentDidMount() {
        console.log(this.state.info.get('filter'))
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set('name', 'xiaoming')
                    })
                }} >click</button>
                {this.state.info.get('name')}
                <Child filter={this.state.info.get('filter')} />
            </div>
        )
    }
}

class Child extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.filter !== nextProps.filter
    }

    componentDidUpdate() {
        console.log(this.props.filter)
    }

    render() {
        return (
            <div>Child</div>
        )
    }
}

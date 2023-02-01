import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

var bus = {
    list: [],
    // 订阅
    subscribe(callback) {
        //console.log(callback)
        this.list.push(callback)
    },
    // 发布
    publish(value) {
        this.list.forEach(callback => {
            callback && callback(value)
        })
    }
}

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: []
        }
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.filmList.map(item =>
                    <FilmItem key={item.filmId} {...item} />
                )}

                <FilmDetail />

            </div>
        )
    }
}

class FilmItem extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            <div className='filmItem' onClick={() => {
                bus.publish(synopsis)
            }}>
                <img src={poster} alt={name} />
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            info: ""
        }
        bus.subscribe((value) => {
            this.setState({
                info: value
            })
        })
    }
    render() {
        return (
            <div className='filmDetail'>
                {this.state.info}
            </div>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ type: 1 }) }}>正在热映</button>
                <button onClick={() => { this.setState({ type: 2 }) }}>即将上映</button>
                <FilmList type={this.state.type} />
            </div>
        )
    }
}

class FilmList extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )}
                </ul>
            </div>
        )
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount")
        this.get_filmlist("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301")

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps")
        var url = ""
        if (nextProps.type === 1) {
            console.log("请求正在热映的数据")
            url = "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301"

        } else {
            console.log("请求即将上映的数据")
            url = "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=4274872"
        }
        this.get_filmlist(url)

    }

    get_filmlist(url) {
        axios({
            url: url,
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }

        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    list: res.data.data.films
                })
            })
            .catch(err => { console.log(err) })
    }
}

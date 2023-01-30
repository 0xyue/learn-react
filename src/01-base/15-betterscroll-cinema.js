import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
    // 后面要学的生命周期函数 更适合发送ajax
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            bakcinemaList: []
        }
        // axios 第三方库， 专门用于请求数据 , npm i axios 安装
        // 用法：axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934").then(res => {
        //     console.log(res)
        // }).catch(err => { console.log(err) })

        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
            .then(res => {
                console.log(res.data.data.cinemas)

                this.setState({
                    cinemaList: res.data.data.cinemas,
                    bakcinemaList: res.data.data.cinemas
                }, () => {
                    new BScroll('.wrapper')
                })
            })
            .catch(err => { console.log(err) })
    }



    render() {
        return (
            <div>
                <input onInput={this.handleInput} />
                <div className='wrapper' style={{ height: '500px', background: 'yellow', overflow: 'hidden' }}>
                    <div className='content'>
                        {
                            this.state.cinemaList.map(item =>
                                <dl key={item.cinemaId}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.address}</dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    handleInput = (event) => {
        console.log("input", event.target.value)

        var newlist = this.state.bakcinemaList.filter(item =>
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase().includes(event.target.value.toUpperCase())
        )
        console.log(newlist)
        this.setState({
            cinemaList: newlist
        }, () => {
            new BScroll('.wrapper')
        })
    }
}



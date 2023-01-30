import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
    // 后面要学的生命周期函数 更适合发送ajax
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            mytext: ""
            // bakcinemaList: []
        }


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
                    cinemaList: res.data.data.cinemas
                    // bakcinemaList: res.data.data.cinemas
                })
            })
            .catch(err => { console.log(err) })
    }



    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState({
                        mytext: evt.target.value
                    })
                }} />
                {
                    this.getCinemaList().map(item =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    getCinemaList() {
        return this.state.cinemaList.filter(item =>
            item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) ||
            item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
        )
    }

    // handleInput = (event) => {
    //     console.log("input", event.target.value)

    //     var newlist = this.state.bakcinemaList.filter(item =>
    //         item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
    //         item.address.toUpperCase().includes(event.target.value.toUpperCase())
    //     )
    //     console.log(newlist)
    //     this.setState({
    //         cinemaList: newlist
    //     })
    //     // this.setState是异步，下面log的list可能是老数据
    //     console.log(this.state.cinemaList)
    // }
}



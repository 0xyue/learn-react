import React, { Component } from 'react'
import YSwiper from './swiper/swiper'
import YSwiperItem from './swiper/swiperItem'

export default class App extends Component {

    state = {
        list: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["111", "222", "333"]
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <YSwiper>
                    {
                        this.state.list.map(item =>
                            <YSwiperItem key={item}>{item}</YSwiperItem>
                        )
                    }

                </YSwiper>
            </div>
        )
    }
}

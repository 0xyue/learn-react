import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Navigation, Pagination]);

// swiper 英文：https://swiperjs.com/get-started
// swiper 中文：https://swiperjs.com/react
// npm i swiper

export default class YSwiper extends Component {

    render() {
        return (
            <div>
                <div className="swiper" style={{ height: "200px", background: "yellow" }}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>

                    {/* 如果需要分页器  */}
                    <div className="swiper-pagination"></div>

                    {/* 如果需要导航按钮 */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/* 如果需要滚动条 */}
                    <div className="swiper-scrollbar"></div>

                </div>
            </div>
        )
    }

    componentDidMount() {
        new Swiper(".swiper", {
            // modules: [Navigation, Pagination],
            direction: 'horizontal', // 水平垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
}

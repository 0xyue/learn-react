import { Route, Redirect, Switch } from 'react-router-dom'
import { Swiper, Toast, Tabs } from 'antd-mobile'
import Comingsoon from './films/Comingsoon'
import Nowplaying from './films/Nowplaying'
import NotFound from './NotFound'
import style from './css/Film.module.css'
import React from 'react'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
        <div
            className={style.content}
            style={{ background: color }}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
            }}
        >
            {index + 1}
        </div>
    </Swiper.Item>
))

const tabItems = [
    { key: '/films/nowplaying', title: '正在热映' },
    { key: '/films/comingsoon', title: '即将上映' },
]

const Films = (props) => {

    return (
        <div className={style.film}>
            <div style={{ position: "sticky", top: 0, background: "white" }} >
                <Swiper autoplay={true} loop={true}>{items}</Swiper>
                <Tabs
                    activeKey={props.location.pathname}
                    onChange={key => {
                        props.history.push(key)
                    }}
                >
                    {tabItems.map(item => (
                        <Tabs.Tab title={item.title} key={item.key} />
                    ))}
                </Tabs>
            </div>

            <Switch>
                <Route path="/films/nowplaying" component={Nowplaying} />
                <Route path="/films/comingsoon" component={Comingsoon} />

                <Redirect from="/films" to="/films/nowplaying" exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    )

}

export default Films
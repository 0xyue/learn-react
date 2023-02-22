
import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import store from './mbox/store'
import MRouter from './router/IndexRouter'
import './views/css/App.css'
import { autorun } from 'mobx'

export default class App extends Component {
    state = {
        isShow: false
    }

    componentDidMount() {
        console.log("App-store.isTabbarShow:", store.isTabbarShow)
        autorun(() => {
            this.setState({
                isShow: store.isTabbarShow
            })
        })
    }

    render() {
        return (
            <div>
                <MRouter>
                    {
                        this.state.isShow && <Tabbar />
                    }
                </MRouter>

            </div>
        )
    }
}
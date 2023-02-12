
import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './views/css/App.css'
import store from './redux/store'

export default class App extends Component {

    state = {
        isShow: store.getState().show
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log("app 中订阅", store.getState())
            this.setState({
                isShow: store.getState().show
            })
        })
    }

    render() {
        return (
            <div>
                <MRouter>
                    {this.isShow && <Tabbar />}
                </MRouter>

            </div>
        )
    }
}
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
    state = {
        currentIndex: 0
    }
    render() {
        return (
            <div>
                <Navbar event={() => { this.navbarEvent() }} />
                {this.which()}
                <Tabbar event={(index) => { this.tabbarEvent(index) }} />
            </div>
        )
    }


    which() {
        switch (this.state.currentIndex) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }

    navbarEvent() {
        console.log("navbarEvent")
        this.setState({
            currentIndex: 2
        })
    }

    tabbarEvent(index) {
        console.log("切换", index)
        this.setState({
            currentIndex: index
        })
    }
}

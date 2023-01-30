import React, { Component } from 'react'


class NavbarChild extends Component {
    render() {
        return (
            <div>NavbarChild</div>
        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar
                <NavbarChild></NavbarChild>
            </div>
        )
    }
}
function Swiper() {
    return <div>Swiper</div>

}

const Tabber = () => <div>Tabber</div>



export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabber></Tabber>
            </div>
        )
    }
}

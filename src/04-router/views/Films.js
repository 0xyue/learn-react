import React, { Component } from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import Comingsoon from './films/Comingsoon'
import Nowplaying from './films/Nowplaying'
import NotFound from './NotFound'

export default class Films extends Component {
    render() {
        return (
            <div>
                <div style={{ height: "200px", background: "yellow" }}>大轮播</div>
                <ul>
                    <li><NavLink to="/films/nowplaying">正在热映</NavLink></li>
                    <li><NavLink to="/films/comingsoon">即将上映</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/films/nowplaying" component={Nowplaying} />
                    <Route path="/films/comingsoon" component={Comingsoon} />

                    <Redirect from="/films" to="/films/nowplaying" exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

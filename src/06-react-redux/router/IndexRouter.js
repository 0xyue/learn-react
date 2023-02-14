import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Detail from '../views/Detail'
import Films from '../views/Films'
import NotFound from '../views/NotFound'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

function isAuth() {
    console.log("token:", localStorage.getItem("token"))
    return localStorage.getItem("token")
}

export default class MRouter extends Component {
    render() {
        return (
            <div>
                <Router>

                    {/* switch 匹配到一个路径后，后面就不执行了 */}
                    <Switch>
                        <Route path="/films" component={Films} />
                        <Route path="/cinemas" component={Cinemas} exact />
                        <Route path="/cinemas/search" component={Search} />
                        {/* <Route path="/center" component={Center} /> */}
                        {/* 路由拦截 */}
                        {/* <Route path="/center" render={(props) => {
                            return isAuth() ? <Center {...props} /> : <Redirect to="/login" />
                        }} /> */}
                        <Route path="/center" render={(props) => {
                            return isAuth() ? <Center /> : <Redirect to="/login" />
                        }} />

                        <Route path="/login" component={Login} />
                        <Route path="/city" component={City} />
                        {/* 动态路由 */}
                        <Route path="/detail/:filmId" component={Detail} />
                        {/* query state传参 */}
                        {/* <Route path="/detail" component={Detail} /> */}

                        {/* 重定向,  不加exact的话是模糊查询，没有switch的情况下，刷新页面一定会到to页面 */}
                        <Redirect from='/' to="/films" exact />

                        <Route component={NotFound} />

                    </Switch>
                    {this.props.children}
                </Router>
            </div>
        )
    }
}


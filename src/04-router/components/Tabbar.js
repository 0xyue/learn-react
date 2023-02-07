import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
    return (
        <div>
            <ul>
                <li>
                    {/* <a href="#/films">电影</a> */}
                    <NavLink to="/films" activeClassName="active">films</NavLink>
                </li>
                <li>
                    {/* <a href="#/cinemas">影院</a> */}
                    <NavLink to="/cinemas" activeClassName="active">cinemas</NavLink>
                </li>
                <li>
                    {/* <a href="#/center">我的</a> */}
                    <NavLink to="/center" activeClassName="active">center</NavLink>
                </li>
            </ul>
        </div>
    )
}

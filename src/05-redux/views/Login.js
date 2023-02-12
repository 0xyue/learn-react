import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login(props) {
    const history = useHistory()

    return (
        <div>
            <h1>登录页面</h1>
            <input type="text" />
            <button onClick={() => {
                localStorage.setItem("token", 1)
                console.log("登录页面", props)
                // props.history.push(`/center`)
                history.push(`/center`)
            }}>登录</button>
        </div>
    )
}

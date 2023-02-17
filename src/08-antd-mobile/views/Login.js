import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

function Login(props) {
    const history = useHistory()

    let { show, hide } = props
    useEffect(() => {
        console.log("Login-props", props)
        hide()
        return () => {
            show()
        }
    }, [])

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

const mapDispatchToProps = {
    show,
    hide
}

export default connect(null, mapDispatchToProps)(Login)
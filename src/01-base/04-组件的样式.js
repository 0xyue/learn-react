import React, { Component } from 'react'
import './css/01-index.css'  // 导入css模块， webpack把css做成内部样式插入页面

export default class App extends Component {
    render() {
        var myname = "0xyue"
        var sty = {
            background: "yellow",
            // 要使用驼峰写法，fontSize 而不是font-size
            fontSize: "30px"
        }
        return (
            <div>
                变量使用大括号{'{}'}
                <ul>
                    <li>
                        10+20 = {10 + 20}
                    </li>
                    <li>
                        myname = {myname}
                    </li>
                    <li>
                        三目运算(10{'>'}20?'aaa':'bbb') = {10 > 20 ? 'aaa' : 'bbb'}
                    </li>
                </ul>
                样式使用对象
                <ul>
                    <li>
                        <div style={sty}>黄色背景,30px</div>
                    </li>
                    <li>
                        <div style={{ background: "red", fontSize: "20px" }}>红色背景,20px</div>
                    </li>
                </ul>
                样式引入css文件 (class 要用className 避免混淆和警告)
                {
                    /*
                        注释：
                        react官方推荐行内组件，每一个组件都是一个独立的整体。
                    */
                }
                <ul>
                    <li>
                        <div className='active'>蓝色背景</div>
                    </li>
                </ul>
                for和class一样要改为htmlFor (点击用户名自动聚焦，可以输入)
                <ul>
                    <li>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id="username"></input>
                    </li>
                </ul>
            </div>
        )
    }
}

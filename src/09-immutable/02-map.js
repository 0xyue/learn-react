import React, { Component } from 'react'
import { Map } from 'immutable'
/*
    1. npm i immutable
    2. import {Map} from 'immutable'
*/

var obj = {
    username: "0xyue",
    age: 20
}

var oldImmutableObj = Map(obj)

var newImmutableObj = oldImmutableObj.set("username", "xiaoming")
console.log(oldImmutableObj, newImmutableObj)

// get获取值
console.log(oldImmutableObj.get("username"), newImmutableObj.get("username"))

// immutable 转换为普通对象
console.log(oldImmutableObj.toJS(), newImmutableObj.toJS())

// export default class App extends Component {
//     state = {
//         info: Map({
//             username: "0xyue",
//             age: 20
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.info.get('username')}--{this.state.info.get('age')}
//                 <button onClick={() => this.setState({ info: this.state.info.set('username', '小明').set('age', 88) })}>修改</button>
//             </div>
//         )
//     }
// }

export default class App extends Component {
    state = {
        info: {
            username: "0xyue",
            age: 20
        }
    }
    render() {
        return (
            <div>
                {this.state.info.username}--{this.state.info.age}
                <button onClick={() => {
                    var oldImmutableState = Map(this.state)
                    var newImmutableState = oldImmutableState.set("username", "xiaoming").set("age", 88)
                    this.setState({
                        info: newImmutableState.toJS()
                    })
                }}>修改</button>
            </div>
        )
    }
}


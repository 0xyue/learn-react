import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// 对于普通类型数据的监听
var observableNumber = observable.box(10)
var observableName = observable.box('xiaoming')

autorun(() => {
    console.log("observableNumber:", observableNumber.get())
})

autorun(() => {
    console.log("observableName:", observableName.get())
})

setTimeout(() => {
    observableNumber.set(20)
}, 1000)

setTimeout(() => {
    observableName.set('daming')
}, 2000)

var myobj = observable.map({
    name: "0xyue",
    age: 20
})

autorun(() => {
    console.log("myobj.name:", myobj.get('name'))
})

setTimeout(() => {
    myobj.set('name', '0xyue2')
}, 3000)


var myobj2 = observable({
    name: "0xyue",
    age: 20
})

autorun(() => {
    console.log("myobj2.name:", myobj2.name)
})

setTimeout(() => {
    myobj2.name = '0xyue2'
}, 4000)

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

var bus = {
    list: [],
    // 订阅
    subscribe(callback) {
        //console.log(callback)
        this.list.push(callback)
    },
    // 发布
    publish(value) {
        this.list.forEach(callback => {
            callback && callback(value)
        })
    }
}

// 订阅者
bus.subscribe((value) => {
    console.log("订阅者1", value)
})

bus.subscribe((value) => {
    console.log("订阅者2", value)
})

// 发布者
// bus.publish()

setTimeout(() => {
    bus.publish("发布内容1")
}, 0)

setTimeout(() => {
    bus.publish("发布内容2")
}, 1000)


// Redux 汲取订阅发布去设计的
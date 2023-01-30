import React, { Component } from 'react'

export default class App extends Component {
    a = 100

    render() {
        return (
            <div>
                <input />
                <button onClick={() => { console.log("click1", "如果处理逻辑过多，不推荐这种写法", "this.a可以访问到a,a=", this.a) }}>add1</button>
                {/* 切记不要加小括号 */}
                <button onClick={this.handleClick2.bind(this)}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={() => { this.handleClick4() }}>add4</button>
            </div>
        )
    }

    handleClick2() { console.log("click2", "不推荐这种写法,还需要bind绑定", this.a) }

    handleClick3 = () => { console.log("click3", "比较推荐", this.a) }

    handleClick4 = () => { console.log("click4", "非常推荐，方便传参", this.a) }
}


/*
    call,改变this指向，自动执行函数
    apply,改变this指向，自动执行函数
    bind,改变this指向，需要手动加（）执行函数
*/

var obj1 = {
    name: "obj1",
    getName() {
        console.log(this.name)
    }
}
var obj2 = {
    name: "obj2",
    getName() {
        console.log(this.name)
    }
}

obj1.getName()
obj2.getName()
console.log("使用call后")
obj1.getName.call(obj2)
console.log("使用apply后")
obj1.getName.apply(obj2)
console.log("使用bind后")
obj1.getName.bind(obj2)()

import React from 'react'

export default function App() {
    return (
        <div>App</div>
    )
}


// 引用复制（浅拷贝）
var obj = {
    name: "x1"
}
var obj2 = obj
obj2.name = "x2"
console.log("引用复制（浅拷贝）", obj, obj2)

// 比浅复制多复制一层
var myobj = {
    name: "x1",
    arr: [1, 2, 3]
}
var myobj2 = { ...myobj }
myobj2.name = "x2"
myobj2.arr.splice(1, 1)
console.log("比浅复制多复制一层", myobj, myobj2)

// json-parse json-stringify 可以深拷贝，但是遇到undefined字段会被自动删除
var jsonObj = {
    name: "x1",
    arr: [1, 2, 3],
    address: undefined
}
var jsonObj2 = JSON.parse(JSON.stringify(jsonObj))
jsonObj2.name = "x2"
jsonObj2.arr.splice(1, 1)
console.log("json-parse json-stringify", jsonObj, jsonObj2)

// 深拷贝 
// 一层层复制，性能不好，占用内存



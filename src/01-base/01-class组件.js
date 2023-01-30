// class Test {
//     constructor() {
//         this.a = 1
//     }

//     testa() {
//         console.log("testa")
//     }
// }

// class ChildTest extends Test {
//     testb() {
//         console.log("testb")
//     }
// }

// var obj = new Test()
// obj.testa()
// console.log(obj.a)
// var obj2 = new ChildTest()
// obj2.testb()

import React from "react";
class App extends React.Component {
    render() {
        return (
            <section>
                <div>hello react Component</div>
                <ul>
                    <li>111</li>
                    <li>222</li>
                </ul>
            </section>
        )
    }
}

export default App
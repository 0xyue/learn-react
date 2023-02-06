import React, { useState } from 'react'

export default function App() {

    const [count, setcount] = useState(0)
    // useState 记忆函数，记住状态值
    var count2 = 0
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                count2++
            }}>add1</button>
            count:{count}-{count2}
        </div>
    )
}

import React, { useRef, useState } from 'react'

export default function App() {

    const [count, setcount] = useState(0)
    // useState 记忆函数，记住状态值
    var count2 = useRef(0)
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                count2.current++
            }}>add1</button>
            count:{count}-{count2.current}
        </div>
    )
}

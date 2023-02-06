import React, { useState, useEffect } from 'react'

export default function App() {
    const [name, setName] = useState("xiaoming")

    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    // 第一次执行，后面name更新也会执行

    return (
        <div>
            {name}
            <button onClick={() => { setName("apple") }}>click</button>
        </div>
    )
}

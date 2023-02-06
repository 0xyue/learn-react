import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState("0xyue")
    const [age, setAge] = useState(20)

    return (
        <div>
            <button onClick={() => {
                setName("xiaoming")
                setAge(30)
            }}>click</button>
            {name},{age}
        </div>
    )
}

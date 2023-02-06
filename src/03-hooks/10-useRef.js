import React, { useState, useRef } from 'react'

export default function App() {

    const mytext = useRef(null)
    const [list, setList] = useState([])

    const handleAdd = () => {
        console.log(mytext.current.value, list)
        setList([...list, mytext.current.value])
    }

    const handleDel = (index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input ref={mytext} />
            <button onClick={handleAdd}>add</button>
            <br />
            <ul>
                {
                    list.map((item, index) =>
                        <li key={index}>
                            {item}
                            <button onClick={() => { handleDel(index) }}>del</button>
                        </li>

                    )
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}

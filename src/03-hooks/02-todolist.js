import React, { useState } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState([])


    const handleInput = (evt) => {
        setText(evt.target.value)
    }

    const handleAdd = () => {
        console.log(text, list)
        setList([...list, text])
        setText("")
    }

    const handleDel = (index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input onChange={handleInput} value={text} />
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

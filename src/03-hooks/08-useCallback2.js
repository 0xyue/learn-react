import React, { useCallback, useState } from 'react'

export default function App() {
    const [myname, setMyname] = useState("")
    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const handleNameInput = useCallback((evt) => {
        setMyname(evt.target.value)
    }, [])

    const handNameToUpperCase = useCallback(() => {
        setMyname(myname.substring(0, 1).toUpperCase() + myname.substring(1))
    }, [myname])

    const handleTextInput = useCallback((evt) => {
        setText(evt.target.value)
    }, [])

    const handleAdd = useCallback(() => {
        console.log(text, list)
        setList([...list, text])
        setText("")
    }, [text])

    const handleDel = useCallback((index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }, [list])

    return (
        <div>
            <input onChange={handleNameInput} />
            <button onClick={handNameToUpperCase}> NameToUpperCase</button>
            {myname}
            <br />
            <input onChange={handleTextInput} value={text} />
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

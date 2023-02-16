import React from 'react'
import { useEffect } from 'react'

function NotFound(props) {

    let { text, yueLog } = props
    useEffect(() => {
        console.log("Not Found-props", props)
        yueLog(text)
    }, [props])

    return (
        <div>
            404 NotFound
            <br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        text: "yue not found"
    }
}

const mapDispatchToProps = {
    yueLog(text) {
        console.log("Not Found-mapDispatchToProps-text:", text)
    }

}

function yueConnect(sp, dp) {
    var value = sp()
    return (MyComponent) => {
        return (props) => {
            return (
                <div style={{ color: "red" }}>
                    <MyComponent {...props} {...value} {...dp} />
                </div>
            )
        }
    }
}

export default yueConnect(mapStateToProps, mapDispatchToProps)(NotFound)
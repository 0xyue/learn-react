import React, { Component } from 'react'


class Box extends Component {
    render() {
        console.log("Box render")
        return (
            <div style={{
                width: "100px",
                height: "100px",
                border: this.props.current === this.props.index ? "3px solid red" : "1px solid gray",
                margin: "10px",
                float: "left"
            }}>
                index:{this.props.index}
                <br />
                current:{this.props.current}
            </div>
        )
    }

    // 性能优化
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true
        }
        return false
    }
}

export default class App extends Component {
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current: 0
    }
    render() {
        return (
            <div>
                <input type="number" onChange={(evt) => {
                    var evt_num = Number(evt.target.value)
                    console.log(evt_num)
                    this.setState({
                        current: evt_num
                    })
                }} value={this.state.current} />
                <div style={{ overflow: "hidden" }}>
                    {
                        this.state.list.map((item, index) =>
                            <Box key={item} current={this.state.current} index={index} />
                        )
                    }
                </div>
            </div>
        )
    }
}

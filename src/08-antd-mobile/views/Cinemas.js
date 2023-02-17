import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { NavBar, Space } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas(props) {

    let { city, list, getCinemaListAction } = props

    useEffect(() => {
        if (list.length === 0) {
            getCinemaListAction()
        }
    }, [list])


    const left = (
        <div
            style={{ fontSize: 16 }}
            onClick={() => {
                props.history.push(`/city`)
            }}
        >
            <Space style={{ '--gap': '16px' }}>
                {city}
            </Space>
        </div>
    )


    const right = (
        <div
            style={{ fontSize: 16 }}
            onClick={() => {
                props.history.push(`/cinemas/search`)
            }}
        >
            <Space style={{ '--gap': '16px' }}>
                <SearchOutline />
            </Space>
        </div>
    )

    return (
        <div>
            {/* <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    props.history.push(`/city`)
                }} style={{ float: "left" }}>{city}</div>
                <div onClick={() => {
                    props.history.push(`/cinemas/search`)
                }} style={{ float: "right" }}>搜索</div>
            </div> */}
            <NavBar right={right} left={left} backArrow={false}>
                影院
            </NavBar>
            {
                list.map((item) => {
                    return (
                        <dl key={item.cinemaId} style={{ padding: "10px" }}>
                            <dt>{item.name}</dt>
                            <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
                        </dl>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.CityReducer.city,
        list: state.CinemaListReducer.list
    }
}

const mapDispatchToProps = {
    getCinemaListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
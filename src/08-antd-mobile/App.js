
import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './views/css/App.css'
import { connect } from 'react-redux'
// import { Button } from 'antd-mobile'

class App extends Component {


    render() {
        return (
            <div>
                <MRouter>
                    {/* <Button >antd-mobile</Button> */}
                    {this.props.isShow && <Tabbar />}
                </MRouter>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isShow: state.TabbarReducer.show
    }
}

export default connect(mapStateToProps)(App)
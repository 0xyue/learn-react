
import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './views/css/App.css'
import { connect } from 'react-redux'

class App extends Component {


    render() {
        return (
            <div>
                <MRouter>
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
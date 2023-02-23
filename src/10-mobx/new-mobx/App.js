
import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './views/css/App.css'
// import { autorun } from 'mobx'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
    // state = {
    //     isShow: false
    // }

    componentDidMount() {
        console.log("App-store.isTabbarShow:", this.props.store.isTabbarShow)
        // autorun(() => {
        //     this.setState({
        //         isShow: store.isTabbarShow
        //     })
        // })
    }

    render() {
        return (
            <div>
                <MRouter>
                    {
                        this.props.store.isTabbarShow && <Tabbar />
                    }
                </MRouter>

            </div>
        )
    }
}

export default App
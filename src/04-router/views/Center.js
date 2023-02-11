// import React, { Component } from 'react'

// export default class Center extends Component {
//     render() {
//         return (
//             <div>
//                 Center
//                 <br />
//                 <button onClick={() => {
//                     console.log(this.props)
//                 }}>电影订单</button>
//             </div>
//         )
//     }
// }

import React from 'react'
import { withRouter } from 'react-router-dom'

function Center(props) {
    return (
        <div>
            Center
            <br />
            <button onClick={() => {
                console.log(props)
            }}>电影订单</button>
        </div>
    )
}

export default withRouter(Center)

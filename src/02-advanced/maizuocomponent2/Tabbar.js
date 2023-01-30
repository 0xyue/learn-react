// import React, { Component } from 'react'
import React from 'react';


// export default class Tabbar extends Component {

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.state.list.map((item, index) =>
//                             <li key={item.id}
//                                 className={this.props.currentIndex === index ? 'active' : ''}
//                                 onClick={() => this.handleClick(index)}>
//                                 {item.text}
//                             </li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }

//     handleClick(index) {
//         this.props.event(index)
//     }
// }

//改成函数式组件

const Tabbar = (props) => {
    return < div >
        <ul>
            {
                props.list.map((item, index) =>
                    <li key={item.id}
                        className={props.currentIndex === index ? 'active' : ''}
                        onClick={() => props.event(index)}>
                        {item.text}
                    </li>
                )
            }
        </ul>
    </div >


}

export default Tabbar
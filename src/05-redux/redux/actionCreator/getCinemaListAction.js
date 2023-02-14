import axios from "axios"

// redux-thunk风格
// function getCinemaListAction() {

//     return (dispatch) => {
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934',
//             method: 'get',
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         })
//             .then(res => {
//                 console.log("getCinemaListAction", res.data.data.cinemas)
//                 dispatch({
//                     type: "change-list",
//                     payload: res.data.data.cinemas
//                 })
//             })
//             .catch(err => { console.log(err) })
//     }
// }

// redux-promise风格
async function getCinemaListAction() {
    try {
        const res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        console.log("getCinemaListAction", res.data.data.cinemas)
        return {
            type: "change-list",
            payload: res.data.data.cinemas
        }

    } catch (err) {
        console.log(err)
    }

}

export default getCinemaListAction
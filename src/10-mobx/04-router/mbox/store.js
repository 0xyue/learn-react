import { observable, configure, action } from "mobx"
configure({
    enforceActions: "always"
})

// const store = observable({
//     isTabbarShow: true,
//     list: [],
//     city: "北京",
//     tabbarShow() {
//         this.isTabbarShow = true
//     },
//     tabbarHide() {
//         this.isTabbarShow = false
//     }

// }, {
//     tabbarShow: action,
//     tabbarHide: action
// })

class Store {
    @observable isTabbarShow = true
    @observable list = []
    @observable city = "北京"
    @action tabbarShow() {
        this.isTabbarShow = true
    }
    @action tabbarHide() {
        this.isTabbarShow = false
    }
}

const store = new Store()

export default store
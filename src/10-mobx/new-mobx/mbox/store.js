import { makeAutoObservable, configure, runInAction } from "mobx"
import axios from "axios"


configure({
    enforceActions: "always"
})



class Store {
    isTabbarShow = true
    list = []
    city = "北京"
    constructor() {
        makeAutoObservable(this)
    }

    tabbarShow() {
        this.isTabbarShow = true
    }
    tabbarHide() {
        this.isTabbarShow = false
    }
    async getList() {
        var list = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8030934',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
            .then(res => {
                console.log("store-getList:", res.data.data.cinemas)
                return res.data.data.cinemas
            })

        runInAction(() => {
            this.list = list
        })
    }
}

const store = new Store()

export default store
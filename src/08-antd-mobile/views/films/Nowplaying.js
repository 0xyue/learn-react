import React, { useEffect, useState } from 'react'
import { Image, List, InfiniteScroll } from 'antd-mobile'
import axios from 'axios'

let pageNum = 1

async function getFilms() {
    console.log("getFilms-pageNum:", pageNum)
    const res = await axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum}&pageSize=10&type=1&k=6369301`,
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    pageNum++
    return res.data.data.films
}

export default function Nowplaying(props) {
    const [list, setlist] = useState([])
    const [hasMore, setHasMore] = useState(true)

    async function loadMore() {
        const append = await getFilms()
        console.log("loadMore", append)
        setlist(val => [...val, ...append])
        setHasMore(append.length > 0)



    }

    useEffect(() => {

        return () => {
            pageNum = 1
        }
    }, [])


    return (
        <div>
            <List>
                {list.map(item =>
                    <List.Item
                        clickable={true}
                        key={item.filmId}
                        onClick={() => {
                            props.history.push(`/detail/${item.filmId}`)
                        }}
                        prefix={
                            <Image
                                src={item.poster}
                                // style={{ borderRadius: 20 }}
                                // fit='cover'
                                width={80}
                            // height={40}
                            />
                        }
                        description={
                            <div>
                                <div>观众评分:{item.grade}</div>
                                <div>主演:{item.actors ? item.actors.map((actors, index) => <span key={index}>{actors.name} </span>) : "无"}</div>
                                <div>{item.nation} | {item.runtime}分钟</div>
                            </div>

                        }
                    >
                        {item.name}
                    </List.Item>
                )}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}


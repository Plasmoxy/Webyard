import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_ITEM } from '../Meta'
import { ShopItem } from '../model/ApiModel'
import ShopItemDisplay from '../components/ShopItemDisplay'

export default function() {    

    const [displayItems, setDisplayItems] = useState<ShopItem[]>([])

    async function fetchData() {
        const resp = await axios.post(API_ITEM + "all")
        console.log("Response:", resp)
        if (resp.status === 200) {
            setDisplayItems(resp.data as ShopItem[])
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return <div className="shop">
        <h1>helo now we buy persons in 1830</h1>
        {displayItems.map(i => 
            <ShopItemDisplay key={i.name} item={i} />
        )}
    </div>
}
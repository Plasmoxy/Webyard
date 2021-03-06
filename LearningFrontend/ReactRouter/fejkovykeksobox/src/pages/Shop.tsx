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
        const tm = setTimeout(fetchData, 3000)
        return () => clearTimeout(tm)
    }, [])

    return <div className="shop">
        {displayItems.length > 0 ?
            displayItems.map(i => 
                <ShopItemDisplay key={i.name} item={i} />
            )
        : <span style={{color: "red"}}>
            "Loadong wit fake delay xddd wait.........."
        </span>
        }
    </div>
}
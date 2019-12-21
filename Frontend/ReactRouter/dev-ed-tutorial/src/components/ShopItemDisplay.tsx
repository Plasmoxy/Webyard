import React from 'react'
import { ShopItem } from '../model/ApiModel'
import { API_STATIC_IMAGE } from '../Meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export type Props = {
    item: ShopItem
}

export default function({item}: Props) {

    return <div className="shopitem-display">
        <LazyLoadImage
            effect="opacity"
            alt="item"
            src={API_STATIC_IMAGE(item.imageId)}/>

        <div>
            <h1>{item.title}</h1>
            <p>
                {item.description}
            </p>
            <p style={{display: "flex", alignItems: "center"}}>
                Cena:&ensp;<span style={{color: "cyan"}}>{item.price}</span>
                <FontAwesomeIcon icon={faCoffee} color="cyan" />
            </p>
            Na sklade: {item.amount} ks
        </div>
    </div>
}
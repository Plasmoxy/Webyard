import React, { useContext, useMemo } from 'react'
import { AppContext } from './AppContext'


export function SubscriberCount() {

    const {subscribers} = useContext(AppContext)

    return useMemo(() => <>
        {console.log("SubscriberCount render")}
        <div className="box">
            Subscribers: {subscribers}
        </div>
    </>, [subscribers])
}
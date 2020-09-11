import React from 'react'
import { observer, useLocalStore } from 'mobx-react-lite'

export const Mobx = observer((props) => {

    const store = useLocalStore(() => ({
        count: 0,
        increase: () => {
            store.count++
        }
    }))

    return <div>
        <button onClick={store.increase}>State: {store.count}</button>
    </div>
})
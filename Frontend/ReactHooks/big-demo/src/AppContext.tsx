import React, { createContext, Props, useState, SetStateAction, Dispatch } from "react"

interface ContextState {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>

    subscribers: number,
    setSubscribers: Dispatch<SetStateAction<number>>
}

export const AppContext = createContext<ContextState>({} as any)

export const AppProvider = (props: Props<any>) => {
    const [username, setUsername] = useState("")
    const [subscribers, setSubscribers] = useState(0)

    return <AppContext.Provider value={{
        username, setUsername, subscribers, setSubscribers
    }}>
        {props.children}
    </AppContext.Provider>
}
    
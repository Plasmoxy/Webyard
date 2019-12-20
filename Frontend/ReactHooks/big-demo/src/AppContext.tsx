import React, { createContext, Props, useState, SetStateAction, Dispatch } from "react"

class ContextState {
    public username = ""
    public subscribers = 0
}

type ContextValue = {
    state: ContextState,
    setState: Dispatch<SetStateAction<ContextState>>
}

export const AppContext = createContext<ContextValue>({} as any)

export const AppProvider = (props: Props<any>) => {
    const [state, setState] = useState(new ContextState())

    return <AppContext.Provider value={{state, setState}}>
        {props.children}
    </AppContext.Provider>
}
    
import { AnyAction } from "redux"

export const setAuth = (username: string, password: string) => ({
    type: 'SET_AUTH',
    username, password
})

export default (s = {
    username: "",
    password: ""
}, action: AnyAction) => {
    switch(action.type) {
        case 'SET_AUTH': return {
            ...s,
            username: action.username,
            password: action.password
        }
    }
    return s
}
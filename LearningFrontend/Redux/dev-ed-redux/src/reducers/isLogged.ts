import { AnyAction } from "redux"

export default (s = false, action: AnyAction) => {
    switch(action.type) {
        case 'SIGN_IN': return true
        case 'SIGN_OUT': return false
    }
    return s
}
import counter from './counter'
import isLogged from './isLogged'
import root from './root'
import { combineReducers } from 'redux'

export default combineReducers({
    counter, isLogged, root
})
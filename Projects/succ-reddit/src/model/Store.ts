import { combineReducers, configureStore } from "@reduxjs/toolkit"
import AppReducer from './AppReducer'

export const Store = configureStore({
  reducer: combineReducers({
    app: AppReducer
  })
})

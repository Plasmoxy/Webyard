import { combineReducers, configureStore } from "@reduxjs/toolkit"
import AppReducer, { AppState } from './AppReducer'
import MemesReducer from './MemesReducer'



const rootReducer = combineReducers({
  app: AppReducer,
  memes: MemesReducer
})

export const Store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
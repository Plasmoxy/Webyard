import {
  AnyAction,
  combineReducers,
  configureStore,
  createAction,
  createReducer
} from "@reduxjs/toolkit"
import { shallowEqual, useSelector } from "react-redux"
import AppReducer, { AppState } from "./AppReducer"
import MemesReducer, { MemesState } from "./MemesReducer"

export type RootState = {
  app: AppState
  memes: MemesState
}

const combined = combineReducers<RootState>({
  app: AppReducer,
  memes: MemesReducer
})

const kys = createAction("kys")

// bypass init state
const crossSlice = createReducer({} as RootState, {
  [kys.type]: (s, a) => {
    s.app.count += 20
  }
})

const rootReducer = (state = {} as RootState, action: AnyAction) =>
  crossSlice(combined(state, action), action)

export const Store = configureStore({
  reducer: rootReducer
})

export function useShallowSelector<T, Q>(f: (t: T) => Q) {
  return useSelector<T, Q>(f, shallowEqual)
}

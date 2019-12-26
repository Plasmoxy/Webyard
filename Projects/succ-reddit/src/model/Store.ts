import { combineReducers, configureStore, CombinedState, AnyAction, Reducer, CaseReducer, createAction, createReducer } from "@reduxjs/toolkit"
import AppReducer, { AppState } from './AppReducer'
import MemesReducer, { MemesState } from './MemesReducer'
import reduceReducers from 'reduce-reducers'

type RootState = {
  app: AppState,
  memes: MemesState
}

const combined = combineReducers<RootState>({
  app: AppReducer,
  memes: MemesReducer
})


const kys = createAction('kys')

// bypass init state
const crossSlice = createReducer({} as RootState, {

  [kys.type]: (s, a) => {
    s.app.count += 20
  }

})

const rootReducer = (state: RootState = {} as RootState, action: AnyAction) =>
  crossSlice(combined(state, action), action)

export const Store = configureStore({
  reducer: rootReducer
})
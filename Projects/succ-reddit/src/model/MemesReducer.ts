import { Action, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { fetchRandomMeme, Meme } from "../api/MemeApi"
import { RootState } from "./Store"

export const MEME_HISTORY_SIZE = 3

export type MemesState = {
  subreddit: string
  currentMemes: Meme[]
  currentIndex: number
}

export const memesReducerInit: MemesState = {
  currentMemes: [],
  subreddit: "dankmemes",
  currentIndex: 0
}

const memesSlice = createSlice({
  name: "memes",
  initialState: memesReducerInit,

  reducers: {
    clearMemes(s, a: AnyAction) {
      s.currentMemes.length = 0
    },

    addMeme(s, a: PayloadAction<Meme>) {
      
    },

    historyBack(s, a: AnyAction) {
      
    },

    increaseIndex(s, a: AnyAction) {
      
    }
  }
})

export function historyForward(): ThunkAction<void, RootState, null, Action> {
  return async (dispatch, getState) => {
    console.log("historyForward thunk")
    const { currentIndex, currentMemes } = getState().memes

    
  }
}

export function fetchMeme(): ThunkAction<void, RootState, null, Action> {
  return async (dispatch, getState) => {
    console.log("fetchMeme thunk")
    dispatch(addMeme(await fetchRandomMeme()))
    return false
  }
}

export const {
  addMeme,
  historyBack,
  clearMemes
} = memesSlice.actions

export default memesSlice.reducer

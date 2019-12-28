import { Action, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { fetchRandomMeme, Meme } from "../api/MemeApi"
import { RootState } from "./Store"
import { increaseMemesRead } from "./AppReducer"

export const MEME_HISTORY_SIZE = 10

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

    pushMeme(s, a: PayloadAction<Meme>) {
      s.currentMemes.push(a.payload)
    },

    shiftMemes(s, a: AnyAction) {
      s.currentMemes.shift()
    },

    historyBack(s, a: AnyAction) {
      if (s.currentIndex > 0) {
        s.currentIndex--
      }
    },

    increaseIndex(s, a: AnyAction) {
      if (s.currentIndex < MEME_HISTORY_SIZE-1) {
        s.currentIndex++
      }
    }
  }
})

export function historyForward(): ThunkAction<void, RootState, null, Action> {
  return async (dispatch, getState) => {
    console.log("historyForward thunk")
    const { currentIndex, currentMemes } = getState().memes

    if (currentIndex < MEME_HISTORY_SIZE-1) {
      dispatch(memesSlice.actions.increaseIndex())
    } else {
      dispatch(memesSlice.actions.shiftMemes())
    }

    // if the array needs expanding (index is rn on last meme)
    if (currentIndex === currentMemes.length - 1) {
      await dispatch(fetchMeme())
    }
  }
}

// shift before fetching meme so you make space for it
export function fetchMeme(): ThunkAction<Promise<boolean>, RootState, null, Action> {
  return async (dispatch, getState) => {
    console.log("fetchMeme thunk")
    dispatch(pushMeme(await fetchRandomMeme()))
    dispatch(increaseMemesRead())
    return true
  }
}

export const {
  pushMeme,
  shiftMemes,
  historyBack,
  clearMemes
} = memesSlice.actions

export default memesSlice.reducer

import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Meme } from "../api/MemeApi"

export const MEME_HISTORY_SIZE = 5

export type MemesState = {
  subreddit: string
  currentMemes: Meme[]
  currentIndex: number
}

export const memesReducerInit: MemesState = {
  currentMemes: [],
  subreddit: "dankmemes",
  currentIndex: -1
}

const memesSlice = createSlice({
  name: "memes",
  initialState: memesReducerInit,

  reducers: {
    clearMemes(s, a: AnyAction) {
      s.currentMemes.length = 0
    },

    addMeme(s, a: PayloadAction<Meme>) {
      // add meme to memes array
      s.currentMemes.push(a.payload)
      
      // if exceeding the array length, shift it (remove first)
      if (s.currentMemes.length > MEME_HISTORY_SIZE) {
        s.currentMemes.shift()
      }
    },

    historyBack(s, a: AnyAction) {
      if (s.currentIndex > 0) s.currentIndex--
    },

    historyForward(s, a: AnyAction) {
      s.currentIndex++ // can go out of bounds, then accesing the array will return undefined and show loading
    }

  }
})

export const { addMeme, historyBack, historyForward, clearMemes } = memesSlice.actions
export default memesSlice.reducer

import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Meme } from "../api/MemeApi"

export const MEME_HISTORY_SIZE = 5

export type MemesState = {
  subreddit: string
  currentMemes: Meme[]
}

export const memesReducerInit: MemesState = {
  currentMemes: [],
  subreddit: "dankmemes"
}

const memesSlice = createSlice({
  name: "memes",
  initialState: memesReducerInit,

  reducers: {
    clearMemes(s, a: AnyAction) {
      s.currentMemes.length = 0
    },

    addMeme(s, a: PayloadAction<Meme>) {
      s.currentMemes.unshift(a.payload)
      if (s.currentMemes.length > MEME_HISTORY_SIZE) {
        s.currentMemes.length = MEME_HISTORY_SIZE
      }
    }
  }
})

export const { addMeme, clearMemes } = memesSlice.actions
export default memesSlice.reducer

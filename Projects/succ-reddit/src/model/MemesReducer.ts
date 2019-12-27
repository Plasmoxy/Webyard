import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Meme } from "../api/MemeApi"

export const MEME_HISTORY_SIZE = 10

export type MemesState = {
  currentMemes: Meme[]
}

export const memesReducerInit: MemesState = {
  currentMemes: []
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
      s.currentMemes.length = MEME_HISTORY_SIZE
    }
  }
})

export const { addMeme, clearMemes } = memesSlice.actions
export default memesSlice.reducer

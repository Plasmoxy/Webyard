import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { Meme } from "./MemeApi"

export type MemesState = {
  currentMemes: Meme[]
  targetUser: string
}

const init: MemesState = {
  currentMemes: [],
  targetUser: ""
}

const memesSlice = createSlice({
  name: "memes",
  initialState: init,

  reducers: {
    setMemes(s: MemesState, a: PayloadAction<Meme[]>) {
      s.currentMemes = a.payload
    }
  }
})

export const {setMemes} = memesSlice.actions
export default memesSlice.reducer
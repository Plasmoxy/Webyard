import { Meme } from "../api/MemeApi"
import { memesReducerInit, MemesState } from "./MemesReducer"

const mockMeme = (): Meme => ({
  postLink: Math.random().toString(),
  title: Math.random().toString(),
  url: Math.random().toString()
})

const mockInit = (): MemesState => ({ ...memesReducerInit })

describe("MemesReducer", () => {

})

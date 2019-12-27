import { Meme } from "../api/MemeApi"
import MemesReducer, { clearMemes, MemesState, memesReducerInit, addMeme, MEME_HISTORY_SIZE } from "./MemesReducer"

const mockMeme = (): Meme => ({
  postLink: Math.random().toString(),
  title:  Math.random().toString(),
  url:  Math.random().toString()
})

const mockInit = (): MemesState => ({...memesReducerInit})

describe("MemesReducer", () => {

  describe("clearMemes", () => {
    it("clears memes", () => {
      let s: MemesState = {
        currentMemes: [
          {} as Meme
        ]
      }
      s = MemesReducer(s, clearMemes())
      expect(s.currentMemes).toEqual([])
    })
  })


  describe("addMeme", () => {
    
    it("adds meme with payload", () => {
      const m = mockMeme()
      let s = memesReducerInit
      s = MemesReducer(s, addMeme(m))
      expect(s.currentMemes[0]).toEqual(m)
    })
  
    it('shifts memes when length of memes is at MEME_HISTORY_SIZE', () => {
      let s = mockInit()
      s.currentMemes = new Array(MEME_HISTORY_SIZE).fill(mockMeme())

      const beforeFirst = s.currentMemes[0]

      s = MemesReducer(s, addMeme(mockMeme()))
      
      expect(s.currentMemes[1]).toEqual(beforeFirst)
      expect(s.currentMemes.length).toEqual(MEME_HISTORY_SIZE)

    })
  })

})

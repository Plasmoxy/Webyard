import { faHeart, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"
import { fetchMemes, Meme } from "./MemeApi"
import MemeCard from "./MemeCard"

export default function MemeDisplay() {
  const [meme, setMeme] = useState<Meme | null>(null)
  const [memeSubreddit, setMemeSubreddit] = useState("dankmemes")
  let current = true

  async function nextMeme() {
    if (current) setMeme(null)
    try {
      // get 1 meme
      const memesResponse = await fetchMemes(memeSubreddit, 1)
      // apply it to UI state if current
      if (current) {
        const newMemes = memesResponse.memes
        setMeme(newMemes[0])
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    nextMeme()
    return () => {
      current = false
    }
  }, [memeSubreddit])

  return (
    <div className="meme-display">
      {meme ? (
        <>
          <MemeCard key={meme.postLink} meme={meme} />
          
          <div className="text-center">
            <ButtonGroup>
              <Button variant="outline-danger"><FontAwesomeIcon icon={faArrowCircleDown} /> Download</Button>
              <Button variant="outline-primary" onClick={nextMeme}>👏Next meme👏</Button>
            </ButtonGroup>
          </div>
        </>
      ) : (
        <div className="text-center">
          <ProgressBar animated now={100} />
          <h1>
            Loading your meme
            <FontAwesomeIcon icon={faHeart} color="#dc3545" />
            ...
          </h1>
        </div>
      )}
    </div>
  )
}

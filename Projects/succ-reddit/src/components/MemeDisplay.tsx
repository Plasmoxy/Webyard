import { faArrowCircleDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { memo, useEffect, useState } from "react"
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchRandomMeme, Meme } from "../api/MemeApi"
import { increaseMemesRead } from "../model/AppReducer"
import MemeCard from "./MemeCard"
import { RootState } from "../model/Store"
import { MemesState, addMeme } from "../model/MemesReducer"

function MemeDisplay() {

  const dispatch = useDispatch()
  const {subreddit, currentMemes} = useSelector<RootState, MemesState>(s => s.memes)

  const firstMeme: Meme|undefined = currentMemes[0]

  async function nextMeme() {
    try {
      // get 1 meme
      const meme = await fetchRandomMeme(subreddit)
      // apply it to UI state if current
      dispatch(addMeme(meme))

      // dispatch meme read to redux
      dispatch(increaseMemesRead())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    nextMeme()
  }, [])

  return (
    <div className="meme-display">
      {firstMeme ? (
        <>
          <MemeCard key={firstMeme.postLink} meme={firstMeme} />

          <div className="text-center">
            <ButtonGroup>
              <Button href={firstMeme.url} type="submit" variant="outline-danger">
                <FontAwesomeIcon icon={faArrowCircleDown} /> Open image
              </Button>

              <Button variant="outline-primary" onClick={nextMeme}>
                👏Next meme👏
              </Button>
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

export default MemeDisplay

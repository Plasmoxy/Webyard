import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons"
import {
  faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight,
  faCircle as fasCircle,
  faHeart
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import _ from "lodash"
import React, { memo, useEffect } from "react"
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchRandomMeme, Meme } from "../api/MemeApi"
import scss from "../index.scss"
import { increaseMemesRead } from "../model/AppReducer"
import { addMeme, historyBack, historyForward, MemesState, MEME_HISTORY_SIZE } from "../model/MemesReducer"
import { RootState } from "../model/Store"
import MemeCard from "./MemeCard"

export const CircleIcon = memo(({ solid }: { solid: boolean }) => (
  <FontAwesomeIcon icon={solid ? fasCircle : farCircle} color={scss.warning} />
))

// display in reversed order
export const MemeHistoryIndicator = memo((p: { i: number; length: number }) => (
  <>
    {_.times(p.length, idx => (
      <CircleIcon key={idx} solid={p.i == idx} />
    ))}
  </>
))

function MemeDisplay() {
  const dispatch = useDispatch()
  const { subreddit, currentMemes, currentIndex } = useSelector<RootState, MemesState>(
    s => s.memes
  )

  const firstMeme: Meme | undefined = currentMemes[currentIndex]

  async function handleNextMeme() {
    try {
      dispatch(historyForward())
      

    } catch (e) {
      dispatch(historyBack())
      console.log(e)
    }
  }

  // first render, add first meme
  useEffect(() => {
    handleNextMeme()
  }, [])

  return (
    <div className="meme-display">
      {firstMeme ? (
        <>
          <MemeCard key={firstMeme.postLink} meme={firstMeme} />
          <div className="text-center">
            <ButtonGroup>

              <Button variant="outline-primary" onClick={() => dispatch(historyBack())}>
                <FontAwesomeIcon icon={faArrowCircleLeft} color={scss.primary} />
              </Button>

              <Button variant="outline-primary" onClick={handleNextMeme}>
                <FontAwesomeIcon icon={faArrowCircleRight} color={scss.primary} />
              </Button>

            </ButtonGroup>
          </div>

          <div className="text-center my-1">
            <MemeHistoryIndicator length={currentMemes.length} i={currentIndex} />
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

export default memo(MemeDisplay)

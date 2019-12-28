import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons"
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCircle as fasCircle,
  faHeart
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import _ from "lodash"
import React, { memo, useEffect } from "react"
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Meme } from "../api/MemeApi"
import scss from "../index.scss"
import { fetchMeme, historyBack, historyForward } from "../model/MemesReducer"
import { RootState, Store } from "../model/Store"
import MemeCard from "./MemeCard"

export const CircleIcon = memo(({ solid }: { solid: boolean }) => (
  <FontAwesomeIcon icon={solid ? fasCircle : farCircle} color={scss.warning} />
))

// display in reversed order
export const MemeHistoryIndicator = memo((p: { i: number; length: number }) => (
  <>
    {_.times(p.length, idx => (
      <CircleIcon key={idx} solid={p.i === idx} />
    ))}
  </>
))

function MemeDisplay() {
  const dispatch = useDispatch<typeof Store.dispatch>()

  // hook this component to be dependent on change of
  // 1. memes array
  // 2. index ( for displaying the history )
  // everything else will be handled by reducers and thunks
  const currentMemes = useSelector<RootState, Meme[]>(s => s.memes.currentMemes)
  const currentIndex = useSelector<RootState, number>(s => s.memes.currentIndex)

  const meme: Meme | undefined = currentMemes[currentIndex]

  useEffect(() => {
    dispatch(fetchMeme())
  }, [dispatch])

  return (
    <div className="meme-display">
      {meme ? (
        <>
          <MemeCard key={meme.postLink} meme={meme} />
          <div className="text-center">
            <ButtonGroup>
              <Button
                variant="outline-primary"
                onClick={() => dispatch(historyBack())}
              >
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  color={scss.primary}
                />
              </Button>

              <Button
                variant="outline-primary"
                onClick={() => dispatch(historyForward())}
              >
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  color={scss.primary}
                />
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
      <div className="text-center my-1">
        Ind [{currentIndex}]:{" "}
        <MemeHistoryIndicator length={currentMemes.length} i={currentIndex} />
      </div>
    </div>
  )
}

export default memo(MemeDisplay)

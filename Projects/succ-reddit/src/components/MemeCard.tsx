import { faReddit } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { memo } from "react"
import { Card } from "react-bootstrap"
import { Meme } from "../api/MemeApi"
import { useDispatch } from "react-redux"
import { historyForward } from "../model/MemesReducer"

export type Props = {
  onClick?: (a: any) => any
  meme: Meme
}

function MemeCard({ meme, onClick }: Props) {
  const dispatch = useDispatch()
  return (
    <Card className="meme-card p-1 my-3" bg="dark" onClick={onClick}>
      <Card.Header as="h5" className="d-flex justify-content-between">
        {meme.title}
        <a target="_blank" rel="noopener noreferrer" href={meme.postLink}>
          <FontAwesomeIcon icon={faReddit}></FontAwesomeIcon>
        </a>
      </Card.Header>
      <Card.Img className="rounded" variant="top" src={meme.url} onClick={() => dispatch(historyForward())} />
    </Card>
  )
}

MemeCard.whyDidYouRender = true
export default memo(MemeCard)

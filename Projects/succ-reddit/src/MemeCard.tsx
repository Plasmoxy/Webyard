import { faReddit } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Card } from "react-bootstrap"
import { Meme } from "./MemeApi"

export type Props = {
  onClick?: (a: any) => any,
  meme: Meme
}

export default function MemeCard({ meme, onClick }: Props) {
  return (
    <Card className="meme-card p-1 my-3" bg="dark" onClick={onClick}>
      <Card.Header as="h3" className="d-flex justify-content-between">
        {meme.title}
        <a target="_blank" href={meme.postLink}>
          <FontAwesomeIcon icon={faReddit}></FontAwesomeIcon>
        </a>
      </Card.Header>
      <Card.Img className="rounded" variant="top" src={meme.url} />
    </Card>
  )
}

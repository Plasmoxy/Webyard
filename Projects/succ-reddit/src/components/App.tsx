import React from "react"
import Container from "react-bootstrap/Container"
import MemeDisplay from "./MemeDisplay"
import NavigationBar from "./NavigationBar"
import { useSelector } from "react-redux"
import { AppState } from "../model/AppReducer"

export default function App() {

  // select only one part of state tree
  const count = useSelector<{app: AppState}, number>(s => s.app.count)

  return (
    <>
      <Container>
        <NavigationBar />
        <MemeDisplay />
        <p className="text-center">
          Memes fetched from reddit using{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/redditdev/comments/801h41/is_randomjson_biased_towards_newer_posts/">Reddit random json API magic</a>
        </p>
        <p className="text-center">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Plasmoxy/Webyard/tree/master/Projects/succ-reddit/src">Source code (GitHub)</a>
        </p>

        <p>
          Count = {count}
        </p>
      </Container>
    </>
  )
}

import React from "react"
import Container from "react-bootstrap/Container"
import MemeDisplay from "./MemeDisplay"
import NavigationBar from "./NavigationBar"

export default function App() {
  return (
    <>
      <Container>
        <NavigationBar />
        <MemeDisplay />
        <p className="text-center">
          Memes fetched from reddit using{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/dankmemes/random.json">Reddit random json API</a>
        </p>
        <p className="text-center">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Plasmoxy/Webyard/tree/master/Projects/succ-reddit/src">Source code (GitHub)</a>
        </p>
      </Container>
    </>
  )
}

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
          Memes fetched from reddit using
          https://www.reddit.com/r/dankmemes/random.json
        </p>
      </Container>
    </>
  )
}

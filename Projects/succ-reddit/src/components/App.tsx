import React from "react"
import Container from "react-bootstrap/Container"
import MemeDisplay from "./MemeDisplay"
import NavigationBar from "./NavigationBar"

export default function App() {
  console.log("App()")
  return (
    <>
      <Container>
        <NavigationBar />
        <MemeDisplay />
        <p className="text-center">
          Memeprovider informatischer storm using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/r/redditdev/comments/801h41/is_randomjson_biased_towards_newer_posts/"
          >
            Reddit random json API magic
          </a>.<br />
          You may clicc on meme to go next meme yes.<br/>
        </p>
        <p className="text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Plasmoxy/Webyard/tree/master/Projects/succ-reddit/src"
          >
            Source code (GitHub)
          </a>
        </p>
      </Container>
    </>
  )
}

import React, { memo, useState } from "react"
import { Button, Form, FormControl, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import ahyes from "../images/ahyes.png"
import { historyForward, setSubreddit } from "../model/MemesReducer"
import { RootState } from "../model/Store"

function NavigationBar() {
  const subreddit = useSelector<RootState, string>(s => s.memes.subreddit)
  const [searchQuery, setSearchQuery] = useState(subreddit)
  const dispatch = useDispatch()

  function handleSubmit() {
    dispatch(setSubreddit(searchQuery))
    dispatch(historyForward())
  }

  return (
    <Navbar
      variant="dark"
      bg="primary"
      expand="lg"
      collapseOnSelect
      className="rounded my-2 py-0"
    >
      <Navbar.Brand>
        <img alt="logo" className="rounded mr-4" width="40" src={ahyes}></img>
        <b>
          <i>Ah yes</i>
        </b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse-nav" />
      <Navbar.Collapse id="navbar-collapse-nav">
        <Form inline className="ml-auto" onSubmit={handleSubmit}>
          Subreddit: /r/
          <FormControl
            onChange={(e: any) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search bar is broken?"
            className="mx-1"
          />
          <Button variant="dark" onClick={handleSubmit}>
            Set
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default memo(NavigationBar)

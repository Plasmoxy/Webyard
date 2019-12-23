import React, { useState } from "react"
import { Button, Form, FormControl, Navbar } from "react-bootstrap"
import ahyes from "./ahyes.png"

export default function NavigationBar() {
  const [, setSearchQuery] = useState("")

  function handleSubmit() {}

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
        <b><i>Ah yes</i></b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse-nav" />
      <Navbar.Collapse id="navbar-collapse-nav">
        <Form inline className="ml-auto">
          <FormControl
            onChange={(e: any) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search bar is broken?"
            className="mx-1"
          />
          <Button variant="dark" onClick={handleSubmit}>
            YES!
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

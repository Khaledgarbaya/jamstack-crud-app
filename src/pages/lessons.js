import React from "react"
import { Router } from "@reach/router"

const Create = () => <h1>Create Page</h1>
const Add = () => <h1>Add Page</h1>
const List = () => <h1>List Page</h1>

export default () => {
  return (
    <Router>
      <Create path="/lessons/create" />
      <Add path="/lessons/add" />
      <List path="/lessons/list" />
    </Router>
  )
}

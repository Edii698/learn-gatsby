import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

const Test = () => (
  <div>
    <Header></Header>
    <h1>Test number one</h1>
    <h1>Test number two</h1>
    <button onClick={() => navigate("/")}>Go back to Home</button>
  </div>
)

export default Test

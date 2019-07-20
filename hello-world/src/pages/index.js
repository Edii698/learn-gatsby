import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => (
  <div>
    <Header></Header>
    <div className="container">
      <h1>First Gatsby Project</h1>
      <Link to="/test/">Go to Test</Link>
      <div>
        <a href="http://google.com">Google external link</a>
      </div>
      <img
        src="https://pmcvariety.files.wordpress.com/2017/06/rexfeatures_5884729u.jpg?w=1000&h=563&crop=1"
        width="780"
        alt="Adam West Batman"
      ></img>
    </div>
    <Footer
      footerText="Home Footer Text"
      linkOne="Thing 1"
      linkTwo="Thing 2"
    ></Footer>
  </div>
)

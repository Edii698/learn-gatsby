import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default () => (
  <div>
    <Header></Header>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          <Post
            title="This is our first post"
            excerpt="We are writing some place holder text here"
          ></Post>
          <Post
            title="This is our first post"
            excerpt="We are writing some place holder text here"
          ></Post>
          <Post
            title="This is our first post"
            excerpt="We are writing some place holder text here"
          ></Post>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
)

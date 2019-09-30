import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

export default () => (
  <PrimaryLayout col="col-10">
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
  </PrimaryLayout>
)

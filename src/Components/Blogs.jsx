import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Comments from "./Blogs-nesting/Comments";
import Posts from "./Blogs-nesting/Posts";

export default class Blogs extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Blogs</h1>
          <Link to="comments">Comments</Link>
          <br />
          <Link to="posts">Posts</Link>
          <div>
            <Routes>
              <Route path="comments" element={<Comments />} />
              <Route path="posts" element={<Posts />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

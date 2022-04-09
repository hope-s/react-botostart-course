import { Posts } from './constants'

// *********************************
// NOTE: Fetch Posts
// *********************************

export const fetchPosts = () => {
  return {
    type: Posts.fetchPosts,
  }
}

export const fetchPostsSuccess = (data) => {
  return {
    type: Posts.fetchPostsSuccess,
    payload: data
  };
}

export const fetchPostsError = (e) => {
  return {
    type: Posts.fetchPostsError,
    payload: e
  }
}

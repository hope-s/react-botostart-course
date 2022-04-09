import {
  Posts
} from './constants'

const initialState = {
  isloading: false,
  posts: [],
  error: ''
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Posts.fetchPosts:
      return {
        ...state, isloading: true
      }
    case Posts.fetchPostsSuccess:
      return {
        ...state,
        posts: action.payload,
          isloading: false
      }
    case Posts.fetchPostsError:
      return {
        ...state,
        error: action.payload,
          isloading: false
      }
      default:
        return initialState
  }
}
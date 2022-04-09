import { call, put, takeLatest, all } from 'redux-saga/effects';
import { Posts } from './constants';
import { PostsAPI } from '../api/API';
import {
  fetchPostsSuccess,
  fetchPostsError,
} from './actions'

const postsApi = new PostsAPI();

function* getPostsFromAPI(action) {
  try {
    // call the api
    const data = yield call(postsApi.fetchPosts, {response: action.payload})
    // call the success action with data
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    // call the error action with data
    yield put(fetchPostsError(e));
  }
}

function* getPosts(action) {
  yield takeLatest(Posts.fetchPosts, getPostsFromAPI)
}

export default function* rootSaga() {
  yield all([
    getPosts(),
  ])
}


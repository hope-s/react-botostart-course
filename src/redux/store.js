import { createStore, applyMiddleware } from "redux";
import combineReducer from "./combineReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducer,composeWithDevTools(applyMiddleware(logger)));
export default store;
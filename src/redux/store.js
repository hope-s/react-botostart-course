import { createStore, applyMiddleware } from "redux";
import { combineReducer } from "./rootReducer";
import logger from "redux-logger";

const store = createStore(combineReducer, applyMiddleware(logger));
export default store;
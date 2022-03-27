import { createStore, applyMiddleware } from "redux";
import combineReducer from "./combineReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(combineReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export default store;
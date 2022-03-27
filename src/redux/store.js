import { createStore } from "redux";
import { combineReducer } from "./rootReducer";

const store = createStore(combineReducer)
export default store;
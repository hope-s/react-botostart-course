import { createStore } from "redux";
import reducer from "./counter/counterReducer";

const store = createStore(reducer)
export default store;
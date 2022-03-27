import { combineReducers } from "redux";
import reducerNumber from "./number/numberReducer";
import reducer from "./counter/counterReducer";

export const combineReducer = combineReducers({
    reducer,
    reducerNumber
})
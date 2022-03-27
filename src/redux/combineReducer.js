import {
    combineReducers
} from "redux";
import reducerNumber from "./number/numberReducer";
import reducer from "./counter/counterReducer";
import reducerData from "./data/reducerData"

const combineReducer = combineReducers({
    reducer,
    reducerNumber,
    reducerData
})

export default combineReducer
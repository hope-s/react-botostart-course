import {
    combineReducers
} from "redux";
import userReducer from "./user/actionReducer"

const combineReducer = combineReducers({
    usersState: userReducer
})

export default combineReducer
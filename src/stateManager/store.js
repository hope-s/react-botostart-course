import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import combineReducer from "./rootReducer";

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export let persistGate = persistStore(store)

export default store;
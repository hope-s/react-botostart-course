import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from './productReducer';
import basketReducer from './basktReducer';
 
const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer,
})
 
export default persistReducer(rootPersistConfig, rootReducer)
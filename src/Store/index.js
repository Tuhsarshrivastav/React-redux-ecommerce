import { createStore, combineReducers } from "redux";
import ProductsReducers from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
const root = combineReducers({
  ProductsReducers,
  CartReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;

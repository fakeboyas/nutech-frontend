import { combineReducers } from "redux";
import productReducer from "./Produk";

export default combineReducers({
  product: productReducer,
});

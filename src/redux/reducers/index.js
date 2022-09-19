import { combineReducers } from "redux";
import Product from './Product'
import Order from "./order";

const rootReducer = combineReducers({
  product: Product,
  order: Order,
})
export default rootReducer
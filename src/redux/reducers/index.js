import { combineReducers } from "redux"
import Product from './Product'
import Order from "./order"
import User from './user'

const rootReducer = combineReducers({
  product: Product,
  order: Order,
  user: User,
})
export default rootReducer
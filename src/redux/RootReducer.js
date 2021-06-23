import { combineReducers } from 'redux'
import CartReducer from './CartReducer/CartReducer'
import userReducer from './userReducer/userReducer'
import LoadingReducer from './IsLoading/LoadingReducer'
import OrderDetailReducer from './OrderDetailReducer/OrderDetailReducer'
import CategoriesReducer from './CategoriesReducer/CategoriesReducer'

const RootReducer = combineReducers({
  cart: CartReducer,
  user: userReducer,
  loading: LoadingReducer,
  orderModal: OrderDetailReducer,
  categories: CategoriesReducer,
})

export default RootReducer

import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import CartReducer, {toggleOpenCart} from './CartReducer';

const rootReducer = combineReducers({
  products: DataReducer,
  cart: CartReducer,
  isCartOpen: toggleOpenCart
});

export default rootReducer;

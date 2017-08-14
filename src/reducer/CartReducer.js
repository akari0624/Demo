import {PUT_PRODUCT_TO_CART, CLOSE_CART, OPEN_CART, DELETE_ONE_ITEM_FROM_CART} from '../containers/Home/action/type';

export default function (state = [], action) {
  switch (action.type) {
    case PUT_PRODUCT_TO_CART: {
      return [
        ...state,
        action.payload
      ];
    }

    case DELETE_ONE_ITEM_FROM_CART: {
      const index = action.payload;
      const copyArr = Object.assign([], state);
      const fromArr = copyArr.splice(index + 1, copyArr.length);
      const laterArr = copyArr.slice(0, index);
      const newCart = fromArr.concat(laterArr);

      return newCart;
    }

    default:
      return state;
  }
}


export function toggleOpenCart(state = false, action) {
  switch (action.type) {
    case CLOSE_CART:
      return action.payload;

    case OPEN_CART:
      return action.payload;

    default:
      return state;

  }
}

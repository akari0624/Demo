import AlbumJson from '../components/Album.json';
import { GET_DATA, PUT_PRODUCT_TO_CART, OPEN_CART, CLOSE_CART, DELETE_ONE_ITEM_FROM_CART} from './type';

export default function () {

  return { type: GET_DATA, payload: AlbumJson };

}

export function addProductToCart(productObj) {

  return {type: PUT_PRODUCT_TO_CART, payload: productObj};
}

export function openCart() {
  return {type: OPEN_CART, payload: true};
}

export function closeCart() {
  return {type: CLOSE_CART, payload: false};
}

export function deleteOneProductInCart(removeIndex) {
  return {type: DELETE_ONE_ITEM_FROM_CART, payload: removeIndex};
}

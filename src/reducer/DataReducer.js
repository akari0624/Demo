import {GET_DATA} from '../containers/Home/action/type';

export default function (state = [], action) {

  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }

}

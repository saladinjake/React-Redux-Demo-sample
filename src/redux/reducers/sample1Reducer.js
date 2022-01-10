import { ADD_TO_CART } from "../constants/sample1Types";

const initialState = {
  cart_item: 1,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
       cart_item: state.cart_item + 1,
      };

    default:
      return state;
  }
};

export default cartReducer;

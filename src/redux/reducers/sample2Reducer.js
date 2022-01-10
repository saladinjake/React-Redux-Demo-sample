import { ADD_TO_WISHLIST } from "../constants/sample2Types";

const initialState = {
  wishlist_items: 10,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        wishlist_items: state.wishlist_items + 1,
      };
    default:
      return state;
  }
};

export default wishlistReducer;

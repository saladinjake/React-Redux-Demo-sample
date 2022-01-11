import { ADD_TO_WISHLIST } from "../constants/sample2Types";

const initialState = {
  wishlist_items: 10,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist_items: state.wishlist_items + 1,
      };
    default:
      return state;
  }
};

export default wishlistReducer;

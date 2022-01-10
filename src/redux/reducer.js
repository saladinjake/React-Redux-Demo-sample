import { combineReducers } from "redux";
import sample1Reducer from "./reducers/cartReducer";
import sample2Reducer from "./reducers/wishlistReducer";
import sample3Reducer from "./reducers/userReducer";

const reducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userReducer,
});

export default reducer;

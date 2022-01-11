import { combineReducers } from "redux";
import cartReducer from "./reducers/sample1Reducer";
import wishlistReducer from "./reducers/sample2Reducer";
import userReducer from "./reducers/sample3Reducer";

const reducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userReducer,
});

export default reducer;

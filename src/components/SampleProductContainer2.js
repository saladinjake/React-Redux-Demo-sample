import { connect } from "react-redux";
import { addToWish } from "../redux";

const SampleProductContainer2 = ({ wishlist_items, addToWishList }) => {
  return (
    <div>
      <h1>Item Count - {wishlist_items}</h1>
      <button onClick={addToWishList}>Add to wishlist</button>
    </div>
  );
};

const mapStateToProps = ({ wishlist }) => ({
  wishlist_items: wishlist.wishlist_items,
});

const mapDispatchToProps = (dispatch) => ({
  addToWishList: () => dispatch(addToWishList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleProductContainer2);

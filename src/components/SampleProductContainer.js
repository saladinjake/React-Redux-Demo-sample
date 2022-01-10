import React from "react";
import { connect } from "react-redux";
import { cart } from "../redux";

const SampleProductContainer = ({ numberOfItems, addToCart }) => {
  return (
    <div>
      <h2>Total Items - {numberOfItems}</h2>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart_item: cart.cart_item,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: () => dispatch(addToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleProductContainer);

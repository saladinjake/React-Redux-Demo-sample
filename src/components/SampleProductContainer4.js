import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux";

const SampleProductContainer4 = () => {
  const cart_item = useSelector(({ cart_item }) => cart.cart_item);
  const dispatch = useDispatch``;
  const handleClick = () => dispatch(addToCart());
  return (
    <div>
      <h2>Item Count - {cart_item}</h2>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
};

export default SampleProductContainer4;

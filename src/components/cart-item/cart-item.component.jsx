import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <spam>{quantity}</spam>
    </div>
  );
};

export default CartItem;

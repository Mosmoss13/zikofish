import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const handleOrder = () => {
    props.onClick();
    alert("Your order is being processed!");
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addToCartHandler.bind(null, item)}
            onRemove={removeFromCartHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onModalClick={props.onClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItems && (
          <button className={styles["button"]} onClick={handleOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

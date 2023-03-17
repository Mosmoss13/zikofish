import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setButtonIsHighlighted(true);
      const timer = setTimeout(() => {
        setButtonIsHighlighted(false);
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartCtx.items]);

  const buttonItem = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  const ctxItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={buttonItem} onClick={props.onClick}>
      <FaShoppingCart className={styles.icon} /> Your Cart
      <span className={styles.badge}>{ctxItems}</span>
    </button>
  );
};

export default HeaderCartButton;

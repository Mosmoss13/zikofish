import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealItemForm id={props.id} onAddItem={addItemHandler} />
    </li>
  );
};

export default MealItem;

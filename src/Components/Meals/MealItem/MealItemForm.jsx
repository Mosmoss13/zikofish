import React, { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;
    props.onAddItem(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        id={props.id}
        input={{
          key: "props.id",
          min: "0",
          type: "number",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;

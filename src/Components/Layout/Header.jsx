import React from "react";
import styles from "./Header.module.css";
import meals from "../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <div>
        <header className={styles.header}>
          <h1>Ziko fish</h1> <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={styles["main-image"]}>
          <img src={meals} alt={"Our Restaurant Meals!"} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;

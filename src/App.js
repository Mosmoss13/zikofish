import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const showCart = () => {
    setIsCartClicked(true);
  };

  const closeCart = () => {
    setIsCartClicked(false);
  };

  return (
    <CartProvider>
      {isCartClicked && <Cart onClick={closeCart} />}
      <Header onShowCart={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;

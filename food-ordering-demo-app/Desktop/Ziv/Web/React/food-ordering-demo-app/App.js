import React, { useState } from "react";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider onClick={showCartHandler} onDismiss={hideCartHandler}>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;

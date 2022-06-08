import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./CheckoutForm";
import useHttp from "../hooks/useHttp";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [didSubmit, setDidSubmit] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const [isLoading, error, sendRequest] = useHttp();

  const submitOrderHandler = async (userData) => {
    await sendRequest(null, {
      url: "https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      headers: {
        "Content-Type": "appliction/json",
      },
      body: {
        user: userData,
        orderetItems: cartCtx.items,
      },
    });
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let contents = (
    <div className={classes.scrollable}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && <CheckoutForm submitOrder={submitOrderHandler} />}
      <div id="cart-actions" className={classes.actions}>
        <button className={classes["button--alt"]} onClick={cartCtx.onDismiss}>
          Close
        </button>
        {hasItems && (
          <button onClick={cartCtx.clearCart} className={classes.button}>
            Clear Cart
          </button>
        )}
        {hasItems && (
          <button type="submit" form="checkout-form" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </div>
  );

  isLoading &&
    (contents = <p className={classes.p}>Loading! Please wait...</p>);

  didSubmit &&
    (contents = (
      <>
        <p className={classes.p}>Order successfully sent!</p>
        <div id="cart-actions" className={classes.actions}>
          <button className={classes.button} onClick={cartCtx.onDismiss}>
            Close
          </button>
        </div>
      </>
    ));

  error &&
    (contents = (
      <>
        <p className={classes.p}>{error}</p>
        <div id="cart-actions" className={classes.actions}>
          <button className={classes.button} onClick={cartCtx.onDismiss}>
            Close
          </button>
        </div>
      </>
    ));

  return <Modal onBackdropClicked={cartCtx.onDismiss}>{contents}</Modal>;
};

export default Cart;
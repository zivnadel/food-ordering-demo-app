import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems = [...state.items];
    const existingItem = state.items.find((item) => item.id === action.item.id);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedItems = [...state.items];
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    if (existingItem) {
      if (existingItem.amount > 1) {
        existingItem.amount -= 1;
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    return defaultCartState;
  }

  if (action.type === 'CLEAR_CART') {
    return defaultCartState;
  }
  
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART"} )
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    onClick: props.onClick,
    onDismiss: props.onDismiss,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

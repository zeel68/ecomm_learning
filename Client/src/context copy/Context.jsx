import React, { createContext, useState, useEffect } from "react";
import Seller from "../Seller";

export const Context = createContext(null);

// Load cart from localStorage or use default cart
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cartItem");
  if (storedCart) {
    return JSON.parse(storedCart);
  }

  let cart = {};
  for (let i = 0; i < Seller.length; i++) {
    cart[Seller[i].id] = 0;
  }
  return cart;
};

const ContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(getInitialCart);

  // Save to localStorage whenever cartItem changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addTocart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeTocart = (itemid) => {
    setcartItem((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] - 1 : 0,
    }));
  };

  const ContextValue = {
    Seller,
    addTocart,
    removeTocart,
    cartItem
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

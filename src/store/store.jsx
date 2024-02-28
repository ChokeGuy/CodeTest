import { createContext, useState } from "react";

// Create the cart context
const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

// Create the cart provider
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartContext, CartProvider };

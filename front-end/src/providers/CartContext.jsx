import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({  children }) => {
    const [cart, setCart] = useState({});
    const addToCart = (product) => {
      setCart((old) => ({
        ...old,
        [product.id]: product,
      }))
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart;
}
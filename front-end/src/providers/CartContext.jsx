import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({  children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
      setCart((old) => ({
        ...old,
        [product.id]: product,
      }))
    }
    const [totalPrice, setTotalPrice] = useState()

    return (
        <CartContext.Provider value={{cart, addToCart, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart;
}
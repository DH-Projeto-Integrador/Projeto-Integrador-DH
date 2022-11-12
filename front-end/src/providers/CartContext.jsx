import { useCallback } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productsInCard, setProductsInCard] = useState([]);

    function addProductToCart(product) {
        const copyProductsInCard = [...productsInCard]

        const item = copyProductsInCard.find(({ id }) => id == product.id)

        if (!item) {
            copyProductsInCard.push({ ...product, quantidade: 1 })
        } else {
            item.quantidade += 1
        }

        setProductsInCard(copyProductsInCard)
    }

    function removeProductToCart() { }

    function deleteProductToCart() { }

    function fullClearCart() {}

    return (
        <CartContext.Provider value={{ productsInCard, addProductToCart, removeProductToCart, deleteProductToCart, fullClearCart }}>
            {children}
        </CartContext.Provider>
    )
}
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

    function removeProductToCart(id) {
        const copyProductsInCard = [...productsInCard]

        const item = copyProductsInCard.find(({ id }) => id == product.id)

        if (item) {
            item.quantidade -= 1
        }

        if (item && item.quantidade === 0) {
            copyProductsInCard = copyProductsInCard.filter((products) => products.id !== id)
        }

        setProductsInCard(copyProductsInCard)
    }

    function deleteProductToCart(id) {
        const copyProductsInCard = [...productsInCard]

        copyProductsInCard = copyProductsInCard.filter((products) => products.id !== id)

        setProductsInCard(copyProductsInCard)
    }

    function fullClearCart() {
        setProductsInCard([])
    }

    return (
        <CartContext.Provider value={{ productsInCard, addProductToCart, removeProductToCart, deleteProductToCart, fullClearCart }}>
            {children}
        </CartContext.Provider>
    )
}
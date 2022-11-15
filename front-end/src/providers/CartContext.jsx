import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productsInCard, setProductsInCard] = useState([]);

    useEffect(() => {
        const transformeParseLocalStorage = JSON.parse(localStorage.getItem("products"))
        const setContext = !localStorage.getItem("products") ? [] : transformeParseLocalStorage
        setProductsInCard(setContext)
    }, [])

    function addProductToCart(product) {
        const copyProductsInCard = [...productsInCard]

        const item = copyProductsInCard.find(({ id }) => id == product.id)

        if (!item) {
            copyProductsInCard.push({ ...product, quantidade: 1 })
        } else {
            item.quantidade += 1
        }

        localStorage.setItem("products", JSON.stringify(copyProductsInCard))
        setProductsInCard(copyProductsInCard)
    }

    function removeProductToCart(id) {
        const copyProductsInCard = [...productsInCard]

        const item = copyProductsInCard.find((product) => id == product.id)

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

        const restProducts = copyProductsInCard.filter((products) => products.id !== id)

        setProductsInCard([...restProducts])
    }

    return (
        <CartContext.Provider value={{ productsInCard, setProductsInCard, addProductToCart, removeProductToCart, deleteProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}
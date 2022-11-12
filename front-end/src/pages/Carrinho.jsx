import { Link } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { ProductCart } from "../components/ProductCart";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

export function Carrinho() {
  const { productsInCard } = useContext(CartContext)

  const copyProductsInCard = [...productsInCard]

  const totalPrice = copyProductsInCard.reduce(
    (previousValue, currentValue) => (
      previousValue + (currentValue.quantidade * currentValue.price)
    ), 0)

  return (
    <>
      <main className="container m-auto text-center font-medium mt-14 mb-72 max-w-2xl border shadow-md rounded-xl">
        <Link to="/">
          <IoIosArrowDropleft className="fill-green-600 m-3 text-4xl cursor-pointer" />
        </Link>
        <h1 className="py-2 self-center text-xl font-bold text-zinc-700 w-full">Carrinho</h1>
        {
          productsInCard && productsInCard.length > 0
            ? (
              productsInCard.map(products => (
                <ProductCart key={products.id} products={products} />
              ))
            )
            : <span>Carrinho está vazio</span>
        }
        <div className="py-5">
        </div>

        {
          productsInCard && productsInCard.length === 0
            ? ""
            : (
              <>
                <div className="flex flex-row justify-end py-5 self-center text-base font-bold text-zinc-700 w-full gap-3">
                  <div className="flex flex-wrap flex-col text-left w-2/5 justify-end">
                    <p>Frete</p>
                    <p>Total com frete</p>
                  </div>

                  <div className="flex flex-col w-24 text-left">
                    <p>R$5,00</p>
                    <p>R${totalPrice}</p>
                  </div>
                </div>

                <div className="py-3">
                  <hr />
                </div>

                <div className="flex justify-center py-8">
                  <button className="w-72 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline m-5">Finalizar Compra</button>
                </div></>
            )
        }
      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { ProductCart } from "../components/ProductCart";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

export function Carrinho() {
  const { productsInCard, setProductsInCard } = useContext(CartContext)
  const copyProductsInCard = [...productsInCard]
  const frete = 5

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

        {
          productsInCard && productsInCard.length === 0
            ? <h2 className="text-2xl mb-12">Carrinho está vazio!</h2>
            : (
              <>
                <h1 className="py-2 self-center text-xl font-bold text-zinc-700 w-full">Carrinho</h1>

                {
                  productsInCard.map(products => (
                    <ProductCart key={products.id} products={products} />
                  ))
                }

                <div className="flex flex-row justify-end py-5 self-center text-base font-bold text-zinc-700 w-full gap-3">
                  <div className="flex flex-wrap flex-col text-left w-2/5 justify-end">
                    <p>Frete</p>
                    <p>Total com frete</p>
                  </div>

                  <div className="flex flex-col w-24 text-left">
                    <p>R${frete.toFixed(2)}</p>
                    <p>R${totalPrice.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex justify-center py-8 px-4 gap-4">
                  <button
                    onClick={() => {setProductsInCard([]); localStorage.removeItem("products")}}
                    className="w-48 border text-gray-500 border-gray-400 hover:bg-gray-500 hover:text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">Limpar Carrinho</button>
                  <button className="w-48 border text-red-500 border-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">Finalizar Compra</button>
                </div>
              </>
            )
        }
      </main>
    </>
  );
}

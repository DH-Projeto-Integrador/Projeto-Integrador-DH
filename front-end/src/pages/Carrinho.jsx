import { Link } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { ProductCart } from "../components/ProductCart";
import { useState, useEffect } from "react";
import { useCart } from "../providers/CartContext";

export function Carrinho() {
  const cart = useCart()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, []);

  const soma = products.reduce((acc, valor) => { return acc += Number(valor.price)}, 0)

  return (
    <>
      <main className="container m-auto text-center font-medium mt-14 mb-72 max-w-2xl border shadow-md rounded-xl">
        <Link to="/">
          <IoIosArrowDropleft className="fill-green-600 m-3 text-4xl cursor-pointer" />
        </Link>
        <h1 className="py-2 self-center text-xl font-bold text-zinc-700 w-full">Carrinho</h1>
        {products.map((product) => (<ProductCart key={product.id} products={product}/>))}
        <div className="py-5">
          <hr />
        </div>

        <div className="flex flex-row justify-end py-5 self-center text-base font-bold text-zinc-700 w-full gap-3">
          <div className="flex flex-wrap flex-col text-left w-2/5 justify-end">
            <p>Frete</p>
            <p>Total com frete</p>
          </div>

          <div className="flex flex-col w-24 text-left">
            <p>R$ 5,00</p>
            <p>R${(soma + 5).toFixed(2).replace('.', ',')}</p>
          </div>
        </div>

        <div className="py-3">
          <hr />
        </div>

        <div className="flex justify-center py-8">
          <button className="w-72 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline m-5">Finalizar Compra</button>
        </div>
      </main>
    </>
  );
}

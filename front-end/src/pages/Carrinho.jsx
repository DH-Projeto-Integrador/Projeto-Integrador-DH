import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Carrinho() {
  return (
    <>
      <main className="container m-auto text-center font-medium mt-14 mb-72 max-w-2xl border shadow-md rounded-xl">
        <h1 className="py-2 self-center text-xl font-bold text-zinc-700 w-full">Carrinho</h1>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex justify-center w-64 gap-5">
            <img
              className="w-1/4 h-3/4 self-center"
              src="https://media.gettyimages.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g="
              alt="maçã"
            />
            <p className="self-center text-base font-bold text-zinc-700 w-full">
              MAÇÃ VERMELHA 500g
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
              name="quantidade"
              type="number"
              defaultValue={1}
            />
            <p className="self-center text-base font-bold text-zinc-700 w-full">R$12,35</p>
          </div>
        </div>

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
            <p>R$17,35</p>
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

import { useContext } from "react";
import { BiSearch, BiUserCircle, BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"
import { CartContext } from "../providers/CartContext";


export const Header = () => {
  const { productsInCard } = useContext(CartContext)

  return (
    <header className="sticky top-0 w-full bg-green-500">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 px-4 py-2">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="text-white text-2xl font-semibold tracking-wider"
              >
                iFruits
              </Link>
            </div>

            <div className="flex gap-2 bg-green-600 px-4 py-1 rounded-full">
              <div className="relative w-10">
                <Link to="/carrinho" content={productsInCard?.length} className="after:bg-red-500 after:opacity-90 after:border-2 after:rounded-full after:border-none after:w-6 after:absolute after:-top-2 after:-right-1 after:content-[attr(content)] after:flex after:items-center after:justify-center after:text-white">
                  <BiCart
                    className="fill-white text-3xl cursor-pointer"
                  />
                </Link>
              </div>

              <div>
                <a href="perfilusuario">
                  <BiUserCircle className="fill-white text-3xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center w-full py-2 bg-green-500">
            <div className="w-full flex items-center border-2 rounded-full border-green-300 bg-white">
              <button>
                <BiSearch
                  className="text-2xl ml-3 cursor-pointer"
                />
              </button>

              <input
                type="text"
                className="h-full w-full px-2 py-1 focus:outline-none tracking-wide text-green-900 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

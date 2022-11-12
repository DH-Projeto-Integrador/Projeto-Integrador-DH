import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../providers/CartContext";
import { Button } from './Button'

export function Card({ product }) {
  const { addProductToCart } = useContext(CartContext)

  return (
    <div
      className="flex flex-col gap-1 w-full max-w-[20rem] h-max bg-white rounded-lg border border-gray-200 shadow-md"
    >
      <div className="h-48">
        <Link
          to={`/${product.id}`}
        >
          <img className="rounded-t-lg w-full h-full" src={product.image_product} alt={product.name} />
        </Link>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div>
          <Link to={product.id}>
            <h5 className="text-lg font-medium tracking-wide">{product.name}</h5>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <span>R$ {product.price}</span>
          <span>{product.type_unit}</span>
        </div>

        <div className="w-52 self-center">
          <Button
          onClick={() => addProductToCart(product)}
          >
            <span>
              adicionar o carrinho
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
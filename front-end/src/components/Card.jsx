import { useCart } from "../providers/CartContext";
import { Link } from "react-router-dom";
import { Button } from './Button'

export function Card({ product }) {
  const cart = useCart()
  let localArray = [];
  const add = (product) => () => {
    cart.addToCart(product)
    if(localStorage.products) {
      localArray = JSON.parse(localStorage.getItem('products'))
    }

    const productFound = localArray.find((item) => item.id === product.id)

    if(!productFound) {
      localArray.push(product)
      localStorage.products = JSON.stringify(localArray);
      console.log(localArray)
    }
  }

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
          onClick={add(product)}
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

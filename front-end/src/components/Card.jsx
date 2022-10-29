import { Link } from "react-router-dom";

export function Card({ product }) {
  return (
    <Link
      to={`/${product.id}`}
      className="grid grid-rows-6 w-full max-w-[20rem] h-72 bg-white rounded-lg border border-gray-200 shadow-md"
    >
      <div className="row-span-4">
        <img
          className="w-full h-full rounded-t-lg"
          // src={url}
          src={product.image_product}
          alt={product.name}
        />
      </div>

      <div className="p-5 row-span-2 h-max">
        <span>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </span>

        <div className="flex justify-between">
          <span className="text-gray-900 dark:text-gray-400">
            R${product.price}
          </span>

          <span className="text-gray-900 dark:text-white">
            {product.type_unit}
          </span>
        </div>
      </div>
    </Link>
  );
}

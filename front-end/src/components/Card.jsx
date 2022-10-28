import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { Button } from "./Button"

export function Card({ product, url, price, name, ...props }) {

  const navigate = useNavigate();
  
  function GoToProduct() {
    
    navigate(`/${product.id}`);

  }

  return (

    <Link
      {...props}
      className="block w-full max-w-sm h-max bg-white rounded-lg border border-gray-200 shadow-md"
      onClick={ () => {GoToProduct()} }
    >
      <div className="h-3/4">
        <div>
          <img
            className="rounded-t-lg"
            // src={url}
            src={product.image_product}
            alt={product.name}
          />
        </div>
        <div className="p-5">
          <span>
            {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5> */}
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </span>
          {/* <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {price}
          </span> */}
          <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </span>
      </div>
      </div>
    </Link>
  );
}

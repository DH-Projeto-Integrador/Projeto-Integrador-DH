import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export function Card({ product }) {

  const navigate = useNavigate();
  
  function GoToProduct() {
    navigate(`/${product.id}`);

  }

  return (

    <Link to={`/${product.id}`}
      className="grid grid-rows-6 w-full max-w-[20rem] h-72 bg-white rounded-lg border border-gray-200 shadow-md"
    >
        <div className="row-span-4">
          <img
            className="w-full h-full rounded-t-lg"
            // src={url}
            src={product.image_product}
            alt={product.description}
          />
        </div>

        <div className="p-5 row-span-2 h-max">
          <span>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </span>
          
          <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </span>

      </div>
    </Link>
  );
}

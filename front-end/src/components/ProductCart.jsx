import { useState } from "react";
import { Link } from "react-router-dom";

export function ProductCart({ products }) {  
    const [item, setItem] = useState(1);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="flex justify-center w-64 gap-5">
        <img
          className="w-1/4 h-3/4 self-center"
          src={products.image_product}
          alt={products.name}
        />
        <p className="self-center text-base font-bold text-zinc-700 w-full">
          {products.name} {products.type_unit}
        </p>
      </div>
      <div className="flex gap-3">
        <input
          className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
          name="quantidade"
          type="number"
          defaultValue={1}
          onChange={e => setItem(e.target.value)}
        />
        <p className="self-center text-base font-bold text-zinc-700 w-full">
          R${products.price*item}
        </p>
      </div>
    </div>
  );
}

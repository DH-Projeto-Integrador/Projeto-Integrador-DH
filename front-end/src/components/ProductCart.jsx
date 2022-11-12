export function ProductCart({ products }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-2 border">
      <div className="flex justify-center w-64 gap-5">
        <img
          className="w-1/2 self-center"
          src={products.image_product}
          alt={products.name}
        />
        <p className="self-center text-base font-bold text-zinc-700 w-full">
          {products.name} {products.type_unit}
        </p>
      </div>
      <div className="flex gap-3">
        <p className="self-center text-base font-bold text-zinc-700">
          Quantidade: {products.quantidade}
        </p>

        <p className="self-center text-base font-bold text-zinc-700">
          R$ {products.price}
        </p>
      </div>
    </div>
  );
}

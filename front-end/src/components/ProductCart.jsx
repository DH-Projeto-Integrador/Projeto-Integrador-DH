import { useContext } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { CartContext } from '../providers/CartContext';

export function ProductCart({ products }) {
  const { addProductToCart, removeProductToCart, deleteProductToCart } = useContext(CartContext)

  return (
    <div className="flex flex-wrap justify-center gap-3 py-2 border">
      <div className="flex items-center justify-center w-56 gap-5">
        <img
          className="w-28"
          src={products.image_product}
          alt={products.name}
        />
        <div className="text-base font-bold text-zinc-700 w-full">
          <h4>{products.name}</h4>

          <span>{products.type_unit}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-28 text-base font-bold text-zinc-700">
          <h4>Quantidade</h4>

          <div className='flex justify-center gap-2'>
            {
              products.quantidade === 1
                ?
                <button onClick={() => deleteProductToCart(products.id)}>
                  <BiTrash className='text-red-800 text-xl' />
                </button>
                :
                <button onClick={() => removeProductToCart(products.id)}>
                  <AiOutlineMinusCircle className='text-green-800 text-xl' />
                </button>
            }

            <span>{products.quantidade}</span>

            <button onClick={() => addProductToCart(products)}>
              <AiOutlinePlusCircle className='text-green-800 text-xl' />
            </button>
          </div>
        </div>

        <div className="w-28 text-base font-bold text-zinc-700">
          <h4>Preço</h4>

          <span>R${(products.price * products.quantidade).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

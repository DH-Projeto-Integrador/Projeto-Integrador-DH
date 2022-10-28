import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from '../services/product.service'

export function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    ProductService.getMany()
      .then(response => setProducts(response))

  }, []);

  return (
    <>
      <aside className="h-72">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </aside>

      <div className="my-6 flex gap-2 flex-wrap container mx-auto px-4">
        <Button>
          <Link className="text-white font-semibold tracking-wide">
            Legumes
          </Link>
        </Button>

        <Button>
          <Link className="text-white font-semibold tracking-wide">
            Verduras
          </Link>
        </Button>

        <Button>
          <Link className="text-white font-semibold tracking-wide">
            Legumes
          </Link>
        </Button>
      </div>

      <main className="container mx-auto mb-6 px-5">
        <h2 className="text-2xl text-green-900 font-bold tracking-wide mb-6">
          Produtos
        </h2>

        <div
          className="w-full grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(14.5rem, 1fr))",
          }}
        >
          {products.map(currentProduct => <Card key={currentProduct.id} product={currentProduct} /> )}
        </div>
      </main>
    </>
  );
}

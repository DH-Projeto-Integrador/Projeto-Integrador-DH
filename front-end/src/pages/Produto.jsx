import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Produto() {
    const [quantityProducts, setQuantityProducts] = useState()

    const handleAdd = useCallback(() => setQuantityProducts(quantityProducts++), [quantityProducts])

    const handleRemove = useCallback(() => setQuantityProducts(quantityProducts--), [quantityProducts])

    return (
        <>
            <Header/>
            <main className="container m-auto text-center font-medium my-2 max-w-3xl border shadow-md rounded-xl">
                <section className="flex-wrap ">
                    <div className="w-60 my-2 mx-3">
                        <p><a href="" className="hover:underline">Home </a>&gt; <a href="" className="hover:underline">Frutas </a>&gt; Maçã</p>
                    </div>
                    <div>
                        <img className="h-auto w-1/2 m-auto" src="https://media.gettyimages.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=" alt="maçã" />
                    </div>
                    <button class="w-3/4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline m-5"
                    type="button"
                    >
                        Adicionar ao carrinho
                    </button>
                        <div className="m-auto w-3/4 flex flex-wrap justify-between">
                            <div className="text-left w-28 mb-2">
                                <p>Maçã 500g</p>
                                <p><strong>R$ 2,99</strong></p>
                                <label htmlFor="quantidade">qtd : </label>
                                <input  className="shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" name="quantidade"
                                type="number"
                                defaultValue={1}
                                />
                            </div>
                            <form action="#" className="text-left w-48">
                                <p>Calcule seu frete</p>
                                <p>CEP:</p>
                                <input
                                class="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="00000-000"
                                />
                                <button class=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline m-5"
                                type="button"
                                >
                                OK
                                </button>
                            </form>
                        </div>
                    <hr className="my-2"/>
                    <div className="m-auto my-3 py-5 text-left w-3/4">
                        <h3 className="text-xl font-medium">Descrição</h3>
                        <p className="font-medium">
                        A maçã é o fruto da macieira, árvore da família Rosaceae, com
                        tronco de casca parda, lisa e copa arredondada que chega a 10 m de
                        altura. A fruta mais cultivada do mundo é originária da Ásia e da
                        Europa. Existem mais de 2,5 mil espécies de maçã.
                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
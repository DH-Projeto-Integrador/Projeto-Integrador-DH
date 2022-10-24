import { Link } from "react-router-dom";
import '../components/produto.css'

export function Produto() {
    return (
        <>
            <main>
            <section>
                <div id="orient">
                <p><a href="">Home </a>&gt; <a href="">Frutas </a>&gt; Maçã</p>
                </div>
                <div id="image">
                <a href="#">
                    <img src="image/maca.jpg" alt="maçã" />
                </a>
                </div>
                <div id="container">
                <div id="descricao">
                    <p>Maçã 500g</p>
                    <p><strong>R$ 2,99</strong></p>
                </div>
                <div id="add">
                    <input type="button" value="Adicionar ao carrinho" />
                </div>
                <form action="#">
                    <p>Calcule seu frete</p>
                    <p>CEP:</p>
                    <input id="cep" type="number" name="cep" />
                    <input id="ok" type="submit" value="OK" />
                </form>
                <hr />
                <div id="about">
                    <h2>Descrição</h2>
                    <p>
                    A maçã é o fruto da macieira, árvore da família Rosaceae, com
                    tronco de casca parda, lisa e copa arredondada que chega a 10 m de
                    altura. A fruta mais cultivada do mundo é originária da Ásia e da
                    Europa. Existem mais de 2,5 mil espécies de maçã.
                    </p>
                </div>
                </div>
            </section>
            </main>
        </>
    )
}
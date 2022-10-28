import axios from "axios";

const ProductService = {

    getMany: async () => {

        try {
            const req = await fetch(`http://localhost:3030/produtos`);
            const product = await req.json();
            return product;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }
    },
    getById: async (idProduct) => {

        try {
            const req = await fetch(`http://localhost:3030/produtos/${idProduct}`);
            const currentProduct = await req.json();
            return currentProduct;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }
    },
    getByCategory: async (categoryName) => {

        try {
            const req = await fetch(`http://localhost:3030/produtos/category/${categoryName}`);
            const productsFound = await req.json();
            return productsFound;
        }
        catch {
            return{Message: "Ops, algo deu errado"}
        }

    }
}

export default ProductService;
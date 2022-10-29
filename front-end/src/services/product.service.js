import axios from "axios";

const ProductService = {
  getMany: async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}`);
      sessionStorage.setItem("products", JSON.stringify(data));
      return data;
    } catch {
      return { message: { err: "Ops, algo deu errado" } };
    }
  },
  getById: async (idProduct) => {
    const products = JSON.parse(sessionStorage.getItem("products"));

    if (!products) {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}${idProduct}`
        );
        return data;
      } catch {
        return { message: "Ops, algo deu errado" };
      }
    }

    const productFound = products.find(({ id }) => idProduct == id)

    return productFound
  },
  getByCategory: async (categoryName) => {
    try {
      const req = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      const productsFound = await req.json();
      return productsFound;
    } catch {
      return { message: "Ops, algo deu errado" };
    }
  },
};

export default ProductService;

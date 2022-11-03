import axios from "axios";

const ProductService = {
  getMany: async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}`);
      console.log(data)
      sessionStorage.setItem("products", JSON.stringify(data));
      return data;
    } catch {
      return { message: "Ops, algo deu errado"  };
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

  getByCategory: async (idCategory) => {
    const products = JSON.parse(sessionStorage.getItem("products"));
   

    const results = products.filter(({ id }) => idCategory == id.id_category)
       return results
  },
};

export default ProductService;

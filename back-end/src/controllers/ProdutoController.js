const Produto = require("../models/ProdutoModel");
const Categoria = require("../models/CategoriaModel");
const Fornecedor = require("../models/FornecedorModel");

module.exports = {
  async getAll() {
    const [, res] = arguments;
    const products = await Produto.findAll();

    return res.json(products);
  },

  async store() {
    const [req, res] = arguments;
    
    const { id_category } = req.params;
    const { id_provider, image_product, name, price, quantity_stock } =
      req.body;

    const categoria = await Categoria.findByPk(id_category);
    const fornecedor = await Fornecedor.findByPk(id_provider);

    if (!categoria) {
      return res.status(400).json({ Message: "Categoria não encontrada." });
    }
    if (!fornecedor) {
      return res.status(400).json({ Message: "Fornecedor não encontrado." });
    }

    const product = await Produto.create({
      id_provider,
      image_product,
      name,
      price,
      quantity_stock,
      id_category,
    });

    return res.status(201).json(product);
  },

  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const productFound = await Produto.findByPk(id);

    if (!productFound) {
      return res.status(404).json({ Message: "Produto não encontrado" });
    }

    return res.status(200).json(productFound);
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const productFound = await Produto.findByPk(id);

    if (!productFound) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    productFound.set(req.body);

    const productUpdated = await productFound.save();

    return res.status(200).json(productUpdated);
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const productFound = await Produto.findByPk(id);

    if (!productFound) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    productFound.destroy();

    return res.status(200).json({ Message: `Produto deletado com sucesso!` });
  },
};

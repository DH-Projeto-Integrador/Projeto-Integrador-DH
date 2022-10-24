const FornecedorModel = require("../models/FornecedorModel");

module.exports = {
  async getAll() {
    const [__req, res] = arguments;

    const providers = await FornecedorModel.findAll();

    res.status(200).json(providers);
  },
  async store() {
    const [req, res] = arguments;

    const { name } = req.body;

    const newProvider = await FornecedorModel.create({ name });

    if (newProvider) {
      res.status(201).json(newProvider);
    } else {
      res.status(401).json({ Message: "Fornecedor não cadastrado!" });
    }
  },
  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const providerFound = await FornecedorModel.findByPk(id);

    if (providerFound) {
      res.status(200).json(providerFound);
    } else {
      res.status(404).json({ message: "Fornecedor não encontrado" });
    }
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const providerFound = await FornecedorModel.findByPk(id);

    if (providerFound) {
      providerFound.set(req.body);

      const providerUpdated = await providerFound.save();

      res.status(200).json(providerUpdated);
    } else {
      res.status(404).json({ message: "Fornecedor não encontrada" });
    }
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const providerFound = await FornecedorModel.findByPk(id);

    if (providerFound) {
      providerFound.destroy();
      res.status(200).json({ Message: `Fornecedor deletado com sucesso!` });
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  },
};

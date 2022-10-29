const FornecedorModel = require("../models/FornecedorModel");

module.exports = {
  async getAll() {

    const [, res, next] = arguments;

    try {

      const providers = await FornecedorModel.findAll();

      res.status(200).json(providers);
    } catch (error) {
      next(error);
    }
  },
  async store() {

    const [req, res, next] = arguments;

    try {

      const { name } = req.body;

      const newProvider = await FornecedorModel.create({ name });

      if (newProvider) {
        res.status(201).json(newProvider);
      } else {
        res.status(401).json({ Message: "Fornecedor não cadastrado!" });
      }
    } catch (error) {
      next(error);
    }
  },
  async getById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const providerFound = await FornecedorModel.findByPk(id);

      if (!providerFound) {
        return res.status(404).json({ message: "Fornecedor não encontrado" });
      }
      return res.status(200).json(providerFound);
    } catch (error) {
      next(error);
    }
  },
  async updateById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const providerFound = await FornecedorModel.findByPk(id);

      if (!providerFound) {
        return res.status(404).json({ message: "Fornecedor não encontrada" });
      }

      providerFound.set(req.body);

      const providerUpdated = await providerFound.save();

      return res.status(200).json(providerUpdated);
    } catch (error) {
      next(error);
    }
  },

  async deleteById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const providerFound = await FornecedorModel.findByPk(id);

      if (!providerFound) {
        return res.status(404).json({ message: "Categoria não encontrada" });
      }

      providerFound.destroy();

      return res
        .status(200)
        .json({ Message: `Fornecedor deletado com sucesso!` });
    } catch (error) {
      next(error);
    }
  },
};

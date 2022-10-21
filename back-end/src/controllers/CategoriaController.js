const CategoriaModel = require("../models/CategoriaModel");

module.exports = {
  async getAll() {
    const [_req, res] = arguments;

    const categories = await CategoriaModel.findAll();

    return res.json(categories);
  },

  async store() {
    const [req, res] = arguments;

    const { name } = req.body;

    const category = await CategoriaModel.create({ name });

    if (category) {
      return res.status(201).json(category);
    } else {
      res.status(401).json({ Message: "Categoria não cadastrada." });
    }
  },
  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const categoryFound = await CategoriaModel.findByPk(id);

    if (categoryFound) {
      res.status(200).json(categoryFound);
    } else {
      res.status(404).json({ Message: "Categoria não encontrada" });
    }
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const categoryFound = await CategoriaModel.findByPk(id);

    if (categoryFound) {
      categoryFound.set(req.body);

      const categoryUpdated = await categoryFound.save();

      res.status(200).json(categoryUpdated);
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const categoryFound = await CategoriaModel.findByPk(id);

    if (categoryFound) {
      categoryFound.destroy();
      res.status(200).json({ Message: `Categoria deletada com sucesso!` });
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  },
};

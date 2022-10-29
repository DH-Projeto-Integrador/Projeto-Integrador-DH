const CategoriaModel = require("../models/CategoriaModel");

module.exports = {
  async getAll() {

    const [, res, next] = arguments;

    try {

      const categories = await CategoriaModel.findAll();

      return res.json(categories);
    } catch (error) {
      next(error);
    }
  },

  async store() {

    const [req, res, next] = arguments;

    try {

      const { name } = req.body;

      const category = await CategoriaModel.create({ name });

      if (!category) {
        return res.status(401).json({ Message: "Categoria não cadastrada." });
      }

      return res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  },
  async getById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const categoryFound = await CategoriaModel.findByPk(id);

      if (!categoryFound) {
        return res.status(404).json({ Message: "Categoria não encontrada" });
      }
      return res.status(200).json(categoryFound);
    } catch (error) {
      next(error);
    }
  },
  async updateById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const categoryFound = await CategoriaModel.findByPk(id);

      if (!categoryFound) {
        return res.status(404).json({ message: "Categoria não encontrada" });
      }

      categoryFound.set(req.body);

      const categoryUpdated = await categoryFound.save();

      return res.status(200).json(categoryUpdated);
    } catch (error) {
      next(error);
    }
  },

  async deleteById() {

    const [req, res, next] = arguments;
    
    try {

      const { id } = req.params;

      const categoryFound = await CategoriaModel.findByPk(id);

      if (!categoryFound) {
        res.status(404).json({ message: "Categoria não encontrada" });
      }

      categoryFound.destroy();

      res.status(200).json({ Message: `Categoria deletada com sucesso!` });
    } catch (error) {
      next(error);
    }
  },
};

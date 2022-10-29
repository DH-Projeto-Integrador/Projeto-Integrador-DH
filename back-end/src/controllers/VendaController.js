const VendaModel = require("../models/VendaModel");

module.exports = {
  async getAll() {

    const [, res, next] = arguments;

    try {

      const sales = await VendaModel.findAll();

      return res.json(sales);
    } catch (error) {
      next(error);
    }
  },

  async store() {

    const [req, res, next] = arguments;

    try {

      const { date_sell, amount, status_sale, id_type_payments, id_users } =
        req.body;

      const sale = await VendaModel.create({
        date_sell,
        amount,
        status_sale,
        id_type_payments,
        id_users,
      });

      if (!sale) {
        return res.status(401).json({ Message: "Venda não cadastrada." });
      }

      return res.status(201).json(sale);
    } catch (error) {
      next(error);
    }
  },
  async getById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const saleFound = await VendaModel.findByPk(id);

      if (!saleFound) {
        return res.status(404).json({ Message: "Venda não encontrada" });
      }

      return res.status(200).json(saleFound);
    } catch (error) {
      next(error);
    }
  },
  async updateById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const saleFound = await VendaModel.findByPk(id);

      if (!saleFound) {
        return res.status(404).json({ message: "Venda não encontrada" });
      }

      saleFound.set(req.body);

      const saleUpdated = await saleFound.save();

      return res.status(200).json(saleUpdated);
    } catch (error) {
      next(error);
    }
  },

  async deleteById() {

    const [req, res, next] = arguments;
    
    try {

      const { id } = req.params;

      const saleFound = await VendaModel.findByPk(id);

      if (!saleFound) {
        res.status(404).json({ message: "Venda não encontrada" });
      }

      saleFound.destroy();

      return res.status(200).json({ Message: `Venda deletada com sucesso!` });
    } catch (error) {
      next(error);
    }
  },
};

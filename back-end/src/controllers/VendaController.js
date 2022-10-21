const VendaModel = require("../models/VendaModel");

module.exports = {
  async getAll() {
    const [_req, res] = arguments;

    const sales = await VendaModel.findAll();

    return res.json(sales);
  },

  async store() {
    const [req, res] = arguments;

    const { date_sell, amount, status_sale, id_type_payments, id_users } =
      req.body;

    const sale = await VendaModel.create({
      date_sell,
      amount,
      status_sale,
      id_type_payments,
      id_users,
    });

    if (sale) {
      return res.status(201).json(sale);
    } else {
      res.status(401).json({ Message: "Venda não cadastrada." });
    }
  },
  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const saleFound = await VendaModel.findByPk(id);

    if (saleFound) {
      res.status(200).json(saleFound);
    } else {
      res.status(404).json({ Message: "Venda não encontrada" });
    }
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const saleFound = await VendaModel.findByPk(id);

    if (saleFound) {
      saleFound.set(req.body);

      const saleUpdated = await saleFound.save();

      res.status(200).json(saleUpdated);
    } else {
      res.status(404).json({ message: "Venda não encontrada" });
    }
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const saleFound = await VendaModel.findByPk(id);

    if (saleFound) {
      saleFound.destroy();
      res.status(200).json({ Message: `Venda deletada com sucesso!` });
    } else {
      res.status(404).json({ message: "Venda não encontrada" });
    }
  },
};

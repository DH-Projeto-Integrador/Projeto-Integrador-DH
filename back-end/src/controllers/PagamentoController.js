const PagamentoModel = require("../models/PagamentoModel");

module.exports = {
  async getAll() {
    const [, res] = arguments;

    const payments = await PagamentoModel.findAll();

    return res.json(payments);
  },

  async store() {
    const [req, res] = arguments;

    const { type_payment } = req.body;

    const payment = await PagamentoModel.create({ type_payment });

    if (!payment) {
      return res
        .status(401)
        .json({ Message: "Tipo de pagamento não cadastrada." });
    }

    return res.status(201).json(payment);
  },
  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const paymentFound = await PagamentoModel.findByPk(id);

    if (!paymentFound) {
      return res
        .status(404)
        .json({ Message: "Tipo de pagamento não encontrada" });
    }

    return res.status(200).json(paymentFound);
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const paymentFound = await PagamentoModel.findByPk(id);

    if (!paymentFound) {
      return res
        .status(404)
        .json({ message: "Tipo de pagamento não encontrado" });
    }

    paymentFound.set(req.body);

    const paymentUpdated = await paymentFound.save();

    return res.status(200).json(paymentUpdated);
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const paymentFound = await PagamentoModel.findByPk(id);

    if (!paymentFound) {
      return res
        .status(404)
        .json({ message: "Tipo de pagamento não encontrado" });
    }

    paymentFound.destroy();
    
    return res
      .status(200)
      .json({ Message: `Tipo de pagamento deletado com sucesso!` });
  },
};

const PagamentoModel = require("../models/PagamentoModel");

module.exports = {
  async getAll() {

    const [, res, next] = arguments;

    try {

      const payments = await PagamentoModel.findAll();

      return res.json(payments);
    } catch (error) {
      next(error);
    }
  },

  async store() {

    const [req, res, next] = arguments;

    try {

      const { type_payment } = req.body;

      const payment = await PagamentoModel.create({ type_payment });

      if (!payment) {
        return res
          .status(401)
          .json({ Message: "Tipo de pagamento não cadastrada." });
      }

      return res.status(201).json(payment);
    } catch (error) {
      next(error);
    }
  },
  async getById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const paymentFound = await PagamentoModel.findByPk(id);

      if (!paymentFound) {
        return res
          .status(404)
          .json({ Message: "Tipo de pagamento não encontrada" });
      }

      return res.status(200).json(paymentFound);
    } catch (error) {
      next(error);
    }
  },
  async updateById() {

    const [req, res, next] = arguments;

    try {

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
    } catch (error) {
      next(error);
    }
  },

  async deleteById() {

    const [req, res, next] = arguments;
    
    try {

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
    } catch (error) {
      next(error);
    }
  },
};

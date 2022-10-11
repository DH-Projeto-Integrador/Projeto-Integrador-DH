const PagamentoModel = require('../models/PagamentoModel');

module.exports = {

    async getAll() {

        const [_req, res] = arguments

        const payments = await PagamentoModel.findAll();
    
        return res.json(payments);

    },

    async store() {

        const [req, res] = arguments;

        const { type_payment } = req.body;

        const payment = await PagamentoModel.create({ type_payment });
    
        if(payment) {
            return res
        .status(201)
        .json(payment);
        } else {
            res
            .status(401)
            .json({Message: "Tipo de pagamento não cadastrada."})
        }       

    },
    async getById() {
        const [req, res] = arguments;

        const { id } = req.params;

        const paymentFound = await PagamentoModel.findByPk(id);

        if (paymentFound) {
            res
                .status(200)
                .json(paymentFound);
        }
        else {
            res
            .status(404)
            .json({ Message: 'Tipo de pagamento não encontrada' })
        }
    },
    async updateById() {

        const [req, res] = arguments;

        const { id } = req.params;

        const paymentFound = await PagamentoModel.findByPk(id);

        if (paymentFound) {

            paymentFound.set(req.body);

            const paymentUpdated = await paymentFound.save();

            res
                .status(200)
                .json(paymentUpdated);
        }
        else {
            res
                .status(404)
                .json({ message: 'Tipo de pagamento não encontrado' })
        }
    },

    async deleteById() {

        const [req, res] = arguments;

        const { id } = req.params;

        const paymentFound = await PagamentoModel.findByPk(id);

        if (paymentFound) {
            paymentFound.destroy();
            res
                .status(200)
                .json({Message:`Tipo de pagamento deletado com sucesso!`});
        }
        else {
            res
                .status(404)
                .json({ message: 'Tipo de pagamento não encontrado' });
        }
    }
}
const Categoria = require('../models/Categoria');

module.exports = {

    async index() {

        const [_req, res] = arguments

        const categorias = await Categoria.findAll();
    
        return res.json(categorias);

    },

    async store() {

        const [req, res] = arguments;

        const { name } = req.body;

        const categoria = await Categoria.create({ name });
    
        return res.status(201).json(categoria);

      }
}
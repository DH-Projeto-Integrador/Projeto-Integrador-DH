const path = require('path');
const { user, database } = require('../models/user.db')

const cadastroUsuario = {
    View: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/cadastro.html'));
    },
    Create: async (req,res) => {
        await database.sync()
        const { email, password } = req.body

        const newUser = await user.create({
            email,
            password
        })

        if(newUser) {
            res.status(201).redirect('/')
        } else {
            res.status(400).json()
        }
    }
}

module.exports = cadastroUsuario
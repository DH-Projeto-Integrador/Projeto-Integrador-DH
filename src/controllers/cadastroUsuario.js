const path = require('path');

const cadastroUsuario = {
    View: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/cadastro.html'));
    },
    Create: async (req,res) => {}
}

module.exports = cadastroUsuario
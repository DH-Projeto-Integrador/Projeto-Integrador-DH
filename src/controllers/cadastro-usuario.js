const path = require('path');

const cadastroUsuario = {

    view: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/cadastro.html'));
    }
}

module.exports = cadastroUsuario
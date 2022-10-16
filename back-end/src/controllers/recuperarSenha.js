const path = require('path');

const recuperarSenha = {

    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/recuperarSenha.html'));
    }
}

module.exports = recuperarSenha;
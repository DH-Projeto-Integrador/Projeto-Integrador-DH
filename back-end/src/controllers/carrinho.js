const path = require('path');

const carrinho = {

    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/carrinho.html'));
    }
}

module.exports = carrinho;
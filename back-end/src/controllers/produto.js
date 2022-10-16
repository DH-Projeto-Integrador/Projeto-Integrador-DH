const path = require('path');

const produto = {

    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/produto.html'));
    }
}

module.exports = produto;
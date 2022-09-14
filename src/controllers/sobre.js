const path = require('path');

const controller = {
    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/sobre.html'));
    }

    }


module.exports = controller;
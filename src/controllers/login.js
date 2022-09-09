const path = require('path');

const login = {

    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    }
}

module.exports = login;
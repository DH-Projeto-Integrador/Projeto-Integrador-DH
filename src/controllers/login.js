const path = require('path');

const login = {
    View: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    isValidUser: async (req,res) => {}
}

module.exports = login;
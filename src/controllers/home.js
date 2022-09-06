const path = require('path')

const home = {
    
    view: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    }
}

module.exports = home;
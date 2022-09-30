const path = require('path');

const perfilUsuario = {

  view: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/perfilUsuario.html'));
  },
};

module.exports = perfilUsuario;

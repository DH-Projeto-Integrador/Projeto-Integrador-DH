const UsuarioModel = require("../models/UsuarioModel");
const { CreateToken } = require('../services/authJwtController');

module.exports = {
  async ValidationUser() {
    const [requireClient, responseServer] = arguments;

    const { email: emailBody, password: passwordBody } = requireClient.body;

    const userFound = await UsuarioModel.findOne({
      where: {
        email: emailBody,
        password: passwordBody,
      }
    })

    if (!userFound) {
      return responseServer
        .status(400)
        .json({
          messengeError: "Usuário ou senha incorreta."
        });
    }

    const { id, name, lastname, email, phone, full_address } = userFound;

    return responseServer
      .status(200)
      .json({
        token: CreateToken(
          {
            id,
            name,
            lastname,
            email,
            phone,
            full_address,
          }
        )
      });
  }
}
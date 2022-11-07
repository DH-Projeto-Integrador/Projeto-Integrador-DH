const { VerifyToken } = require('../services/authJwtController');

function Authorize(resquest, response, next) {
  const currentToken = resquest.header('Authorization')

  if (!currentToken) {
    return response
      .status(401)
      .json({
        mensage: 'Não há autorização.'
      });
  }

  try {
    const payloadDecoded = VerifyToken(currentToken);

    if (!payloadDecoded) {
      return response
        .status(401)
        .json({
          mensage: 'Token de autorização inválido!'
        });
    }

    next()
  }
  catch (error) {
    return response
      .status(500)
      .json({
        mensage: 'Erro na validação do Token!',
        bodyMessage: error.mensage
      });
  }
}

module.exports = { Authorize }
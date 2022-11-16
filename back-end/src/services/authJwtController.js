require('dotenv').config();

const Jwt = require('jsonwebtoken');
const secretKey = process.env.PASSWORD_TOKEN;

module.exports = {
  CreateToken: (bodyPayload, secretKey) => {
    return Jwt.sign(bodyPayload, secretKey, { expiresIn: '7 days' });
  },

  VerifyToken: (currentToken) => {
    return Jwt.verify(currentToken, secretKey, (error, decoded) => {
      if (error) {
        throw new UserException("InvalidToken");
      }

      return decoded;
    });
  }
}
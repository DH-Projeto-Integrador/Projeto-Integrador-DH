const UsuarioModel = require("../models/UsuarioModel");
const jwt = require("jsonwebtoken");

module.exports = {
  async getAll() {

    const [, res, next] = arguments;

    try {

      const users = await UsuarioModel.findAll();

      return res.json(users);
    } catch (error) {
      next(error);
    }
  },

  async store() {

    const [req, res, next] = arguments;

    try {

      const { name, lastname, email, password, phone, cpf, full_address } =
        req.body;

      const user = await UsuarioModel.create({
        name,
        lastname,
        email,
        password,
        phone,
        cpf,
        full_address,
      });

      if (!user) {
        res.status(401).json({ Message: "Erro ao cadastrar usuario" });
      }

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            cpf: user.cpf,
            full_address: user.full_address,
          },
        },
        process.env.SECRET_TOKEN
      );

      return res.status(201).json(token);
    } catch (error) {
      next(error);
    }
  },

  async getById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const userFound = await UsuarioModel.findByPk(id);

      if (!userFound) {
        res.status(404).json({ Message: "Usuario não encontrado" });
      }

      return res.status(200).json(userFound);
    } catch (error) {
      next(error);
    }
  },

  async getByEmail() {

    const [req, res, next] = arguments;

    try {

      const { email, password } = req.body;

      const userFound = await UsuarioModel.findOne({ where: { email } });

      if (userFound && userFound.password == password) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: {
              id: userFound.id,
              name: userFound.name,
              lastname: userFound.lastname,
              email: userFound.email,
              cpf: userFound.cpf,
              full_address: userFound.full_address,
            },
          },
          process.env.SECRET_TOKEN
        );

        return res.status(200).json(token);
      }

      return res.status(404).json({ Message: "Login invalido" });
    } catch (error) {
      next(error);
    }
  },

  async updateById() {

    const [req, res, next] = arguments;

    try {

      const { id } = req.params;

      const userFound = await UsuarioModel.findByPk(id);

      if (!userFound) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }

      userFound.set(req.body);

      const userUpdated = await userFound.save();

      return res.status(200).json(userUpdated);
    } catch (error) {
      next(error);
    }
  },

  async deleteById() {

    const [req, res, next] = arguments;
    
    try {

      const { id } = req.params;

      const userFound = await UsuarioModel.findByPk(id);

      if (!userFound) {
        res.status(404).json({ message: "Usuario não encontrado" });
      }

      userFound.destroy();

      res.status(200).json({ Message: `Usuario deletada com sucesso!` });
    } catch (error) {
      next(error);
    }
  },
};

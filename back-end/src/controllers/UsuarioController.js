const UsuarioModel = require("../models/UsuarioModel");
const jwt = require("jsonwebtoken");

module.exports = {
  async getAll() {
    const [, res] = arguments;

    const users = await UsuarioModel.findAll();

    return res.json(users);
  },

  async store() {
    const [req, res] = arguments;

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
  },

  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (!userFound) {
      res.status(404).json({ Message: "Usuario não encontrado" });
    }

    return res.status(200).json(userFound);
  },

  async getByEmail() {
    const [req, res] = arguments;

    const { email, password } = req.body;

    const userFound = await UsuarioModel.findOne({where: { email }});

    if (userFound && userFound.password == password ) {
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
  },

  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (!userFound) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    userFound.set(req.body);

    const userUpdated = await userFound.save();

    return res.status(200).json(userUpdated);
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (!userFound) {
      res.status(404).json({ message: "Usuario não encontrado" });
    }

    userFound.destroy();
    res.status(200).json({ Message: `Usuario deletada com sucesso!` });
  },
};

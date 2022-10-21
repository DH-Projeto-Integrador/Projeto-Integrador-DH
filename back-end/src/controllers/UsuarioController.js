const UsuarioModel = require("../models/UsuarioModel");

module.exports = {
  async getAll() {
    const [_req, res] = arguments;

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

    if (user) {
      return res.status(201).json(user);
    } else {
      res.status(401).json({ Message: "Usuario não cadastrado." });
    }
  },
  async getById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (userFound) {
      res.status(200).json(userFound);
    } else {
      res.status(404).json({ Message: "Usuario não encontrado" });
    }
  },
  async updateById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (userFound) {
      userFound.set(req.body);

      const userUpdated = await userFound.save();

      res.status(200).json(userUpdated);
    } else {
      res.status(404).json({ message: "Usuario não encontrado" });
    }
  },

  async deleteById() {
    const [req, res] = arguments;

    const { id } = req.params;

    const userFound = await UsuarioModel.findByPk(id);

    if (userFound) {
      userFound.destroy();
      res.status(200).json({ Message: `Usuario deletada com sucesso!` });
    } else {
      res.status(404).json({ message: "Usuario não encontrado" });
    }
  },
};

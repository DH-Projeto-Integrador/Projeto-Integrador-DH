const { Model, DataTypes } = require('sequelize');

//Modelagem das tabelas
class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
            cpf: DataTypes.STRING,
            full_address: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Vendas , { foreignKey: 'id_users', as: 'venda' });
    }
}

module.exports = Usuarios;
const { Model, DataTypes } = require('sequelize');

//Modelagem das tabelas
class Vendas extends Model {
    static init(sequelize) {
        super.init({
            date_sell: DataTypes.DATE,
            amount: DataTypes.INTEGER,
            status_sale: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
 /*   static associate(models) {
        this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario', as: 'usuario' });
        this.belongsTo(models.Pagamentos, { foreignKey: 'id_pagamento', as: 'pagamento' });
    }
 */
}

module.exports = Vendas;
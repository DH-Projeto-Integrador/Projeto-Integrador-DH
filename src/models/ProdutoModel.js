const { Model, DataTypes } = require('sequelize');

//Modelagem das tabelas
class Produtos extends Model {
    static init(sequelize) {
        super.init({
            image_product: DataTypes.STRING,
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            quantity_stock: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Categorias, { foreignKey: 'id_category', as: 'categoria' });
        this.belongsTo(models.Fornecedores, { foreignKey: 'id_provider', as: 'fornecedor' });
    }
}

module.exports = Produtos;
const { DataTypes } = require('sequelize')
const database = require('../databases/connection.db')

const user = database.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull:  false,
        field: "namefull"
    },
    cep: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: "cep"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "email",
        unique: true

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
    }
})

module.exports =  {
    user,
    database
}
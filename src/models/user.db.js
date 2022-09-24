const { DataTypes } = require('sequelize')
const database = require('../databases/connection.db')

const user = database.define('user', {
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
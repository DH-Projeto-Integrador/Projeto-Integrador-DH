const { Sequelize } = require('sequelize')

const database = new Sequelize('ifruits', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    database.authenticate()
    console.log("Conexão bem sucedida")
} catch (error) {
    console.log("Conexão mal sucedida", error)
}

module.exports = database
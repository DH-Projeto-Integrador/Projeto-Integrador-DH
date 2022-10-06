//Importação do dotenv para utilização das variáveis de ambiente

require('dotenv')
    .config();

//Configurações do banco de dados
module.exports = {
    dialect: process.env.SERVER_DIALECT,
    host: process.env.SERVER_HOST,
    username: process.env.SERVER_USER,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_NAME,
    define: {
        timestamps: true,
        underscored: true,
    },

}
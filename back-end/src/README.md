# Dicas sobre a implementação Sequelize x Mysql

```bash
#As configurações do banco já estão prontas >>
#Comandos no npm: 
npx sequelize-cli db:create

#Comandos no npm: 
npx sequelize-cli migration:generate --name create-nomedatabelaaqui

#Faça as configurações da sua migration: Lempre de criar as colunas e referenciá-las e que o up faz a ação e o down a desfaz(Obs.: Use arrow function e return ao invez do modelo padrão que virá com async await)

#Comandos no npm: 
npx sequelize-cli db:migrate
#Após o migrate, favor não alterar a migration, caso esqueça alguma configuração da pra alterar com uma nova migration
#Crie e configure o model
#Importe e inicialize a conexão do model no index do database
#Crie e configure o controller
#Importe e configure as rotas
```
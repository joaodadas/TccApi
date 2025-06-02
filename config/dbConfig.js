const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nome-do-banco", "usuario", "senha", {
  host: "seu-servidor.database.windows.net",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true, 
    },
  },
  logging: false, 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao SQL Azure com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao SQL Azure:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };

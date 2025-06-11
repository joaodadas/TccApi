const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Conectado ao Azure SQL com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao SQL Azure:', error);
    process.exit(1);
  }
};

module.exports = { prisma, connectDB };

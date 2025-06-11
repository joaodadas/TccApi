const { prisma } = require('../config/dbConfig');

const UserRepository = {
  async create(userData) {
    return prisma.user.create({ data: userData });
  },

  async getById(id) {
    return prisma.user.findUnique({ where: { id: Number(id) } });
  },

  async getAll() {
    return prisma.user.findMany();
  },

  async update(id, updateData) {
    return prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
    });
  },

  async delete(id) {
    return prisma.user.delete({ where: { id: Number(id) } });
  },
};

module.exports = UserRepository;

const userRepository = require('../repositories/userRepository');

module.exports = {
  createUser: (data) => userRepository.create(data),
  getUserById: (id) => userRepository.getById(id),
  getAllUsers: () => userRepository.getAll(),
  updateUser: (id, data) => userRepository.update(id, data),
  deleteUser: (id) => userRepository.delete(id),
};

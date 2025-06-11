const userService = require('../application/userService');

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário', error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover usuário', error });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};

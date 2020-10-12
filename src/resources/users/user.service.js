const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service');

// GET ALL USERS
const getAll = () => usersRepo.getAll();

// GET THE USER BY ID
const getById = id => usersRepo.getById(id);

// CREATE USER
const createUser = user => usersRepo.create(user);

// UPDATE USER
const updateUser = (id, user) => usersRepo.update(id, user);

// DELETE USER
const deleteUser = id => {
  usersRepo.deleteUser(id);
  taskService.unassignUser(id);
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};

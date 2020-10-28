const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

// GET ALL USERS
const getAllUsers = () => usersRepo.getAllUsers();

// GET THE USER BY ID
const getUserById = id => usersRepo.getUserById(id);

// CREATE USER
const createUser = user => usersRepo.createUser(user);

// UPDATE USER
const updateUser = (id, user) => usersRepo.updateUser(id, user);

// DELETE USER
const deleteUser = async id => {
  await usersRepo.deleteUser(id);
  await tasksService.unassignUser(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

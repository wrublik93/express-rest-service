const tasksRepo = require('./task.db.repository');

// GET ALL TASKS
const getAllTasks = boardId => tasksRepo.getAllTasks(boardId);

// GET TASK BY ID
const getTaskById = (boardId, id) => tasksRepo.getTaskById(boardId, id);

// CREATE TASK
const createTask = (boardId, task) => tasksRepo.createTask(boardId, task);

// UPDATE TASK
const updateTask = (boardId, id, task) =>
  tasksRepo.updateTask(boardId, id, task);

// DELETE TASK
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

// DELETE ALL TASKS
const deleteAllTasks = boardId => tasksRepo.deleteAllTasks(boardId);

// UNASSIGN USER
const unassignUser = userId => tasksRepo.unassignUser(userId);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  unassignUser
};

const db = require('../../common/inMemoryDb');
const Task = require('./task.model');
const NotFoundError = require('../../utils/errorClasses');

const TABLE = 'tasks';
const ENTITY = 'task';

// GET ALL TASKS
const getAllTasks = async boardId => db.getAllEntities(TABLE, boardId);

// ERROR MESSAGE
const errorMessage = boardId => `Board id: ${boardId}`;

// GET TASK BY ID
const getTaskById = async (boardId, id) => {
  const getBoardId = await db.getEntityById(TABLE, id, boardId);
  if (!getBoardId) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
  return getBoardId;
};

// CREATE TASK
const createTask = async (boardId, task) =>
  db.createEntity(TABLE, task, boardId);

// UPDATE TASK
const updateTask = async (boardId, id, task) => {
  const updatedTask = await db.updateEntity(TABLE, id, task, boardId);
  if (!updatedTask) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
  return updatedTask;
};

// UNASSIGN USER
const unassignUser = async userId => {
  const boardTasks = await getAllTasks(undefined);
  const tasks = Object.values(boardTasks);
  tasks.flat().forEach(async task => {
    if (task.userId === userId) {
      await updateTask(
        task.boardId,
        task.id,
        new Task({ ...task, userId: null })
      );
    }
  });
};

// DELETE TASK
const deleteTask = async (boardId, id) => {
  const deleteEntity = await db.deleteEntity(TABLE, id, boardId);
  if (!deleteEntity) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
};

// DELETE ALL TASKS
const deleteAllTasks = async boardId => {
  const getTasks = await getAllTasks(boardId);
  getTasks.forEach(async task => {
    await deleteTask(boardId, task.id);
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  unassignUser
};

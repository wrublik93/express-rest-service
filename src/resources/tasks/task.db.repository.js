/* const db = require('../../common/inMemoryDb'); */
const Task = require('./task.model');
const NotFoundError = require('../../utils/errorClasses');

// --------------//
// GET ALL TASKS
// --------------//

// memory
/* const getAllTasks = async boardId => db.getAllEntities(TABLE, boardId); */

// mongo
const getAllTasks = async boardId => Task.find({ boardId });

// ERROR MESSAGE
const errorMessage = boardId => `Board id: ${boardId}`;

// --------------//
// GET TASK BY ID
// --------------//

// memory
/* const getTaskById = async (boardId, id) => {
  const getBoardId = await db.getEntityById(TABLE, id, boardId);
  if (!getBoardId) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
  return getBoardId;
}; */

// mongo
const getTaskById = async (boardId, id) => {
  const getBoardId = await Task.findOne({ boardId, _id: id });
  if (!getBoardId) {
    throw new NotFoundError('task', id, errorMessage(boardId));
  }
  return getBoardId;
};

// --------------//
// CREATE TASK
// --------------//

// memory
/* const createTask = async (boardId, task) =>
  db.createEntity(TABLE, task, boardId); */

// mongo
const createTask = async (boardId, task) => Task.create(task);

// --------------//
// UPDATE TASK
// --------------//

// memory
/* const updateTask = async (boardId, id, task) => {
  const updatedTask = await db.updateEntity(TABLE, id, task, boardId);
  if (!updatedTask) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
  return updatedTask;
}; */

// mongo
const updateTask = async (boardId, id, task) =>
  Task.findOneAndUpdate({ _id: id }, task);

// --------------//
// UNASSIGN USER
// --------------//

// memory
/* const unassignUser = async userId => {
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
}; */

// mongo
const unassignUser = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

// --------------//
// DELETE TASK
// --------------//

// memory
/* const deleteTask = async (boardId, id) => {
  const deleteEntity = await db.deleteEntity(TABLE, id, boardId);
  if (!deleteEntity) {
    throw new NotFoundError(ENTITY, id, errorMessage(boardId));
  }
}; */

// mongo
const deleteTask = async (boardId, id) => {
  const deleteEntity = await Task.findOneAndRemove({ boardId, _id: id });
  if (!deleteEntity) {
    throw new NotFoundError('task', id, errorMessage(boardId));
  }
};

// --------------//
// DELETE ALL TASKS
// --------------//

// memory
/* const deleteAllTasks = async boardId => {
  const getTasks = await getAllTasks(boardId);
  getTasks.forEach(async task => {
    await deleteTask(boardId, task.id);
  });
}; */

// mongo
const deleteAllTasks = async boardId => Task.deleteMany({ boardId });

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  unassignUser
};

const db = require('../../common/inMemoryDb');
const NotFoundError = require('../../utils/errorClasses');

const TABLE = 'users';
const ENTITY = 'user';

// GET ALL USERS
const getAllUsers = async () => db.getAllEntities(TABLE);

// GET USER BY ID
const getUserById = async id => {
  const getUserId = await db.getEntityById(TABLE, id);
  if (!getUserId) {
    throw new NotFoundError(ENTITY, id);
  }
  return getUserId;
};

// CREATE USER
const createUser = async user => db.createEntity(TABLE, user);

// UPDATE USER
const updateUser = async (id, user) => {
  const updatedUser = await db.updateEntity(TABLE, id, user);
  if (!updatedUser) {
    throw new NotFoundError(ENTITY, id);
  }
  return updatedUser;
};

// DELETE USER
const deleteUser = async id => {
  const deleteUserId = await db.deleteEntity(TABLE, id);
  if (!deleteUserId) {
    throw new NotFoundError(ENTITY, id);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

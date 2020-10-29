/* const db = require('../../common/inMemoryDb'); */
const User = require('./user.model');
const NotFoundError = require('../../utils/errorClasses');

// --------------//
// GET ALL USERS
// --------------//

// memory
/* const getAllUsers = async () => db.getAllEntities(TABLE); */

// mongo
const getAllUsers = async () => {
  return User.find({});
};

// --------------//
// GET USER BY ID
// --------------//

// memory
/* const getUserById = async id => {
  const getUserId = await db.getEntityById(TABLE, id);
  if (!getUserId) {
    throw new NotFoundError(ENTITY, id);
  }
  return getUserId;
}; */

// mongo
const getUserById = async id => User.findOne({ _id: id });

// --------------//
// CREATE USER
// --------------//

// memory
/* const createUser = async user => db.createEntity(TABLE, user); */

// mongo
const createUser = async user => User.create(user);

// --------------//
// UPDATE USER
// --------------//

// memory
/* const updateUser = async (id, user) => {
  const updatedUser = await db.updateEntity(TABLE, id, user);
  if (!updatedUser) {
    throw new NotFoundError(ENTITY, id);
  }
  return updatedUser;
}; */

// mongo
const updateUser = async (id, user) => User.findOneAndUpdate({ _id: id }, user);

// --------------//
// DELETE USER
// --------------//

// memory
/* const deleteUser = async id => {
  const deleteUserId = await db.deleteEntity(TABLE, id);
  if (!deleteUserId) {
    throw new NotFoundError(ENTITY, id);
  }
}; */

// mongo
const deleteUser = async id => {
  const deleteUserId = User.remove({ _id: id });
  if (!deleteUserId) {
    throw new NotFoundError('user', id);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

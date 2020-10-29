/* const db = require('../../common/inMemoryDb'); */
const Board = require('./board.model');
const NotFoundError = require('../../utils/errorClasses');

// --------------//
// GET ALL BOARDS
// --------------//

// memory
/* const getAllBoards = async () => db.getAllEntities(TABLE); */

// mongo
const getAllBoards = async () => Board.find({});

// --------------//
// GET BOARD BY ID
// --------------//

// memory
/* const getBoardById = async id => {
  const getBoardId = await db.getEntityById(TABLE, id);
  if (!getBoardId) {
    throw new NotFoundError(ENTITY, id);
  }
  return getBoardId;
}; */

// mongo
const getBoardById = async id => {
  const getBoardId = await Board.findOne({ _id: id });
  if (!getBoardId) {
    throw new NotFoundError('board', id);
  }
  return getBoardId;
};

// --------------//
// CREATE BOARD
// --------------//

// memory
/* const createBoard = async board => db.createEntity(TABLE, board); */

// mongo
const createBoard = async board => Board.create(board);

// --------------//
// UPDATE BOARD
// --------------//

// memory
/* const updateBoard = async (id, board) => {
  const boardForUpdate = await db.updateEntity(TABLE, id, board);
  if (!boardForUpdate) {
    throw new NotFoundError(ENTITY, id);
  }
  return boardForUpdate;
}; */

// mongo
const updateBoard = async (id, board) =>
  Board.findOneAndUpdate({ _id: id }, board);

// --------------//
// DELETE BOARD
// --------------//

// memory
/* const deleteBoard = async id => {
  if (!(await db.deleteEntity(TABLE, id))) {
    throw new NotFoundError(ENTITY, id);
  }
};
 */

// mongo
const deleteBoard = async id => {
  const deleteBoardRes = await Board.remove({ _id: id });
  if (!deleteBoardRes) {
    throw new NotFoundError('board', id);
  }
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};

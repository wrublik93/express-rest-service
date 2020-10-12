const db = require('../../common/inMemoryDb');
const NotFoundError = require('../../utils/errorClasses');

const TABLE = 'boards';
const ENTITY = 'board';

// GET ALL BOARDS
const getAllBoards = async () => db.getAllEntities(TABLE);

// GET BOARD BY ID
const getBoardById = async id => {
  const getBoardId = await db.getEntityById(TABLE, id);
  if (!getBoardId) {
    throw new NotFoundError(ENTITY, id);
  }
  return getBoardId;
};

// CREATE BOARD
const createBoard = async board => db.createEntity(TABLE, board);

// UPDATE BOARD
const updateBoard = async (id, board) => {
  const boardForUpdate = await db.updateEntity(TABLE, id, board);
  if (!boardForUpdate) {
    throw new NotFoundError(ENTITY, id);
  }
  return boardForUpdate;
};

// DELETE BOARD
const deleteBoard = async id => {
  if (!(await db.deleteEntity(TABLE, id))) {
    throw new NotFoundError(ENTITY, id);
  }
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};

const boardsRepo = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

// GET ALL BOARDS
const getAllBoards = () => boardsRepo.getAllBoards();

// GET BOARD BY ID
const getBoardById = id => boardsRepo.getBoardById(id);

// CREATE BOARD
const createBoard = board => boardsRepo.createBoard(board);

// UPDATE BOARD
const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);

// DELETE BOARD
const deleteBoard = id => {
  boardsRepo.deleteBoard(id);
  tasksService.deleteAllTasks(id);
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};

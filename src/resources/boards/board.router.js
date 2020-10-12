const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const Board = require('./board.model');
const boardsService = require('./board.service');

// GET ALL BOARDS
router.route('/').get(async (req, res) => {
  handleRoute(async () => {
    const getBoards = await boardsService.getAllBoards();
    res.status(200).send(getBoards.map(Board.toResponse));
  }, res);
});

// GET BOARD BY ID
router.route('/:id').get(async (req, res) => {
  handleRoute(async () => {
    const getBoardId = await boardsService.getBoardById(req.params.id);
    res.status(200).send(Board.toResponse(getBoardId));
  }, res);
});

// CREATE BOARD
router.route('/').post(async (req, res) => {
  handleRoute(async () => {
    const { title, columns } = req.body;
    const startBoard = await boardsService.createBoard(
      new Board({
        title,
        columns
      })
    );

    res.status(200).send(Board.toResponse(startBoard));
  }, res);
});

// UPDATE BOARD
router.route('/:id').put(async (req, res) => {
  handleRoute(async () => {
    const { id } = req.params;
    const { title, columns } = req.body;
    const updatedBoard = await boardsService.updateBoard(
      id,
      new Board({
        id,
        title,
        columns
      })
    );

    res.status(200).send(Board.toResponse(updatedBoard));
  }, res);
});

// DELETE BOARD
router.route('/:id').delete(async (req, res) => {
  handleRoute(async () => {
    await boardsService.deleteBoard(req.params.id);
    res.status(204).send('BOARD SUCCESSFULLY DELETED!!!');
  }, res);
});

module.exports = router;

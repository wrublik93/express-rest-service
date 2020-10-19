const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const Board = require('./board.model');
const boardsService = require('./board.service');

// GET ALL BOARDS
router.route('/').get(
  handleRoute(async (req, res) => {
    const getBoards = await boardsService.getAllBoards();
    res.status(200).send(getBoards.map(Board.toResponse));
  })
);

// GET BOARD BY ID
router.route('/:id').get(
  handleRoute(async (req, res) => {
    const getBoardId = await boardsService.getBoardById(req.params.id);
    res.status(200).send(Board.toResponse(getBoardId));
  })
);

// CREATE BOARD
router.route('/').post(
  handleRoute(async (req, res) => {
    const { title, columns } = req.body;
    const startBoard = await boardsService.createBoard(
      new Board({
        title,
        columns
      })
    );

    res.status(200).send(Board.toResponse(startBoard));
  })
);

// UPDATE BOARD
router.route('/:id').put(
  handleRoute(async (req, res) => {
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
  })
);

// DELETE BOARD
router.route('/:id').delete(
  handleRoute(async (req, res) => {
    await boardsService.deleteBoard(req.params.id);
    res.status(204).send('BOARD SUCCESSFULLY DELETED!!!');
  })
);

module.exports = router;

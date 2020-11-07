const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const Task = require('./task.model');
const tasksService = require('./task.service');

// GET ALL TASKS
router.route('/:boardId/tasks').get(
  handleRoute(async (req, res) => {
    const getTasks = await tasksService.getAllTasks(req.params.boardId);
    res.status(200).send(getTasks.map(Task.toResponse));
  })
);

// GET TASK BY ID
router.route('/:boardId/tasks/:taskId').get(
  handleRoute(async (req, res) => {
    const { boardId, taskId } = req.params;
    const getTaskId = await tasksService.getTaskById(boardId, taskId);
    res.status(200).send(Task.toResponse(getTaskId));
  })
);

// CREATE TASK
router.route('/:boardId/tasks').post(
  handleRoute(async (req, res) => {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const startTask = await tasksService.createTask(boardId, {
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    });
    res.status(200).send(Task.toResponse(startTask));
  })
);

// UPDATE TASK
router.route('/:boardId/tasks/:taskId').put(
  handleRoute(async (req, res) => {
    const { boardId, taskId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const updatedTask = await tasksService.updateTask(boardId, taskId, {
      _id: taskId,
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    });
    res.status(200).send(Task.toResponse(updatedTask));
  })
);

// DELETE TASK
router.route('/:boardId/tasks/:taskId').delete(
  handleRoute(async (req, res) => {
    const { boardId, taskId } = req.params;
    await tasksService.deleteTask(boardId, taskId);
    res.status(204).send('TASK SUCCESSFULLY DELETED!!!');
  })
);

module.exports = router;

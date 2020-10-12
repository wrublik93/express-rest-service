const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const Task = require('./task.model');
const tasksService = require('./task.service');

// GET ALL TASKS
router.route('/:boardId/tasks').get(async (req, res) => {
  handleRoute(async () => {
    const getTasks = await tasksService.getAllTasks(req.params.boardId);
    res.status(200).send(getTasks.map(Task.toResponse));
  }, res);
});

// GET TASK BY ID
router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  handleRoute(async () => {
    const { boardId, taskId } = req.params;
    const getTaskId = await tasksService.getTaskById(boardId, taskId);
    res.status(200).send(Task.toResponse(getTaskId));
  }, res);
});

// CREATE TASK
router.route('/:boardId/tasks').post(async (req, res) => {
  handleRoute(async () => {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const startTask = await tasksService.createTask(
      boardId,
      new Task({
        title,
        order,
        description,
        userId,
        boardId,
        columnId
      })
    );
    res.status(200).send(Task.toResponse(startTask));
  }, res);
});

// UPDATE TASK
router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  handleRoute(async () => {
    const { boardId, taskId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const updatedTask = await tasksService.updateTask(
      boardId,
      taskId,
      new Task({
        id: taskId,
        title,
        order,
        description,
        userId,
        boardId,
        columnId
      })
    );
    res.status(200).send(Task.toResponse(updatedTask));
  }, res);
});

// DELETE TASK
router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  handleRoute(async () => {
    const { boardId, taskId } = req.params;
    await tasksService.deleteTask(boardId, taskId);
    res.status(204).send('TASK SUCCESSFULLY DELETED!!!');
  }, res);
});

module.exports = router;

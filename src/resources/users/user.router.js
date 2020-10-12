const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const usersService = require('./user.service');
const User = require('./user.model');

// GET ALL USERS
router.route('/').get(async (req, res) => {
  handleRoute(async () => {
    const getUsers = await usersService.getAllUsers();
    res.status(200).send(getUsers.map(User.toResponse));
  }, res);
});

// GET USER BY ID
router.route('/:id').get(async (req, res) => {
  handleRoute(async () => {
    const getUserId = await usersService.getUserById(req.params.id);
    res.status(200).send(User.toResponse(getUserId));
  }, res);
});

// CREATE USER
router.route('/').post(async (req, res) => {
  handleRoute(async () => {
    const { name, login, password } = req.body;
    const startUser = await usersService.createUser(
      new User({
        name,
        login,
        password
      })
    );

    res.status(200).send(User.toResponse(startUser));
  }, res);
});

// UPDATE USER
router.route('/:id').put(async (req, res) => {
  handleRoute(async () => {
    const { name, login, password } = req.body;
    const { id } = req.params;
    const updatedUser = await usersService.updateUser(
      id,
      new User({
        name,
        login,
        password,
        id
      })
    );

    res.status(200).send(User.toResponse(updatedUser));
  }, res);
});

// DELETE USER
router.route('/:id').delete(async (req, res) => {
  handleRoute(async () => {
    await usersService.deleteUser(req.params.id);
    res.status(204).send('Deleted');
  }, res);
});

module.exports = router;

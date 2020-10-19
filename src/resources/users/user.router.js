const router = require('express').Router();
const handleRoute = require('../../utils/handleRoute');
const usersService = require('./user.service');
const User = require('./user.model');

// GET ALL USERS
router.route('/').get(
  handleRoute(async (req, res) => {
    const getUsers = await usersService.getAllUsers();
    res.status(200).send(getUsers.map(User.toResponse));
  })
);

// GET USER BY ID
router.route('/:id').get(
  handleRoute(async (req, res) => {
    const getUserId = await usersService.getUserById(req.params.id);
    res.status(200).send(User.toResponse(getUserId));
  })
);

// CREATE USER
router.route('/').post(
  handleRoute(async (req, res) => {
    const { name, login, password } = req.body;
    const startUser = await usersService.createUser(
      new User({
        name,
        login,
        password
      })
    );

    res.status(200).send(User.toResponse(startUser));
  })
);

// UPDATE USER
router.route('/:id').put(
  handleRoute(async (req, res) => {
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
  })
);

// DELETE USER
router.route('/:id').delete(
  handleRoute(async (req, res) => {
    await usersService.deleteUser(req.params.id);
    res.status(204).send('Deleted');
  })
);

module.exports = router;

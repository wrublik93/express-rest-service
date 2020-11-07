const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');
const usersRepo = require('../users/user.db.repository');
const checkHashedPassword = require('../../utils/checkHashedPassword');

const signToken = async (login, password) => {
  const user = await usersRepo.getUserByLogin(login);
  if (!user) {
    return null;
  }

  const { password: hashedPassword } = user;
  const checkRes = await checkHashedPassword(password, hashedPassword);
  if (!checkRes) {
    return null;
  }

  const token = jwt.sign({ id: user._id, login }, JWT_SECRET_KEY);

  return token;
};

module.exports = {
  signToken
};

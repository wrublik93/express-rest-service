const bcrypt = require('bcrypt');
const { DEFAULT_SALT_ROUNDS } = require('../common/config');

const hashPassword = async password =>
  bcrypt.hash(password, DEFAULT_SALT_ROUNDS);

module.exports = hashPassword;

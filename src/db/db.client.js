const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const usersRepo = require('../resources/users/user.db.repository');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log('we are connected!');
    /* await db.dropDatabase(); */
    await usersRepo.createUser({
      name: 'admin',
      login: 'admin',
      password: 'admin'
    });
    cb();
  });
};

module.exports = { connectToDB };

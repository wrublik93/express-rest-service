const loggerEntry = require('./loggerEntry');
const { exit } = process;

const uncaughtException = err => {
  loggerEntry.log({
    message: `Uncaught exception - ${err.message}`,
    level: 'error'
  });
  loggerEntry.on('finish', () => exit(1));
};

const unhandledRejection = err => {
  loggerEntry.log({
    message: `Rejection - ${err.message}`,
    level: 'error'
  });
};

module.exports = {
  uncaughtException,
  unhandledRejection
};

const loggerEntry = require('./loggerEntry');
const { exit } = process;

const uncaughtException = err => {
  loggerEntry.log({
    message: `Uncaught exception - ${err.message}`,
    level: 'error'
  });
  loggerEntry.on('finish', () => exit(1));
};

const rejection = err => {
  loggerEntry.log({
    message: `Rejection - ${err.message}`,
    level: 'error'
  });
};

module.exports = {
  uncaughtException,
  rejection
};

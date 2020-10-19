const loggerEntry = require('./loggerEntry');
const logModule = require('./../utils/logModule');

const loggingHandler = (req, res, next) => {
  loggerEntry.info({
    message: logModule({ ...req })
  });
  next();
};

module.exports = loggingHandler;

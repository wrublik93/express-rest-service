const loggerEntry = require('./loggerEntry');
const logModule = require('../utils/logModule');
const NotFoundError = require('../utils/errorClasses');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, _) => {
  const { message } = err;

  if (err instanceof NotFoundError) {
    res.status(404).send(message);
  } else {
    res.status(500).send('Oops... Internal server error!');
  }

  loggerEntry.error(logModule({ ...req, ...res, message }, true));
};

module.exports = errorHandler;

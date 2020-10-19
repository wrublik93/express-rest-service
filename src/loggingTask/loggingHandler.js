const loggerEntry = require('./loggerEntry');

const loggingHandler = (req, res, next) => {
  const { url, params, body, method } = req;
  const { status } = res;

  const bodyLogging = `Body: ${JSON.stringify(body)}`;
  const paramsLogging = `Params: ${JSON.stringify(params)}`;
  const log = `Method: ${method}. Url: ${url}. Status: ${status}`;

  loggerEntry.info({
    message: `${log} ${bodyLogging} ${paramsLogging}`
  });

  next();
};

module.exports = loggingHandler;

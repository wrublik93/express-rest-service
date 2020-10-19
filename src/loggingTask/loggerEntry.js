const path = require('path');
const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
  level: 'silly',
  /* format: format.combine(format.colorize(), format.cli()), */
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.cli())
    }),
    new transports.File({
      level: 'info',
      filename: path.resolve(__dirname, '../../logFiles/infoLogs.log'),
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      level: 'error',
      filename: path.resolve(__dirname, '../../logFiles/errorLogs.log'),
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

module.exports = (
  {
    url = '',
    params = {},
    body = {},
    method = '',
    statusCode = '',
    message = ''
  },
  isError = false
) => {
  const bodyLogging = `Body: ${JSON.stringify(body)}`;
  const paramsLogging = `Params: ${JSON.stringify(params)}`;
  const log = `Method: ${method}. Url: ${url}${
    isError ? ` Status code: ${statusCode}. Message: ${message}` : ''
  }`;
  return `${log}. ${bodyLogging}. ${paramsLogging}.`;
};

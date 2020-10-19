module.exports = (
  { url = '', params = {}, body = {}, method = '', status = '', message = '' },
  isError = false
) => {
  const bodyLogging = `Body: ${JSON.stringify(body)}`;
  const paramsLogging = `Params: ${JSON.stringify(params)}`;
  const log = isError
    ? `Method: ${method}. Url: ${url}. Status: ${status}. Message: ${message}`
    : '';
  return `${log}. ${bodyLogging}. ${paramsLogging}.`;
};

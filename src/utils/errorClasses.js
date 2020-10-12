class NotFoundError extends Error {
  constructor(entity, id, message = '') {
    super(`Oops...There is no ${entity} with this id ${id} ${message}`);
  }
}

module.exports = NotFoundError;

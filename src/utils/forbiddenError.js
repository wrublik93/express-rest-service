class ForbiddenError extends Error {
  constructor() {
    super('Forbidden ERROR!!!');
  }
}

module.exports = ForbiddenError;

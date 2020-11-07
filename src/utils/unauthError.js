class UnauthorizedError extends Error {
  constructor() {
    super('Oops! Unauthorized user!');
  }
}

module.exports = UnauthorizedError;

class ApiClientError extends Error {

  constructor(message) {
    super(message);
    this.name = 'ApiClientError';
  }

}

module.exports = ApiClientError;


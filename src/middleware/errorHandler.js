const logger = require('../config/logger');

module.exports = {

  notFound: (req, res, next) => {
    res.status(404).render('not-found', { title: '404 - Page not found' });
  },

  serverError: (err, req, res, next) => {
    logger.error(err);
    res.status(500).render('error', { title: '500 - Server error', message: 'Something went wrong!' });
  }

};


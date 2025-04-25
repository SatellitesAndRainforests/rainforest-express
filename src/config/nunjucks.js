const nunjucks = require('nunjucks');
const path = require('path');

module.exports = (app) => {

  nunjucks.configure( path.join( __dirname, '../views'), {
    autoescape: true,
    express: app
  });
  app.set('view engine', 'njk');

};

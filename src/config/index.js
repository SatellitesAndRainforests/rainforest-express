require('dotenv').config( { path: require('path').resolve(__dirname, '../../.env') });

module.exports = {

  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'RainforestExpress'

};

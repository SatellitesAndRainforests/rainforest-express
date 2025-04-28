const path = require('path');
const env = process.env.NODE_ENV || 'development';
const envFile = env === 'production' ? '.env.production' :
                env === 'test' ? '.env.test' : '.env';

require('dotenv').config({ path: path.resolve(__dirname, `../../${envFile}`) });

const requiredEnvVars = ['PORT', 'JAVA_BACKEND_API_URL', 'NODE_ENV', 'APP_NAME'];

function checkRequiredEnvVars() {
  requiredEnvVars.forEach((name) => {
    if (!process.env[name]) {
      console.warn(`Warning: Environment variable ${name} is not set.`);
    }
  });
}

checkRequiredEnvVars();

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'RainforestExpress',
  javaBackendApiUrl: process.env.JAVA_BACKEND_API_URL || 'http://localhost:8080'
};


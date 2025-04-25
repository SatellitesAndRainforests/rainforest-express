const app = require('./src/app');
const { port, appName } = require('./src/config');


app.listen( port, () => {
  console.log(`${appName} running on http://localhost:${port}`);
});


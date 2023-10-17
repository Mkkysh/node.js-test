require('dotenv').config();
const App = require('./utils/App');
const sequelize = require('./utils/db');

const app = new App({
  name: 'users',
  rabbit: {
    url: process.env.RABBIT_URL, //amqp://guest:guest@localhost:5672
  },
  microservices: ['logger']
});

const router = require('./routes/index');
app.useRoutes(router);

(async () => {
  await sequelize.sync( {alter: true} );
  console.log('База данных синхронизирована');
})();

app.start().then(() => {
  console.log('microservice users started');
});
require('dotenv').config();
const App = require('./utils/App');
const sequelize = require('./utils/db');

const app = new App({
  name: 'users',
  rabbit: {
    url: process.env.RABBIT_URL, //amqp://guest:guest@localhost:5672
  },
});


const router = require('./routes/index');
app.useRoutes(router);

// app.use((req, res, next) => {
//   req.parsed = JSON.parse(req.body);
//   next();
// });

(async () => {
  await sequelize.sync( {alter: true} );
  console.log('База данных синхронизирована');
})();

app.start().then(() => {
  console.log('microservice users started');
});
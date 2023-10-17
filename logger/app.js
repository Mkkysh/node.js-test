require('dotenv').config();
const App = require('./utils/App');
//const sequelize = require('./utils/db');

const app = new App({
  name: 'logger',
  rabbit: {
    url: process.env.RABBIT_URL, //amqp://guest:guest@localhost:5672
  },
});

// const router = require('./routes/index');
// app.useRoutes(router);

const actions = require('./actions/actions');
app.useActions(actions);

// (async () => {
//   await sequelize.sync( {alter: true} );
//   console.log('База данных синхронизирована');
// })();


app.start().then(() => {
  console.log('microservice users started');
});
require('dotenv').config();

const MicroMQ = require('micromq');

const App = require('./utils/App');

const app = new App({
  name: 'users',
  rabbit: {
    url: process.env.RABBIT_URL, //amqp://guest:guest@localhost:5672
  },
});

// app.get('/hello', async (req, res) => {
//   res.json({
//     message: 'hello',
//   });
// })

const router = require('./routes/index');
app.useRoutes(router);

app.start().then(() => {
  console.log('started');
});
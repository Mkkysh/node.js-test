require('dotenv').config();

const App = require('./utils/App');

const Gateway = require('micromq/gateway');

const gateway = new App({
  microservices: ['users'],
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

// gateway.get('/hello', async (req, res) => await res.delegate('users'));

const router = require('./routes/users');
gateway.useRoutes(router);

gateway.listen(process.env.PORT).then(() => {
  console.log('gateway started');
});